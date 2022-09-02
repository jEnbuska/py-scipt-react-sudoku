from js import window


def block_correct(sudoku: list, row_no: int, column_no: int):
    numbers = []
    for row_index in range(row_no, row_no + 3):
        row = sudoku[row_index]
        for cell_index in range(column_no, column_no + 3):
            cell = row[cell_index]
            if cell > 0 and cell in numbers:
                return False
            numbers.append(cell)
    return True


window.block_correct = block_correct


def column_correct(sudoku: list, column_no: int):
    numbers = []
    for row in sudoku:
        number = row[column_no]
        if number in numbers:
            return False
        if number != 0:
            numbers.append(number)
    return True


window.column_correct = column_correct


def row_correct(sudoku: list, row_no: int):
    numbers = []
    for number in sudoku[row_no]:
        if number in numbers:
            return False
        elif number != 0:
            numbers.append(number)
    return True


window.row_correct = row_correct


def cell_correct(sudoku: list, row_no: int, column_no: int):
    cell = sudoku[row_no][column_no]
    return cell in range(0, 10)


window.cell_correct = cell_correct
