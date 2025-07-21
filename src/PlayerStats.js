import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

import { players, years, sampleData } from './data';

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export default function PlayerStats({ darkMode, lang, translations }) {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedPlayer, setSelectedPlayer] = useState('Lionel Messi');

  const t = translations[lang];
  const data = sampleData[selectedPlayer][selectedYear];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: { size: 14, weight: 'bold' },
          color: darkMode ? '#eee' : '#333'
        }
      },
      title: {
        display: true,
        text: '',
        font: { size: 20, weight: 'bold' },
        color: darkMode ? '#eee' : '#333'
      },
      tooltip: {
        titleFont: { weight: 'bold' },
        bodyFont: { weight: 'bold' }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Quarters',
          font: { size: 16, weight: 'bold' },
          color: darkMode ? '#eee' : '#333'
        },
        ticks: {
          font: { weight: 'bold' },
          color: darkMode ? '#eee' : '#333'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Goals',
          font: { size: 16, weight: 'bold' },
          color: darkMode ? '#eee' : '#333'
        },
        ticks: {
          font: { weight: 'bold' },
          color: darkMode ? '#eee' : '#333',
          beginAtZero: true
        }
      }
    }
  };

  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: t.barChartTitle,
        data: data,
        backgroundColor: '#4dc9ff',
        borderRadius: 6
      }
    ]
  };

  const lineData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: t.lineChartTitle,
        data: data,
        fill: false,
        borderColor: '#a855f7',
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#333'
      }
    ]
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: darkMode ? '#1e293b' : '#f9fafb',
        color: darkMode ? '#f3f4f6' : '#1f2937',
        transition: 'background 0.3s, color 0.3s',
        position: 'relative',
        padding: '1rem 2rem'
      }}
    >
      {/* Sidebar Filters */}
      <aside
        style={{
          width: '250px',
          padding: '1.5rem',
          background: darkMode ? '#334155' : '#ffffff',
          borderRight: darkMode ? '2px solid #475569' : '2px solid #e5e7eb',
          boxShadow: darkMode ? '2px 0 8px rgba(0, 0, 0, 0.6)' : '2px 0 8px rgba(0, 0, 0, 0.05)',
          color: darkMode ? '#f3f4f6' : '#1f2937'
        }}
      >
        <div
          style={{
            border: darkMode ? '2px solid #60a5fa' : '2px solid #3b82f6',
            borderRadius: '12px',
            padding: '1rem',
            background: darkMode ? '#1e40af' : '#eff6ff'
          }}
        >
          <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>{t.selectYear}</label>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '1rem',
              background: darkMode ? '#475569' : '#fff',
              color: darkMode ? '#f3f4f6' : '#000',
              border: 'none',
              borderRadius: '6px',
              outline: 'none'
            }}
          >
            {years.map(y => (
              <option key={y}>{y}</option>
            ))}
          </select>

          <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>{t.selectPlayer}</label>
          <select
            value={selectedPlayer}
            onChange={e => setSelectedPlayer(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: darkMode ? '#475569' : '#fff',
              color: darkMode ? '#f3f4f6' : '#000',
              border: 'none',
              borderRadius: '6px',
              outline: 'none'
            }}
          >
            {players.map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            fontFamily: `'Playfair Display', serif`,
            textAlign: 'center',
            marginBottom: '2rem',
            color: darkMode ? '#e0e7ff' : '#1f2937',
            transition: 'color 0.3s'
          }}
        >
          {t.title}
        </h1>

        <div
          style={{
            background: darkMode ? '#334155' : '#fff',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: darkMode ? '0 4px 8px rgba(0,0,0,0.8)' : '0 4px 8px rgba(0,0,0,0.05)',
            transition: 'background 0.3s, box-shadow 0.3s'
          }}
        >
          <Bar
            data={barData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { ...chartOptions.plugins.title, text: t.barChartTitle }
              }
            }}
          />
        </div>

        <div
          style={{
            background: darkMode ? '#334155' : '#fff',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: darkMode ? '0 4px 8px rgba(0,0,0,0.8)' : '0 4px 8px rgba(0,0,0,0.05)',
            transition: 'background 0.3s, box-shadow 0.3s'
          }}
        >
          <Line
            data={lineData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { ...chartOptions.plugins.title, text: t.lineChartTitle }
              }
            }}
          />
        </div>
      </main>
    </div>
  );
}
