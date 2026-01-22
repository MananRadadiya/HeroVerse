import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Manages state synchronized with URL search parameters
 * Enables shareable filter/pagination states
 * 
 * @returns {Object} URLState management functions
 */
export const useURLState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a parameter value
  const getParam = useCallback((key, defaultValue = '') => {
    return searchParams.get(key) || defaultValue;
  }, [searchParams]);

  // Get multiple parameters as an object
  const getParams = useCallback((keys) => {
    const params = {};
    keys.forEach(key => {
      const value = searchParams.get(key);
      if (value) params[key] = value;
    });
    return params;
  }, [searchParams]);

  // Set a single parameter
  const setParam = useCallback((key, value) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (value === '' || value === null || value === undefined) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  // Set multiple parameters at once
  const setParams = useCallback((params) => {
    const newParams = new URLSearchParams(searchParams);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  // Clear all parameters
  const clearParams = useCallback(() => {
    setSearchParams(new URLSearchParams(), { replace: true });
  }, [setSearchParams]);

  // Clear specific parameters
  const clearParam = useCallback((key) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return {
    getParam,
    getParams,
    setParam,
    setParams,
    clearParams,
    clearParam,
    searchParams
  };
};