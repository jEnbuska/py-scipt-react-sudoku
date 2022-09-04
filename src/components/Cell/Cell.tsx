import classnames from "classnames";
import React, { KeyboardEventHandler, useContext } from "react";
import { SudokuContext } from "../../context";
import { CellPosition, CellValue } from "../../types";
import { isCellValue } from "../../utils";
import "./styles.css";

type OwnProps = CellPosition & {
  value: CellValue;
};
const Cell = ({ value, row, col }: OwnProps) => {
  const { setCellValue, validateCell } = useContext(SudokuContext);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.key === "Backspace" ? 0 : parseInt(e.key, 10);
    if (isCellValue(nextValue)) {
      setCellValue({ row, col }, nextValue);
    }
  };
  return (
    <div
      className={classnames("cell", {
        cellInvalid: !validateCell({ row, col }),
      })}
    >
      <input
        value={value ? `${value}` : ""}
        onKeyDown={onKeyDown}
        className="cellInput"
        pattern="[0-9]*"
      />
    </div>
  );
};

export default Cell;
