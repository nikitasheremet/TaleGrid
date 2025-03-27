import { getTablesForUniverse as repoGetTablesForUniverse } from "../../repository/table/getTablesForUniverse";
import type { Table } from "../../types/table";

export async function getTablesForUniverse(
  universeId: string
): Promise<Table[]> {
  return await repoGetTablesForUniverse(universeId);
}
