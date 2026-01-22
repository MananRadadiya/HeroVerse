import { useMemo } from 'react';

/**
 * Applies multiple filters to a dataset with memoization
 * 
 * @param {Array} data - The dataset to filter
 * @param {Object} filters - Filter configuration object
 * @returns {Array} Filtered data
 */
export const useFilters = (data, filters) => {
  return useMemo(() => {
    let filtered = [...data];

    // Text search filter (searches multiple fields)
    if (filters.search && filters.search.trim() !== '') {
      const searchLower = filters.search.toLowerCase().trim();
      filtered = filtered.filter(item => {
        const searchableFields = filters.searchFields || ['name'];
        return searchableFields.some(field => {
          const value = item[field];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchLower);
          }
          return false;
        });
      });
    }

    // Status filter
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(item => item.status === filters.status);
    }

    // Species filter
    if (filters.species && filters.species !== 'all') {
      filtered = filtered.filter(item => item.species === filters.species);
    }

    // Power type filter
    if (filters.powerType && filters.powerType !== 'all') {
      filtered = filtered.filter(item => item.powerType === filters.powerType);
    }

    // Phase filter (for movies)
    if (filters.phase && filters.phase !== 'all') {
      filtered = filtered.filter(item => item.phase === filters.phase);
    }

    // Release year filter (for movies)
    if (filters.releaseYear && filters.releaseYear !== 'all') {
      filtered = filtered.filter(item => item.releaseYear === parseInt(filters.releaseYear));
    }

    // Saga filter (for movies)
    if (filters.saga && filters.saga !== 'all') {
      filtered = filtered.filter(item => item.saga === filters.saga);
    }

    // Custom filter function
    if (filters.customFilter && typeof filters.customFilter === 'function') {
      filtered = filtered.filter(filters.customFilter);
    }

    return filtered;
  }, [data, filters]);
};