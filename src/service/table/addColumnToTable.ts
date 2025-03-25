import { addColumnToTable as repoAddColumnToTable } from "../../repository/columns/addColumnToTable";
export async function addColumnToTable(
  tableId: string,
  columnName: string
): Promise<void> {
  return await repoAddColumnToTable(tableId, columnName);
}
