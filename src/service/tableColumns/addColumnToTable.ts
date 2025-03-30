import type { NewColumnDetails, TableColumn } from "../../types/tableColumn";
import { addColumnToTable as repoAddColumnToTable } from "../../repository/columns/addColumnToTable";

export async function addColumnToTable(
  tableId: string,
  newColumnDetails: NewColumnDetails,
  columnIndex: number
): Promise<TableColumn> {
  return await repoAddColumnToTable(tableId, newColumnDetails, columnIndex);
}
