from js import window


def block_correct(sudoku: list, row_no: int, column_no: int):
    block_column_start = (column_no // 3) * 3
    block_row_start = (row_no // 3) * 3
    numbers = []
    for row_index in range(block_row_start, block_row_start + 3):
        row = sudoku[row_index]
        for cell_index in range(block_column_start, block_column_start + 3):
            cell = row[cell_index]
            if cell > 0 and cell in numbers:
                return False
            numbers.append(cell)
    return True


window.block_correct = block_correct


def column_correct(sudoku: list, column_no: int):
    non_zero_cells = [row[column_no] for row in sudoku if row[column_no] != 0]
    numbers = []
    for number in non_zero_cells:
        if number in numbers:
            return False
        numbers.append(number)
    return True


window.column_correct = column_correct


def row_correct(sudoku: list, row_no: int):
    non_zero_cells = [cell for cell in sudoku[row_no] if cell != 0]
    numbers = []
    for number in non_zero_cells:
        if number in numbers:
            return False
        numbers.append(number)
    return True


window.row_correct = row_correct


def cell_correct(sudoku: list, row_no: int, column_no: int):
    cell = sudoku[row_no][column_no]
    return cell in range(0, 10)


window.cell_correct = cell_correct

window.python_sudoku_loaded = True
