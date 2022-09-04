import React from "react";
import { CellValue, FixedLengthList } from "../../types";
import { groupEvenly } from "../../utils";
import RowGroup from "../RowGroup/RowGroup";
import "./styles.css";

type OwnProps = {
  grid: FixedLengthList<FixedLengthList<CellValue, 9>, 9>;
};
const Grid = ({ grid }: OwnProps) => {
  const [rows0, rows1, rows2] = groupEvenly({
    list: grid,
    groupSize: 3,
    groups: 3,
  });
  return (
    <div className="grid">
      <RowGroup rows={rows0} rowGroup={0} />
      <RowGroup rows={rows1} rowGroup={1} />
      <RowGroup rows={rows2} rowGroup={2} />
    </div>
  );
};

export default Grid;
