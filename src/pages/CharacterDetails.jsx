import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters.js';
import { getMoviesByCharacterId } from '../data/movies.js';
import LazyImage from '../components/shared/LazyImage.jsx';
import Skeleton from '../components/shared/Skeleton.jsx';
import './CharacterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = getCharacterById(id);
  const appearances = character ? getMoviesByCharacterId(character.id) : [];
  if (!character) {
    return (
      <section className="character-details-page">
        <div className="container">
          <Skeleton variant="card" count={1} />
        </div>
      </section>
    );
  }
  if (!character) {
    return (
      <section className="character-details-page">
        <div className="container">
          <div className="not-found">
            <div className="not-found-icon">❌</div>
            <h2>Character Not Found</h2>
            <p>The character you're looking for doesn't exist in our database.</p>
            <button onClick={() => navigate('/characters')} className="btn-primary">
              Back to Characters
            </button>
          </div>
        </div>
      </section>
    );
  }

  const renderPowerStat = (label, value) => (
    <div className="power-stat" key={label}>
      <div className="power-stat-header">
        <span className="power-stat-label">{label}</span>
        <span className="power-stat-value">{value}</span>
      </div>
      <div className="power-stat-bar">
        <div
          className="power-stat-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="character-details-page animate-fadeIn">
      <div className="container">
        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => navigate('/characters')}
          aria-label="Back to characters"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
          </svg>
          Back to Characters
        </button>

        {/* Hero Section */}
        <div className="character-hero">
          <div className="character-hero-image">
            <LazyImage
              src={character.image}
              alt={character.name}
            />
            <div
              className="hero-glow"
              style={{
                background: character.status === 'Alive'
                  ? `radial-gradient(circle, ${character.powerType === 'Tech' ? 'var(--power-tech)' : character.powerType === 'Mystic' ? 'var(--power-mystic)' : character.powerType === 'Cosmic' ? 'var(--power-cosmic)' : 'var(--power-mutant)'}20 0%, transparent 70%)`
                  : 'radial-gradient(circle, var(--status-deceased-glow) 0%, transparent 70%)'
              }}
            />
          </div>

          <div className="character-hero-content">
            <h1 className="character-title">{character.name}</h1>

            <div className="character-status-line">
              <span className={`status-badge ${character.status.toLowerCase()}`}>
                <span className="status-dot" />
                {character.status}
              </span>
              <span className="separator">•</span>
              <span className="species-badge">{character.species}</span>
              <span className="separator">•</span>
              <span
                className="power-badge"
                style={{
                  color: character.powerType === 'Tech' ? 'var(--power-tech)' :
                    character.powerType === 'Mystic' ? 'var(--power-mystic)' :
                      character.powerType === 'Cosmic' ? 'var(--power-cosmic)' :
                        'var(--power-mutant)'
                }}
              >
                {character.powerType}
              </span>
            </div>

            <p className="character-bio">{character.bio}</p>

            {/* Info Grid */}
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Origin</span>
                <span className="info-value">{character.origin}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">{character.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Affiliations</span>
                <div className="affiliations-list">
                  {character.affiliations.map((aff, index) => (
                    <span key={index} className="affiliation-tag">
                      {aff}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Powers */}
            <div className="powers-section">
              <h3 className="section-title">Powers & Abilities</h3>
              <div className="powers-list">
                {character.powers.map((power, index) => (
                  <span key={index} className="power-tag">
                    {power}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Power Stats */}
        <div className="stats-section">
          <h2 className="section-title">Power Statistics</h2>
          <div className="power-stats-grid">
            {Object.entries(character.powerStats).map(([key, value]) =>
              renderPowerStat(
                key.charAt(0).toUpperCase() + key.slice(1),
                value
              )
            )}
          </div>
        </div>

        {/* Movie Appearances */}
        {appearances.length > 0 && (
          <div className="appearances-section">
            <h2 className="section-title">
              Appears in {appearances.length} {appearances.length === 1 ? 'Movie' : 'Movies'}
            </h2>
            <div className="appearances-grid">
              {appearances.map(movie => (
                <Link
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                  className="appearance-card"
                >
                  <div className="appearance-card-image">
                    <LazyImage src={movie.poster} alt={movie.title} />
                  </div>
                  <div className="appearance-card-content">
                    <h4>{movie.title}</h4>
                    <p>{movie.releaseYear} • {movie.phase}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CharacterDetails;