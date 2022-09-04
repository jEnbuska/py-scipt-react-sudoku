import { CellValue, CoordinateIndex, FixedLengthList } from "./types";

/**
 * Unnecessary but interesting exercise of strongly typing
 * the length of lists, and ranges of numbers */

const isFixedLengthList = <T, N extends number>(
  array: T[],
  length: N
): array is FixedLengthList<T, N> => {
  return array.length === length;
};

export const fixedLengthList = <N extends number, T = number>(
  length: N,
  fill: (index: number) => T
): FixedLengthList<T, N> => {
  const list = Array.from({ length }, (_, index) => fill(index)) as Array<T>;
  if (!isFixedLengthList(list, length)) {
    throw new Error("Will never happen");
  }
  return list;
};

export const groupEvenly = <T, G extends number, N extends number>(arg: {
  list: T[];
  groups: G;
  groupSize: N;
}): FixedLengthList<FixedLengthList<T, N>, G> => {
  const { list, groups, groupSize } = arg;
  if (groups <= 0 || list.length % groups !== 0) {
    throw new Error("Invalid number of groups");
  }
  if (list.length / groups !== groupSize) {
    throw new Error(
      "Group size does not match list length and number of groups"
    );
  }
  const groupList: FixedLengthList<FixedLengthList<T, N>, G> = [] as any;
  for (let i = 0; i < groups; i++) {
    const offset = groupSize * i;
    const group: FixedLengthList<T, N> = fixedLengthList(
      groupSize,
      (index) => list[index + offset]
    );
    groupList.push(group);
  }
  return groupList;
};

const isCoordinateIndex = (index: number): index is CoordinateIndex => {
  return index >= 0 && index <= 8;
};
export const asCoordinateIndex = (index: number): CoordinateIndex => {
  if (isCoordinateIndex(index)) {
    return index;
  }
  throw new Error("Invalid coordinate index");
};

export const isCellValue = (value: number): value is CellValue => {
  return value >= 0 && value <= 9;
};

export const asCellValue = (value: number): CellValue => {
  if (isCellValue(value)) {
    return value;
  }
  return 0;
};
