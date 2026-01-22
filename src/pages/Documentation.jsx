import { useState } from 'react';
import CodeBlock from '../components/docs/CodeBlock';
import './Documentation.css';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'base', title: 'Base URL' },
    { id: 'characters', title: 'Characters' },
    { id: 'character-id', title: 'Get Character' },
    { id: 'movies', title: 'Movies' },
    { id: 'movie-id', title: 'Get Movie' },
    { id: 'examples', title: 'Examples' },
    { id: 'errors', title: 'Error Handling' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="docs-page">
      <div className="container">
        <div className="docs-layout">
          {/* Sidebar */}
          <aside className="docs-sidebar">
            <div className="docs-sidebar-content">
              <h3 className="sidebar-title">Documentation</h3>
              <nav className="sidebar-nav">
                {sections.map(section => (
                  <button
                    key={section.id}
                    className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="docs-content">
            {/* Introduction */}
            <section id="intro" className="docs-section">
              <h1>HeroVerse API Documentation</h1>
              <p className="lead">
                Welcome to the HeroVerse API! Access comprehensive data about Marvel-inspired characters 
                and movies through our RESTful API.
              </p>
              <div className="info-box">
                <strong>Note:</strong> This is a demo API for educational purposes. 
                All endpoints return mock data from a client-side database.
              </div>
            </section>

            {/* Base URL */}
            <section id="base" className="docs-section">
              <h2>Base URL</h2>
              <p>All API requests should be made to:</p>
              <CodeBlock language="bash">
                https://heroverse-api.dev/api
              </CodeBlock>
            </section>

            {/* Characters Endpoint */}
            <section id="characters" className="docs-section">
              <h2>Get All Characters</h2>
              <p>Retrieve a paginated list of characters with optional filters.</p>
              
              <div className="endpoint-card">
                <div className="endpoint-method">GET</div>
                <div className="endpoint-path">/characters</div>
              </div>

              <h3>Query Parameters</h3>
              <table className="params-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>page</code></td>
                    <td>integer</td>
                    <td>Page number (default: 1)</td>
                  </tr>
                  <tr>
                    <td><code>search</code></td>
                    <td>string</td>
                    <td>Search by name or origin</td>
                  </tr>
                  <tr>
                    <td><code>status</code></td>
                    <td>string</td>
                    <td>Filter by status: Alive, Deceased, Unknown</td>
                  </tr>
                  <tr>
                    <td><code>species</code></td>
                    <td>string</td>
                    <td>Filter by species</td>
                  </tr>
                  <tr>
                    <td><code>powerType</code></td>
                    <td>string</td>
                    <td>Filter by power type: Tech, Mystic, Cosmic, Mutant</td>
                  </tr>
                </tbody>
              </table>

              <h3>Example Request</h3>
              <CodeBlock language="javascript">
{`fetch('https://heroverse-api.dev/api/characters?status=Alive&powerType=Tech')
  .then(response => response.json())
  .then(data => console.log(data));`}
              </CodeBlock>

              <h3>Example Response</h3>
              <CodeBlock language="json">
{`{
  "info": {
    "count": 15,
    "pages": 2,
    "next": "https://heroverse-api.dev/api/characters?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Iron Sentinel",
      "status": "Alive",
      "species": "Human",
      "origin": "Earth",
      "location": "Stark Tower, New York",
      "powerType": "Tech",
      "powers": [
        "Genius Intelligence",
        "Powered Armor",
        "Energy Manipulation"
      ],
      "affiliations": ["Avengers", "S.H.I.E.L.D."],
      "image": "https://..."
    }
  ]
}`}
              </CodeBlock>
            </section>

            {/* Get Character by ID */}
            <section id="character-id" className="docs-section">
              <h2>Get Character by ID</h2>
              <p>Retrieve detailed information about a specific character.</p>
              
              <div className="endpoint-card">
                <div className="endpoint-method">GET</div>
                <div className="endpoint-path">/characters/:id</div>
              </div>

              <h3>Example Request</h3>
              <CodeBlock language="javascript">
{`fetch('https://heroverse-api.dev/api/characters/1')
  .then(response => response.json())
  .then(data => console.log(data));`}
              </CodeBlock>

              <h3>Example Response</h3>
              <CodeBlock language="json">
{`{
  "id": 1,
  "name": "Iron Sentinel",
  "status": "Alive",
  "species": "Human",
  "origin": "Earth",
  "location": "Stark Tower, New York",
  "powerType": "Tech",
  "powers": [
    "Genius Intelligence",
    "Powered Armor",
    "Energy Manipulation",
    "Flight"
  ],
  "affiliations": ["Avengers", "S.H.I.E.L.D."],
  "powerStats": {
    "intelligence": 95,
    "strength": 85,
    "speed": 70,
    "durability": 90,
    "power": 88,
    "combat": 75
  },
  "bio": "Billionaire genius and inventor...",
  "image": "https://..."
}`}
              </CodeBlock>
            </section>

            {/* Movies Endpoint */}
            <section id="movies" className="docs-section">
              <h2>Get All Movies</h2>
              <p>Retrieve a list of movies with optional filters.</p>
              
              <div className="endpoint-card">
                <div className="endpoint-method">GET</div>
                <div className="endpoint-path">/movies</div>
              </div>

              <h3>Query Parameters</h3>
              <table className="params-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>phase</code></td>
                    <td>string</td>
                    <td>Filter by MCU phase</td>
                  </tr>
                  <tr>
                    <td><code>releaseYear</code></td>
                    <td>integer</td>
                    <td>Filter by release year</td>
                  </tr>
                  <tr>
                    <td><code>saga</code></td>
                    <td>string</td>
                    <td>Filter by saga</td>
                  </tr>
                </tbody>
              </table>

              <h3>Example Response</h3>
              <CodeBlock language="json">
{`{
  "results": [
    {
      "id": 1,
      "title": "Sentinel Rising",
      "phase": "Phase 1",
      "releaseYear": 2008,
      "saga": "Infinity Saga",
      "director": "James Favreau",
      "duration": 126,
      "rating": 7.9,
      "characterIds": [1],
      "poster": "https://..."
    }
  ]
}`}
              </CodeBlock>
            </section>

            {/* Get Movie by ID */}
            <section id="movie-id" className="docs-section">
              <h2>Get Movie by ID</h2>
              <p>Retrieve detailed information about a specific movie.</p>
              
              <div className="endpoint-card">
                <div className="endpoint-method">GET</div>
                <div className="endpoint-path">/movies/:id</div>
              </div>

              <h3>Example Request</h3>
              <CodeBlock language="javascript">
{`fetch('https://heroverse-api.dev/api/movies/4')
  .then(response => response.json())
  .then(data => console.log(data));`}
              </CodeBlock>
            </section>

            {/* Code Examples */}
            <section id="examples" className="docs-section">
              <h2>Code Examples</h2>
              
              <h3>JavaScript (Fetch)</h3>
              <CodeBlock language="javascript">
{`async function getCharacters(filters = {}) {
  const params = new URLSearchParams(filters);
  const response = await fetch(
    \`https://heroverse-api.dev/api/characters?\${params}\`
  );
  const data = await response.json();
  return data.results;
}

// Usage
const characters = await getCharacters({ 
  status: 'Alive', 
  powerType: 'Tech' 
});`}
              </CodeBlock>

              <h3>JavaScript (Axios)</h3>
              <CodeBlock language="javascript">
{`import axios from 'axios';

const api = axios.create({
  baseURL: 'https://heroverse-api.dev/api'
});

// Get all characters
const { data } = await api.get('/characters', {
  params: { status: 'Alive' }
});

// Get character by ID
const character = await api.get('/characters/1');`}
              </CodeBlock>

              <h3>Python (Requests)</h3>
              <CodeBlock language="python">
{`import requests

BASE_URL = "https://heroverse-api.dev/api"

# Get characters with filters
params = {"status": "Alive", "powerType": "Cosmic"}
response = requests.get(f"{BASE_URL}/characters", params=params)
characters = response.json()["results"]

# Get character by ID
character = requests.get(f"{BASE_URL}/characters/1").json()`}
              </CodeBlock>
            </section>

            {/* Error Handling */}
            <section id="errors" className="docs-section">
              <h2>Error Handling</h2>
              <p>The API uses conventional HTTP response codes:</p>
              
              <table className="params-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>200</code></td>
                    <td>Success</td>
                  </tr>
                  <tr>
                    <td><code>404</code></td>
                    <td>Resource not found</td>
                  </tr>
                  <tr>
                    <td><code>500</code></td>
                    <td>Server error</td>
                  </tr>
                </tbody>
              </table>

              <h3>Error Response Format</h3>
              <CodeBlock language="json">
{`{
  "error": {
    "code": 404,
    "message": "Character not found",
    "details": "No character exists with ID: 999"
  }
}`}
              </CodeBlock>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Documentation;