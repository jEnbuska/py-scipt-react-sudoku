/** Module that references function declarations in the 'sudoku.py' file */
import { CellPosition } from "./types";

declare function cell_correct(
  sudoku: number[][],
  row_no: number,
  column_no: number
): boolean;

declare function block_correct(
  sudoku: number[][],
  row_no: number,
  column_no: number
): boolean;

declare function column_correct(sudoku: number[][], column_no: number): boolean;

declare function row_correct(sudoku: number[][], row_no: number): boolean;

const isCellValid = (grid: number[][], position: CellPosition) => {
  const { row, col } = position;
  return (
    cell_correct(grid, row, col) &&
    block_correct(grid, row, col) &&
    row_correct(grid, row) &&
    column_correct(grid, row)
  );
};
export default isCellValid;
