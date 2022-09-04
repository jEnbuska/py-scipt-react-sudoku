import React from "react";
import { CellValue, CoordinateIndex, FixedLengthList } from "../../types";
import { groupEvenly } from "../../utils";
import CellGroup from "../CellGroup/CellGroup";
import "./styles.css";

type OwnProps = {
  cells: FixedLengthList<CellValue, 9>;
  row: CoordinateIndex;
};
const Row = ({ cells, row }: OwnProps) => {
  const [cells0, cells1, cells2] = groupEvenly({
    groups: 3,
    groupSize: 3,
    list: cells,
  });
  return (
    <div className="row">
      <CellGroup cells={cells0} row={row} cellGroup={0} />
      <CellGroup cells={cells1} row={row} cellGroup={1} />
      <CellGroup cells={cells2} row={row} cellGroup={2} />
    </div>
  );
};

export default Row;
