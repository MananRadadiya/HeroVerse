/**
 * Filter utility functions for data manipulation
 */

/**
 * Filter array by search term across multiple fields
 * @param {Array} data - Array to filter
 * @param {string} searchTerm - Search term
 * @param {Array} fields - Fields to search in
 * @returns {Array} Filtered array
 */
export const filterBySearch = (data, searchTerm, fields = ['name']) => {
  if (!searchTerm || searchTerm.trim() === '') return data;
  
  const search = searchTerm.toLowerCase().trim();
  
  return data.filter(item => {
    return fields.some(field => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(search);
      }
      if (Array.isArray(value)) {
        return value.some(v => 
          typeof v === 'string' && v.toLowerCase().includes(search)
        );
      }
      return false;
    });
  });
};

/**
 * Filter array by exact field match
 * @param {Array} data - Array to filter
 * @param {string} field - Field to filter by
 * @param {*} value - Value to match
 * @returns {Array} Filtered array
 */
export const filterByField = (data, field, value) => {
  if (!value || value === 'all') return data;
  return data.filter(item => item[field] === value);
};

/**
 * Filter array by multiple criteria
 * @param {Array} data - Array to filter
 * @param {Object} criteria - Filter criteria object
 * @returns {Array} Filtered array
 */
export const filterByMultipleCriteria = (data, criteria) => {
  let result = [...data];

  Object.entries(criteria).forEach(([key, value]) => {
    if (value && value !== 'all') {
      result = result.filter(item => {
        if (Array.isArray(item[key])) {
          return item[key].includes(value);
        }
        return item[key] === value;
      });
    }
  });

  return result;
};

/**
 * Sort array by field
 * @param {Array} data - Array to sort
 * @param {string} field - Field to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
export const sortByField = (data, field, order = 'asc') => {
  return [...data].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (typeof aVal === 'string') {
      return order === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (typeof aVal === 'number') {
      return order === 'asc' 
        ? aVal - bVal
        : bVal - aVal;
    }

    return 0;
  });
};

/**
 * Get unique values for a field across array
 * @param {Array} data - Array to extract from
 * @param {string} field - Field to get unique values for
 * @returns {Array} Array of unique values
 */
export const getUniqueValues = (data, field) => {
  const values = data.map(item => item[field]).filter(Boolean);
  return [...new Set(values)].sort();
};

/**
 * Get unique values from nested arrays
 * @param {Array} data - Array to extract from
 * @param {string} field - Field containing arrays
 * @returns {Array} Array of unique values
 */
export const getUniqueNestedValues = (data, field) => {
  const allValues = data
    .map(item => item[field])
    .filter(Array.isArray)
    .flat();
  return [...new Set(allValues)].sort();
};

/**
 * Filter by range (for numeric fields)
 * @param {Array} data - Array to filter
 * @param {string} field - Numeric field to filter by
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {Array} Filtered array
 */
export const filterByRange = (data, field, min, max) => {
  return data.filter(item => {
    const value = item[field];
    if (typeof value !== 'number') return false;
    
    const minCheck = min !== undefined ? value >= min : true;
    const maxCheck = max !== undefined ? value <= max : true;
    
    return minCheck && maxCheck;
  });
};

/**
 * Filter by date range
 * @param {Array} data - Array to filter
 * @param {string} field - Date field to filter by
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {Array} Filtered array
 */
export const filterByDateRange = (data, field, startDate, endDate) => {
  return data.filter(item => {
    const date = new Date(item[field]);
    
    const startCheck = startDate ? date >= startDate : true;
    const endCheck = endDate ? date <= endDate : true;
    
    return startCheck && endCheck;
  });
};

/**
 * Combine multiple filter functions
 * @param {Array} data - Array to filter
 * @param {Array} filters - Array of filter functions
 * @returns {Array} Filtered array
 */
export const combineFilters = (data, filters) => {
  return filters.reduce((result, filterFn) => filterFn(result), data);
};