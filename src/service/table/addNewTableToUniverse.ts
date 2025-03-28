import type { Table } from "../../types/table";
import { addNewTableToUniverse as repoAddNewTableToUniverse } from "../../repository/table/addNewTableToUniverse";

export async function addNewTableToUniverse(
  universeId: string,
  newTableName: string
): Promise<Table> {
  return await repoAddNewTableToUniverse(universeId, newTableName);
}
