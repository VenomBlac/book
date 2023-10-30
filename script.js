const seatsContainer = document.getElementById('seats');
const selectedSeatsContainer = document.getElementById('selected-seats');
const bookButton = document.getElementById('book');
const seats = 150; // Number of seats in the cinema

for (let i = 1; i <= seats; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.innerText = i;
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    });
    seatsContainer.appendChild(seat);
}

function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeatsContainer.innerText = `Selected Seats: ${selectedSeats.length}`;
}

bookButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat before booking.');
    } else {
        const selectedSeatNumbers = Array.from(selectedSeats).map(seat => seat.innerText);
        alert(`You have booked the following seats: ${selectedSeatNumbers.join(', ')}`);
    }
});