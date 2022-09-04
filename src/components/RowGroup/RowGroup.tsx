import React from "react";
import { CellValue, FixedLengthList } from "../../types";
import { asCoordinateIndex } from "../../utils";
import Row from "../Row/Row";
import "./styles.css";

type OwnProps = {
  rows: FixedLengthList<FixedLengthList<CellValue, 9>, 3>;
  rowGroup: 0 | 1 | 2;
};

const RowGroup = ({ rows, rowGroup }: OwnProps) => {
  return (
    <div className="rowGroup">
      <Row cells={rows[0]} row={asCoordinateIndex(3 * rowGroup)} />
      <Row cells={rows[1]} row={asCoordinateIndex(3 * rowGroup + 1)} />
      <Row cells={rows[2]} row={asCoordinateIndex(3 * rowGroup + 2)} />
    </div>
  );
};

export default RowGroup;
