import { useMemo } from 'react';

/**
 * Handles pagination logic with memoized page calculations
 * 
 * @param {Array} data - The complete dataset
 * @param {number} currentPage - Current page number (1-indexed)
 * @param {number} itemsPerPage - Number of items per page
 * @returns {Object} Pagination state and helpers
 */
export const usePagination = (data, currentPage = 1, itemsPerPage = 12) => {
  const paginationData = useMemo(() => {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Ensure current page is within bounds
    const validatedPage = Math.max(1, Math.min(currentPage, totalPages || 1));
    
    // Calculate slice indices
    const startIndex = (validatedPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Get paginated items
    const items = data.slice(startIndex, endIndex);
    
    // Calculate page range for pagination UI
    const getPageRange = () => {
      const range = [];
      const maxPagesToShow = 7;
      
      if (totalPages <= maxPagesToShow) {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
      } else {
        // Show ellipsis for large page counts
        if (validatedPage <= 4) {
          // Near start
          for (let i = 1; i <= 5; i++) range.push(i);
          range.push('...');
          range.push(totalPages);
        } else if (validatedPage >= totalPages - 3) {
          // Near end
          range.push(1);
          range.push('...');
          for (let i = totalPages - 4; i <= totalPages; i++) range.push(i);
        } else {
          // Middle
          range.push(1);
          range.push('...');
          for (let i = validatedPage - 1; i <= validatedPage + 1; i++) range.push(i);
          range.push('...');
          range.push(totalPages);
        }
      }
      
      return range;
    };
    
    return {
      items,
      currentPage: validatedPage,
      totalPages,
      totalItems,
      itemsPerPage,
      startIndex: startIndex + 1, // 1-indexed for display
      endIndex: Math.min(endIndex, totalItems),
      hasNextPage: validatedPage < totalPages,
      hasPreviousPage: validatedPage > 1,
      pageRange: getPageRange()
    };
  }, [data, currentPage, itemsPerPage]);

  return paginationData;
};