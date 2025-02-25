export const getRankColor = (rank) => {
  const rankColors = {
    'Challenger': 'bg-gradient-to-r from-purple-500 to-blue-500',
    'Grandmaster': 'bg-red-500',
    'Master': 'bg-purple-500',
    'Diamond': 'bg-blue-400',
    'Platinum': 'bg-cyan-400',
    'Gold': 'bg-yellow-500',
    'Silver': 'bg-gray-400',
    'Bronze': 'bg-orange-700',
    'Iron': 'bg-gray-600',
  }

  // Ensure exact match and case-sensitivity
  return rankColors[rank] || 'bg-gray-500' // default color if rank not found
}