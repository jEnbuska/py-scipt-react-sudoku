declare global {
    export function block_correct(sudoku: number[][], row_no: number, column_index: number): boolean;
    export function cell_correct(sudoku: number[][], row_no: number, column_index: number): boolean;
    export function column_correct(sudoku: number[][], column_index: number): boolean;
    export function row_correct(sudoku: number[][], row_index: number): boolean;
}
