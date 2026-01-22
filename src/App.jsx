import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Documentation from './pages/Documentation';

// Import global styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/animations.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/docs" element={<Documentation />} />
            
            {/* 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Simple 404 component
const NotFound = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      textAlign: 'center',
      padding: 'var(--space-2xl)'
    }}>
      <h1 style={{ fontSize: 'var(--text-5xl)' }}>404</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)' }}>
        Page not found
      </p>
      <a 
        href="/" 
        style={{
          padding: '12px 24px',
          background: 'var(--gradient-accent)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          fontWeight: 'var(--font-semibold)',
          textDecoration: 'none'
        }}
      >
        Go Home
      </a>
    </section>
  );
};

export default App;