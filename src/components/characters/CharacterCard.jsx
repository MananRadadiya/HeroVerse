import LazyImage from '../shared/LazyImage.jsx';
import './CharacterCard.css';

const CharacterCard = ({ character, onClick, className = '' }) => {
  const { name, status, species, powerType, image } = character;

  const getPowerTypeColor = (type) => {
    const colors = {
      Tech: 'var(--power-tech)',
      Mystic: 'var(--power-mystic)',
      Cosmic: 'var(--power-cosmic)',
      Mutant: 'var(--power-mutant)'
    };
    return colors[type] || 'var(--accent-primary)';
  };

  return (
    <article 
      className={`character-card ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${name}`}
    >
      <div className="character-card-image">
        <LazyImage src={image} alt={name} />
        <div 
          className="power-type-badge"
          style={{ 
            background: getPowerTypeColor(powerType),
            boxShadow: `0 0 16px ${getPowerTypeColor(powerType)}40`
          }}
        >
          {powerType}
        </div>
      </div>

      <div className="character-card-content">
        <h3 className="character-name">{name}</h3>
        
        <div className="character-meta">
          <span className="character-status">
            <span 
              className={`status-indicator ${status.toLowerCase()}`}
              aria-label={`Status: ${status}`}
            />
            {status}
          </span>
          <span className="character-separator">•</span>
          <span className="character-species">{species}</span>
        </div>
      </div>

      <div className="card-hover-overlay" />
    </article>
  );
};

export default CharacterCard;