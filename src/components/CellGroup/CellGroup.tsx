import React from "react";
import { CellValue, CoordinateIndex, FixedLengthList } from "../../types";
import { asCoordinateIndex } from "../../utils";
import Cell from "../Cell/Cell";
import "./styles.css";

type OwnProps = {
  cells: FixedLengthList<CellValue, 3>;
  row: CoordinateIndex;
  cellGroup: 0 | 1 | 2;
};

const CellGroup = ({ cells, row, cellGroup }: OwnProps) => {
  return (
    <div className="cellGroup">
      <Cell value={cells[0]} col={asCoordinateIndex(3 * cellGroup)} row={row} />
      <Cell
        value={cells[1]}
        col={asCoordinateIndex(3 * cellGroup + 1)}
        row={row}
      />
      <Cell
        value={cells[2]}
        col={asCoordinateIndex(3 * cellGroup + 2)}
        row={row}
      />
    </div>
  );
};

export default CellGroup;
