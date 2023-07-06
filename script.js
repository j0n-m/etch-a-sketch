function createGrid() {
  const container = document.querySelector('.container');

  for (let i = 0; i < 16; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let j = 0; j < 16; j++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');

      wrapper.appendChild(grid);
    }
    container.appendChild(wrapper);
  }
  console.log(container);
}

function draw(e) {
  e.target.classList.add("draw");
}
function hoverDraw(e) {
  if (e.buttons == 1) {
    draw(e);
  }
}
function resetGrid() {
  wrappers.innerHTML = '';
  createGrid();
}
window.onload = createGrid();
const resetBtn = document.querySelector(".grid-reset-btn");
const grids = document.querySelectorAll(".grid");
const wrappers = document.querySelectorAll(".wrapper");
const container = document.querySelector('.container');
resetBtn.disabled = true;

grids.forEach((grid) => {
  grid.addEventListener("mousedown", draw);
  grid.addEventListener("mouseover", hoverDraw);
});

resetBtn.addEventListener("click", resetGrid);