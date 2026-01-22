import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { characters } from '../data/characters';
import { ITEMS_PER_PAGE, STATUS, SPECIES, POWER_TYPES } from '../data/constants.js';
import { useDebounce } from '../hooks/useDebounce.js';
import { useURLState } from '../hooks/useURLState.js';
import { useFilters } from '../hooks/useFilters.js';
import { usePagination } from '../hooks/usePagination.js';
import CharacterCard from '../components/characters/CharacterCard.jsx';
import Skeleton from '../components/shared/Skeleton.jsx';
import './Characters.css';

const Characters = () => {
  const navigate = useNavigate();
  const { getParam, setParams } = useURLState();

  // Initialize state from URL
  const [search, setSearch] = useState(getParam('search', ''));
  const [status, setStatus] = useState(getParam('status', 'all'));
  const [species, setSpecies] = useState(getParam('species', 'all'));
  const [powerType, setPowerType] = useState(getParam('powerType', 'all'));
  const [currentPage, setCurrentPage] = useState(parseInt(getParam('page', '1')));
  const [isLoading, setIsLoading] = useState(true);

  // Debounce search input
  const debouncedSearch = useDebounce(search, 300);

  // Apply filters
  const filteredCharacters = useFilters(characters, {
    search: debouncedSearch,
    status,
    species,
    powerType,
    searchFields: ['name', 'origin']
  });

  // Apply pagination
  const pagination = usePagination(filteredCharacters, currentPage, ITEMS_PER_PAGE);

  // Sync URL when filters change
  useEffect(() => {
    setParams({
      search: debouncedSearch || undefined,
      status: status !== 'all' ? status : undefined,
      species: species !== 'all' ? species : undefined,
      powerType: powerType !== 'all' ? powerType : undefined,
      page: currentPage > 1 ? currentPage : undefined
    });
  }, [debouncedSearch, status, species, powerType, currentPage, setParams]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, status, species, powerType]);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [debouncedSearch, status, species, powerType]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('all');
    setSpecies('all');
    setPowerType('all');
    setCurrentPage(1);
  };

  const hasActiveFilters = search || status !== 'all' || species !== 'all' || powerType !== 'all';

  return (
    <section className="characters-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="page-title">Characters</h1>
            <p className="page-subtitle">
              Explore {characters.length} heroes from across the multiverse
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filters-row">
            <input
              type="text"
              placeholder="Search characters..."
              value={search}
              onChange={handleSearchChange}
              className="filter-input filter-search"
            />

            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value={STATUS.ALIVE}>Alive</option>
              <option value={STATUS.DECEASED}>Deceased</option>
              <option value={STATUS.UNKNOWN}>Unknown</option>
            </select>

            <select 
              value={species} 
              onChange={(e) => setSpecies(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Species</option>
              <option value={SPECIES.HUMAN}>Human</option>
              <option value={SPECIES.ENHANCED_HUMAN}>Enhanced Human</option>
              <option value={SPECIES.ASGARDIAN}>Asgardian</option>
              <option value={SPECIES.MUTANT}>Mutant</option>
              <option value={SPECIES.MUTATED}>Mutated</option>
              <option value={SPECIES.ANDROID}>Android</option>
              <option value={SPECIES.ALIEN}>Alien</option>
            </select>

            <select 
              value={powerType} 
              onChange={(e) => setPowerType(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Power Types</option>
              <option value={POWER_TYPES.TECH}>Tech</option>
              <option value={POWER_TYPES.MYSTIC}>Mystic</option>
              <option value={POWER_TYPES.COSMIC}>Cosmic</option>
              <option value={POWER_TYPES.MUTANT}>Mutant</option>
            </select>

            {hasActiveFilters && (
              <button onClick={handleClearFilters} className="filter-clear">
                Clear Filters
              </button>
            )}
          </div>

          {/* Results summary */}
          <div className="filters-meta">
            <p className="results-count">
              Showing {pagination.startIndex}-{pagination.endIndex} of {pagination.totalItems} characters
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="card-grid">
          {isLoading ? (
            <Skeleton variant="card" count={ITEMS_PER_PAGE} />
          ) : pagination.items.length > 0 ? (
            pagination.items.map((char, index) => (
              <CharacterCard
                key={char.id}
                character={char}
                onClick={() => navigate(`/characters/${char.id}`)}
                className={`animate-fadeInUp stagger-${Math.min(index + 1, 6)}`}
              />
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No characters found</h3>
              <p>Try adjusting your filters or search query</p>
              {hasActiveFilters && (
                <button onClick={handleClearFilters} className="btn-primary">
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && pagination.totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={!pagination.hasPreviousPage}
              aria-label="Previous page"
            >
              ← Previous
            </button>

            <div className="pagination-pages">
              {pagination.pageRange.map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`pagination-page ${page === pagination.currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={!pagination.hasNextPage}
              aria-label="Next page"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Characters;