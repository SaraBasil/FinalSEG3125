import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { sampleData, players, years } from './data';

export default function ComparePlayers({ darkMode, lang, translations }) {
  const [selectedYear, setSelectedYear] = useState('2023');
  const t = translations[lang];

  const chartData = {
    labels: players,
    datasets: [
      {
        label: `${t.barChartTitle} (${selectedYear})`,
        data: players.map(player => {
          const goals = sampleData[player][selectedYear];
          return goals.reduce((sum, g) => sum + g, 0);
        }),
        backgroundColor: '#f97316',
        borderRadius: 6
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: darkMode ? '#eee' : '#333',
          font: { weight: 'bold' }
        }
      },
      title: {
        display: true,
        text: `Player Comparison - ${selectedYear}`,
        font: { size: 18, weight: 'bold' },
        color: darkMode ? '#eee' : '#333'
      }
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? '#eee' : '#333',
          font: { weight: 'bold' }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Total Goals',
          font: { weight: 'bold' },
          color: darkMode ? '#eee' : '#333'
        },
        ticks: {
          color: darkMode ? '#eee' : '#333',
          beginAtZero: true
        }
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: darkMode ? '#fff' : '#000' }}>
        {t.title} - Compare Players
      </h2>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>{t.selectYear}</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '6px',
            background: darkMode ? '#475569' : '#fff',
            color: darkMode ? '#fff' : '#000'
          }}
        >
          {years.map(year => <option key={year}>{year}</option>)}
        </select>
      </div>

      <div
        style={{
          background: darkMode ? '#334155' : '#fff',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: darkMode ? '0 4px 8px rgba(0,0,0,0.8)' : '0 4px 8px rgba(0,0,0,0.05)'
        }}
      >
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
