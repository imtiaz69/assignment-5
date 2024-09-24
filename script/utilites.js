let totalBalance=document.getElementById('total-balance').innerText;

function donate(cardId) {
    const donationInput = document.getElementById(`donation-input${cardId}`).value;
    const donationAmount = parseFloat(donationInput);
    
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert('Please enter a valid donation amount');
      document.getElementById(`donation-input${cardId}`).value = '';
      return;
    }
    if (donationAmount > totalBalance) {
      alert('Insufficient balance');
      document.getElementById(`donation-input${cardId}`).value = '';
      return;
    }

    totalBalance -= donationAmount; 
    
    document.getElementById('total-balance').innerText = `${totalBalance}`; 

    const currentDonation = document.getElementById(`donation${cardId}`).innerText;
    // console.log(currentDonation);
    const newDonationAmount = parseFloat(currentDonation) + donationAmount;
    document.getElementById(`donation${cardId}`).innerText = `${newDonationAmount}`;

    
    addTransactionHistory(cardId, donationAmount);

    document.getElementById(`donation-input${cardId}`).value = '';

    // for modal
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

// closing modal
document.getElementById('close-modal').addEventListener('click', function(){
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
});

new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dhaka',
    timeStyle: 'medium',
    dateStyle: 'full'
    });
// adding transaction history
function addTransactionHistory(cardId, amount) {
    const cardTitles = ['Flood at Noakhali, Bangladesh', 'Flood Relief in Feni,Bangladesh', 'Aid for Injured in the Quota Movement'];
    const now = new Date();
    const dateString = now.toString();

    const historyDiv = document.createElement('div');
    historyDiv.className = 'bg-white p-4 max-w-[1170px] mx-auto rounded-lg border border-gray-200';

    historyDiv.innerHTML = `
      <h3 class="text-lg font-semibold">${amount} Taka donated for ${cardTitles[cardId - 1]}</h3>
      <p class="text-sm text-gray-500">Date: ${dateString} </p>
    `;

    document.getElementById('history').appendChild(historyDiv);
}