import { SudokuMatrix } from "../../types";
import {
  asArray,
  asFixedLengthList,
  asNumber,
  asSudokuMatrix,
} from "../../utils";

export function generateSudokuGame() {
  console.log("GENERATE SUDOKU GAME");
  const worker = new Worker(new URL("../sudoku-worker.js", import.meta.url));
  return new Promise<number[][]>((resolve) => {
    worker.onmessage = (e) => {
      console.log("on message", e);
      const { data } = e;
      const matrix: number[][] = asArray(data)
        .map(asArray)
        .map((row) => row.map(asNumber));
      resolve(matrix);
    };
    console.log("SEND MESAGE TO WORKER");
    worker.postMessage(1);
  });
}

export function matrixToSudokuMatrix<T>(matrix: T[][]): SudokuMatrix<T> {
  const rowValues = matrix.map((row) => asFixedLengthList(9, row));
  return asFixedLengthList(9, rowValues);
}

export function mapMatrix<T, U>(
  array: T[][],
  fn: (value: T) => U
): SudokuMatrix<U> {
  const rows: U[][] = array.map((cells) => cells.map(fn));
  return asSudokuMatrix(rows);
}
