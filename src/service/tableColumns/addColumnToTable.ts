import type { NewColumnDetails, TableColumn } from "../../types/tableColumn";
import { addColumnToTable as repoAddColumnToTable } from "../../repository/columns/addColumnToTable";
import { getRowsForTable } from "../row/getRowsForTable";
import { addNewCellToRow } from "../cell/addNewCellToRow";

export async function addColumnToTable(
  tableId: string,
  newColumnDetails: NewColumnDetails,
  columnIndex: number
): Promise<TableColumn> {
  const newTableColumnAdded = await repoAddColumnToTable(
    tableId,
    newColumnDetails,
    columnIndex
  );

  const existingRowsInTable = await getRowsForTable(tableId);
  if (existingRowsInTable.length > 0) {
    await Promise.all(
      existingRowsInTable.map(async (existingRow) => {
        await addNewCellToRow(existingRow.id, newTableColumnAdded.id);
      })
    );
  }

  return newTableColumnAdded;
}
