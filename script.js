let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".board");

  // Initial board size
  createBoard(32);

  // Toggle drawing mode on body click
  document.querySelector("body").addEventListener("click", function(e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector("#draw");
      if(click) {
        draw.textContent = "Now you can draw";
      } else {
        draw.textContent = "You're not allowed to draw";
      }
    }
  });

  // Reset board button
  let btn_reset = document.querySelector("#reset");
  btn_reset.addEventListener("click", function () {
    resetBoard();
  });

  // Change color button
  let btn_changeColor = document.querySelector("#changeColor");
  btn_changeColor.addEventListener("click", function () {
    changeColor();
  });
});

function createBoard(size) {
  const board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What will be the size of the board?");
  if (input === null) {
    // User canceled the prompt
    return null;
  }
  input = parseInt(input);
  if (isNaN(input) || input <= 0 || input > 100) {
    alert("Please provide a valid number between 1 and 100.");
    return getSize(); // Retry input
  } else {
    alert("Now you can draw!");
    return input;
  }
}

function colorDiv(event) {
  if (click) {
    const div = event.target;
    if (color === "random") {
      div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      div.style.backgroundColor = color;
    }
  }
}

function resetBoard() {
  const divs = document.querySelectorAll(".board div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

function changeColor() {
  const newColor = prompt("Enter a color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
  if (newColor !== null) {
    color = newColor;
  }
}
