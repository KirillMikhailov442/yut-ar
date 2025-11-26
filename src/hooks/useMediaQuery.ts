'use client';

import { useState, useEffect } from 'react';

const useMediaQuery = (maxWidth: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth})`);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    const handleChange = () => {
      updateMatches();
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [maxWidth]);

  return matches;
};

export default useMediaQuery;
