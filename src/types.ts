export type FixedLengthList<T, L extends number> = Array<T> & {
  length: L;
};

export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 /*Unset*/;

export type CoordinateIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type CellPosition = {
  row: CoordinateIndex;
  col: CoordinateIndex;
};
