export const translations = {
  en: {
    title: '⚽ Soccer Player Statistics ⚽',
    selectYear: 'Select Year',
    selectPlayer: 'Select Player',
    barChartTitle: 'Goals per Quarter',
    lineChartTitle: 'Goals Over Time',
    toggleDarkMode: 'Dark Mode'
  },
  fr: {
    title: '⚽ Statistiques des joueurs de football ⚽',
    selectYear: 'Sélectionnez l\'année',
    selectPlayer: 'Sélectionnez un joueur',
    barChartTitle: 'Buts par trimestre',
    lineChartTitle: 'Buts au fil du temps',
    toggleDarkMode: 'Mode Sombre'
  }
};

export const players = [
  'Lionel Messi', 'Carlos Vela', 'Luciano Acosta', 'Josef Martinez', 'Hany Mukhtar',
  'Christian Benteke', 'Denis Bouanga', 'Jordan Morris', 'Thiago Almada', 'João Klauss'
];

export const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

export const sampleData = {};
players.forEach(player => {
  sampleData[player] = {};
  years.forEach(year => {
    sampleData[player][year] = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
  });
});
