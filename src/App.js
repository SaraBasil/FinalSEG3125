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

const translations = {
  en: {
    title: 'Sports Analytics Dashboard',
    selectYear: 'Select Year',
    selectPlayer: 'Select Player',
    barChartTitle: 'Goals per Player',
    lineChartTitle: 'Goals Over Time'
  },
  fr: {
    title: 'Tableau de bord analytique sportif',
    selectYear: 'Sélectionnez l\'année',
    selectPlayer: 'Sélectionnez un joueur',
    barChartTitle: 'Buts par joueur',
    lineChartTitle: 'Buts au fil du temps'
  }
};

const players = ['Lionel Messi', 'Carlos Vela', 'Luciano Acosta'];
const years = ['2023', '2024', '2025'];

const sampleData = {
  'Lionel Messi': {
    '2023': [2, 4, 6, 8],
    '2024': [5, 7, 3, 6],
    '2025': [7, 8, 5, 9]
  },
  'Carlos Vela': {
    '2023': [3, 5, 2, 4],
    '2024': [6, 3, 4, 7],
    '2025': [8, 6, 7, 5]
  },
  'Luciano Acosta': {
    '2023': [1, 3, 5, 7],
    '2024': [4, 5, 6, 8],
    '2025': [6, 7, 8, 9]
  }
};

export default function SportsDashboard() {
  const [lang, setLang] = useState('en');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedPlayer, setSelectedPlayer] = useState('Lionel Messi');

  const t = translations[lang];
  const data = sampleData[selectedPlayer][selectedYear];

  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: t.barChartTitle,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
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
        borderColor: 'rgba(153, 102, 255, 0.8)'
      }
    ]
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <button
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div>
          <label>{t.selectYear}</label>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="block border px-2 py-1 mt-1"
          >
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
        <div>
          <label>{t.selectPlayer}</label>
          <select
            value={selectedPlayer}
            onChange={e => setSelectedPlayer(e.target.value)}
            className="block border px-2 py-1 mt-1"
          >
            {players.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Bar data={barData} />
        </div>
        <div>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}
