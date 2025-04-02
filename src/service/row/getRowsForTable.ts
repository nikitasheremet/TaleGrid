import type { TableRow, TableRowWithCells } from "../../types/tableRow";
import { getRowsForTable as repoGetRowsForTable } from "../../repository/rows/getRowsForTable";
import type { RowCell } from "../../types/rowCell";
import { getCellsForRow } from "../../repository/cells/getCellsForRow";
import type { TableColumn } from "../../types/tableColumn";
import { getColumnsForTable } from "../../repository/columns/getColumnsForTable";

export async function getRowsForTable(
  tableId: string
): Promise<TableRowWithCells[]> {
  const tableRowsWithoutCells: TableRow[] = await repoGetRowsForTable(tableId);
  const tableColumns: TableColumn[] = await getColumnsForTable(tableId);

  const tableRows = tableRowsWithoutCells.map(async (row) => {
    const rowCells: RowCell[] = await getCellsForRow(row.id);
    const cellsInColumnOrder: RowCell[] = [];
    rowCells.forEach((cell) => {
      const columnIndex = tableColumns.find(
        (column) => column.id === cell.columnId
      )?.index;
      if (!columnIndex) {
        throw new Error(
          `Column with id ${cell.columnId} not found in table ${tableId}`
        );
      }
      cellsInColumnOrder[columnIndex] = cell;
    });
    const rowWithCells = {
      ...row,
      cells: cellsInColumnOrder,
    };
    return rowWithCells;
  });
  return Promise.all(tableRows);
}
