import produce from "immer";
import React, { useState } from "react";
import { SudokuContext } from "../../context";
import isCellValid from "../../isCellValid";
import { CellValue } from "../../types";
import { fixedLengthList } from "../../utils";
import Grid from "../Grid/Grid";
import "./styles.css";

const row = fixedLengthList(9, () => 0 as CellValue);
const grid = fixedLengthList(9, () => row);

const Sudoku = () => {
  const [state, setState] = useState(grid);
  return (
    <SudokuContext.Provider
      value={{
        setCellValue({ col, row }, value) {
          const nextState = produce(state, (draft) => {
            draft[row][col] = value;
          });
          setState(nextState);
        },
        validateCell({ col, row }) {
          return isCellValid(state, { col, row });
        },
      }}
    >
      <div className="sudoku">
        <Grid grid={state} />
      </div>
    </SudokuContext.Provider>
  );
};

export default Sudoku;
