/** Module that references function declarations in the 'sudoku.py' file */
import { CellPosition } from "../../types";

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

export const isBlockCorrect = (
  grid: number[][],
  position: CellPosition
): boolean => {
  return block_correct(grid, position.row, position.col);
};

export const isRowCorrect = (
  grid: number[][],
  position: CellPosition
): boolean => {
  return row_correct(grid, position.row);
};

export const isColumnCorrect = (
  grid: number[][],
  position: CellPosition
): boolean => {
  return column_correct(grid, position.col);
};

export const isCellValid = (
  grid: number[][],
  position: CellPosition
): boolean => {
  return (
    isColumnCorrect(grid, position) &&
    isRowCorrect(grid, position) &&
    isBlockCorrect(grid, position)
  );
};
