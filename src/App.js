// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlayerStats from './PlayerStats';
import ComparePlayers from './ComparePlayers';
import { translations } from './data';

export default function App() {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif',
          background: darkMode ? '#1e293b' : '#f9fafb',
          color: darkMode ? '#f3f4f6' : '#1f2937',
          transition: 'background 0.3s, color 0.3s'
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: darkMode ? '#0f172a' : '#e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: darkMode ? '#fff' : '#000'
              }}
            >
              Player Stats
            </Link>
            <Link
              to="/compare"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: darkMode ? '#fff' : '#000'
              }}
            >
              Compare Players
            </Link>
          </div>
          <div>
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              style={{
                marginRight: '1rem',
                padding: '0.4rem 0.8rem',
                background: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {lang === 'en' ? 'FRANÇAIS' : 'ENGLISH'}
            </button>
            <label style={{ cursor: 'pointer', userSelect: 'none' }}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                style={{ marginRight: 6 }}
              />
              {translations[lang].toggleDarkMode}
            </label>
          </div>
        </nav>

        {/* Pages */}
        <Routes>
          <Route
            path="/"
            element={<PlayerStats darkMode={darkMode} lang={lang} translations={translations} />}
          />
          <Route
            path="/compare"
            element={<ComparePlayers darkMode={darkMode} lang={lang} translations={translations} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
