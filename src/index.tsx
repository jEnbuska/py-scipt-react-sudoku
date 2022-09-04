import React from "react";
import { createRoot } from "react-dom/client";
import Sudoku from "./components/Sudoku/Sudoku";
import "./index.css";

const waitUntilSudokuPyReady = async (): Promise<void> => {
  if ("python_sudoku_loaded" in window) {
    return;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(waitUntilSudokuPyReady());
    }, 500);
  });
};
const root = createRoot(document.getElementById("root")!);
waitUntilSudokuPyReady().then(() => {
  root.render(<Sudoku />);
});
