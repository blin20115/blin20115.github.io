const sudoku = document.querySelector('.sudoku-deco');
const cells = [...document.querySelectorAll('.sudoku-cell')];

const base = [
  [0,0,3,0,2,0,6,0,0, 9,0,0,3,0,5,0,0,1, 0,0,1,8,0,6,4,0,0, 0,0,8,1,0,2,9,0,0, 7,0,0,0,0,0,0,0,8, 0,0,6,7,0,8,2,0,0, 0,0,2,6,0,9,5,0,0, 8,0,0,2,0,3,0,0,9, 0,0,5,0,1,0,3,0,0],
  [2,0,0,0,8,0,3,0,0, 0,6,0,0,7,0,0,8,4, 0,3,0,5,0,0,2,0,9, 0,0,0,1,0,5,4,0,8, 0,0,0,0,0,0,0,0,0, 4,0,2,7,0,6,0,0,0, 3,0,1,0,0,7,0,4,0, 7,2,0,0,4,0,0,6,0, 0,0,4,0,1,0,0,0,3],
  [0,0,0,0,0,0,9,0,7, 0,0,0,4,2,0,1,8,0, 0,0,0,7,0,5,0,2,6, 1,0,0,9,0,4,0,0,0, 0,5,0,0,0,0,0,4,0, 0,0,0,5,0,7,0,0,9, 9,2,0,1,0,8,0,0,0, 0,3,4,0,5,9,0,0,0, 5,0,7,0,0,0,0,0,0],
  [0,3,0,0,5,0,0,4,0, 0,0,8,0,1,0,5,0,0, 4,6,0,0,0,0,0,1,2, 0,7,0,5,0,2,0,8,0, 0,0,0,6,0,3,0,0,0, 0,4,0,1,0,9,0,3,0, 2,5,0,0,0,0,0,9,8, 0,0,1,0,2,0,6,0,0, 0,8,0,0,6,0,0,2,0],
];

// Renaming digits 1-9 via a bijection always produces a valid Sudoku
function remap(puzzle, map) {
  return puzzle.map(d => d === 0 ? 0 : map[d - 1]);
}

const puzzles = [
  base[0],
  base[1],
  base[2],
  base[3],
  remap(base[0], [9,8,7,6,5,4,3,2,1]),  // reverse digits
  remap(base[1], [3,4,5,6,7,8,9,1,2]),  // shift +2
  remap(base[2], [5,6,7,8,9,1,2,3,4]),  // shift +4
  remap(base[3], [7,8,9,1,2,3,4,5,6]),  // shift +6
  remap(base[0], [4,5,6,7,8,9,1,2,3]),  // shift +3
  remap(base[1], [6,7,8,9,1,2,3,4,5]),  // shift +5
];

let last = -1;

function display(puzzle) {
  cells.forEach((cell, i) => {
    cell.style.opacity = '0';
    setTimeout(() => {
      cell.textContent = puzzle[i] || '';
      cell.style.opacity = '1';
    }, 60 + Math.random() * 100);
  });
}

sudoku.addEventListener('mouseenter', () => {
  let next;
  do { next = Math.floor(Math.random() * puzzles.length); } while (next === last);
  last = next;
  display(puzzles[next]);
});
