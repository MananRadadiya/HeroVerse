import './Skeleton.css';

const Skeleton = ({ 
  variant = 'card', 
  width = '100%', 
  height = '100%', 
  count = 1,
  className = '' 
}) => {
  const skeletonArray = Array.from({ length: count });

  const getSkeletonClass = () => {
    return `skeleton skeleton-${variant} ${className}`;
  };

  return (
    <>
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          className={getSkeletonClass()}
          style={{
            width,
            height,
            '--skeleton-width': width,
            '--skeleton-height': height
          }}
          aria-hidden="true"
          role="presentation"
        />
      ))}
    </>
  );
};

export default Skeleton;
