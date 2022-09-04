import { createContext } from "react";
import { CellPosition, CellValue } from "./types";

export const SudokuContext = createContext({
  validateCell: (position: CellPosition): boolean => false,
  setCellValue: (position: CellPosition, value: CellValue): void => {},
});
