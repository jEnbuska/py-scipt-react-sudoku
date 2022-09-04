import classnames from "classnames";
import React, { ChangeEvent, useContext } from "react";
import { SudokuContext } from "../../context";
import { CellPosition, CellValue } from "../../types";
import { asCellValue } from "../../utils";
import "./styles.css";

type OwnProps = CellPosition & {
  value: CellValue;
};
const Cell = ({ value, row, col }: OwnProps) => {
  const { setCellValue, validateCell } = useContext(SudokuContext);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = asCellValue(parseInt(e.target.value, 10));
    setCellValue({ row, col }, newValue);
  };
  return (
    <div
      className={classnames("cell", {
        cellInvalid: !validateCell({ row, col }),
      })}
    >
      <input
        type="number"
        value={`${value}`}
        onChange={onChange}
        className="cellInput"
      />
    </div>
  );
};

export default Cell;
