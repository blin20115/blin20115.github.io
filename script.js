const sudoku = document.querySelector('.sudoku-deco');
const cells = [...document.querySelectorAll('.sudoku-cell')];

// Stored in box-major order (top-left box → top-mid → top-right → ... → bottom-right)
// to match the DOM cell order produced by the 9 sudoku-box divs
const puzzles = [
  // PE Grid 01
  [0,0,3,9,0,0,0,0,1, 0,2,0,3,0,5,8,0,6, 6,0,0,0,0,1,4,0,0,
   0,0,8,7,0,0,0,0,6, 1,0,2,0,0,0,7,0,8, 9,0,0,0,0,8,2,0,0,
   0,0,2,8,0,0,0,0,5, 6,0,9,2,0,3,0,1,0, 5,0,0,0,0,9,3,0,0],
  // PE Grid 02
  [2,0,0,0,6,0,0,3,0, 0,8,0,0,7,0,5,0,0, 3,0,0,0,8,4,2,0,9,
   0,0,0,0,0,0,4,0,2, 1,0,5,0,0,0,7,0,6, 4,0,8,0,0,0,0,0,0,
   3,0,1,7,2,0,0,0,4, 0,0,7,0,4,0,0,1,0, 0,4,0,0,6,0,0,0,3],
  // PE Grid 03
  [0,0,0,0,0,0,0,0,0, 0,0,0,4,2,0,7,0,5, 9,0,7,1,8,0,0,2,6,
   1,0,0,0,5,0,0,0,0, 9,0,4,0,0,0,5,0,7, 0,0,0,0,4,0,0,0,9,
   9,2,0,0,3,4,5,0,7, 1,0,8,0,5,9,0,0,0, 0,0,0,0,0,0,0,0,0],
  // PE Grid 04
  [0,3,0,0,0,8,4,6,0, 0,5,0,0,1,0,0,0,0, 0,4,0,5,0,0,0,1,2,
   0,7,0,0,0,0,0,4,0, 5,0,2,6,0,3,1,0,9, 0,8,0,0,0,0,0,3,0,
   2,5,0,0,0,1,0,8,0, 0,0,0,0,2,0,0,6,0, 0,9,8,6,0,0,0,2,0],
];

function display(puzzle) {
  cells.forEach((cell, i) => {
    cell.style.opacity = '0';
    setTimeout(() => {
      cell.textContent = puzzle[i] || '';
      cell.style.opacity = '1';
    }, 60 + Math.random() * 100);
  });
}

let last = -1;

if (sudoku) {
  sudoku.addEventListener('mouseenter', () => {
    let next;
    do { next = Math.floor(Math.random() * puzzles.length); } while (next === last);
    last = next;
    display(puzzles[next]);
  });
}
