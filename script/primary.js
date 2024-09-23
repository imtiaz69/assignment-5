function showDonation(){
    document.getElementById('donation-section').classList.remove('hidden');
      document.getElementById('history-section').classList.add('hidden');
      document.getElementById('donation-button').classList.add('bg-lime-300', 'text-black');
      document.getElementById('donation-button').classList.remove('bg-white', 'text-gray-400','border-gray-300');
      document.getElementById('history-button').classList.remove('bg-lime-300', 'text-black');
      document.getElementById('history-button').classList.add('bg-white', 'text-gray-400');
}

function showHistory() {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-button').classList.add('bg-lime-300', 'text-black');
    document.getElementById('history-button').classList.remove('bg-white', 'text-gray-400');
    document.getElementById('donation-button').classList.remove('bg-lime-300', 'text-black');
    document.getElementById('donation-button').classList.add('bg-white', 'text-gray-400','border-gray-300');
  }
  