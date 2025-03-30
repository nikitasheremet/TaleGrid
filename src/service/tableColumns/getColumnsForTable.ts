import type { TableColumn } from "../../types/tableColumn";
import { getColumnsForTable as repoGetColumnsForTable } from "../../repository/columns/getColumnsForTable";

export async function getColumnsForTable(
  tableId: string
): Promise<TableColumn[]> {
  const columnsResponse = await repoGetColumnsForTable(tableId);
  return orderColumnsByIndexAsc(columnsResponse);
}

function orderColumnsByIndexAsc(columns: TableColumn[]): TableColumn[] {
  return columns.sort((a, b) => {
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    return 0;
  });
}
