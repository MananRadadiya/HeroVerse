import { Link } from 'react-router-dom';
import { characters } from '../data/characters';
import { movies } from '../data/movies';
import './Home.css';

const Home = () => {
  const featuredCharacters = characters.slice(0, 6);

  return (
    <section className="home-page">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            API v1.0
          </div>
          
          <h1 className="hero-title">
            The <span className="gradient-text">HeroVerse</span> API
          </h1>
          
          <p className="hero-subtitle">
            Access comprehensive data about Marvel-inspired characters and movies 
            through our modern, RESTful API. Built for developers, by developers.
          </p>

          <div className="hero-ctas">
            <Link to="/characters" className="btn-primary btn-large">
              <span>Explore Characters</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
            <Link to="/docs" className="btn-secondary btn-large">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span>Read Documentation</span>
            </Link>
          </div>

          <div className="hero-code">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">Quick Start</span>
            </div>
            <pre className="code-content">
              <code>{`fetch('https://heroverse-api.dev/api/characters')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
            </pre>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{characters.length}+</div>
              <div className="stat-label">Characters</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎬</div>
              <div className="stat-number">{movies.length}+</div>
              <div className="stat-label">Movies</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">&lt;50ms</div>
              <div className="stat-label">Response Time</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="section-header">
            <h2 className="section-title">Why HeroVerse API?</h2>
            <p className="section-subtitle">
              Everything you need to build amazing applications with superhero data
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🔍</div>
              </div>
              <h3>Advanced Filtering</h3>
              <p>
                Filter characters by status, species, power type, and more. 
                Combine multiple filters for precise results.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📊</div>
              </div>
              <h3>Rich Data</h3>
              <p>
                Comprehensive character profiles with power statistics, 
                affiliations, origins, and detailed biographies.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🔗</div>
              </div>
              <h3>Linked Resources</h3>
              <p>
                Characters linked to movies, power types, and affiliations 
                for easy navigation and data relationships.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📱</div>
              </div>
              <h3>RESTful Design</h3>
              <p>
                Clean, predictable endpoints following REST principles. 
                Easy to integrate with any tech stack.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⚡</div>
              </div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized responses with intelligent caching. 
                Sub-50ms average response times for all endpoints.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📖</div>
              </div>
              <h3>Great Documentation</h3>
              <p>
                Comprehensive docs with code examples in multiple languages. 
                Get started in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Characters */}
        <div className="featured-section">
          <div className="section-header">
            <h2 className="section-title">Featured Characters</h2>
            <Link to="/characters" className="section-link">
              View All →
            </Link>
          </div>

          <div className="featured-grid">
            {featuredCharacters.map(character => (
              <Link 
                key={character.id}
                to={`/characters/${character.id}`}
                className="featured-card"
              >
                <div className="featured-image">
                  <img src={character.image} alt={character.name} />
                  <div className="featured-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
                <div className="featured-content">
                  <h4>{character.name}</h4>
                  <p>{character.powerType}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h2>Ready to get started?</h2>
            <p>
              Explore our comprehensive API documentation and start building 
              amazing applications with HeroVerse data.
            </p>
            <Link to="/docs" className="btn-primary btn-large">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;