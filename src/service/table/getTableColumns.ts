import { getColumnsForTable } from "../../repository/columns/listColumnsForTable";

export async function getTableColumns(table: string): Promise<string[]> {
  return await getColumnsForTable(table);
}
