import { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

/**
 * Lazy-loaded image with loading states and fallback
 * Uses Intersection Observer for performance
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://via.placeholder.com/400x600/1e2433/94a3b8?text=No+Image'
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageStatus, setImageStatus] = useState('loading'); // loading, loaded, error
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px' // Load images slightly before they enter viewport
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src]);

  const handleLoad = () => {
    setImageStatus('loaded');
  };

  const handleError = () => {
    setImageStatus('error');
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={`lazy-image-wrapper ${className}`} ref={imgRef}>
      {imageStatus === 'loading' && !imageSrc && (
        <div className="lazy-image-skeleton" />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`lazy-image ${imageStatus === 'loaded' ? 'loaded' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default LazyImage;