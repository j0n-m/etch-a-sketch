"use strict";

const container = document.querySelector('.container');
const CONTAINER_MIN_WIDTH = container.style.minWidth = "500px";
const CONTAINER_MIN_HEIGHT = container.style.minHeight = "500px";
const resetBtn = document.querySelector(".grid-reset-btn");
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeOutput = document.querySelector('.grid-size-output');
let gridSize = 16;

gridSizeOutput.textContent = `Grid: ${getGridSize()}x${getGridSize()}`;
window.onload = createGrid();

resetBtn.addEventListener("click", resetGrid);
gridSizeSlider.addEventListener("input", resizeGrid);


function setGridSize(newGridSize) {
  gridSize = newGridSize;
}
function getGridSize() {
  return gridSize;
}
function resizeGrid(e) {
  let newGridSize = gridSizeSlider.value;
  let gridSizeOutput = document.querySelector(".grid-size-output");

  setGridSize(newGridSize);
  gridSizeOutput.textContent = `Grid: ${getGridSize()}x${getGridSize()}`;

  resetGrid()

}

function createGrid() {
  let currentGridSize = getGridSize();

  for (let i = 0; i < currentGridSize; i++) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let j = 0; j < currentGridSize; j++) {
      let grid = document.createElement('div');
      grid.classList.add('grid');
      grid.style.setProperty('min-height', 'calc(' + CONTAINER_MIN_HEIGHT + '/' + currentGridSize + ')');
      grid.style.setProperty('min-Width', 'calc(' + CONTAINER_MIN_WIDTH + '/' + currentGridSize + ')');
      wrapper.appendChild(grid);
      container.appendChild(wrapper);
    }
  }
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    grid.addEventListener("mousedown", draw);
    grid.addEventListener("mouseover", hoverDraw);
  });

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
  container.innerHTML = '';
  createGrid();
}


