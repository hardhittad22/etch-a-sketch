const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
  container.innerHTML = ''; // Clear the current grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

resetButton.addEventListener('click', () => {
  const newSize = parseInt(prompt('Enter the number of squares per side (max 100):'), 10) || 16;
  if (newSize > 100) {
    alert('Please enter a value up to 100.');
    return;
  }
  createGrid(newSize);
});

createGrid(16); // Initial grid creation
