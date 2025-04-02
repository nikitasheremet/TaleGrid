import { createCellForRow } from "../../repository/cells/createCellForRow";
import type { TableRow, TableRowWithCells } from "../../types/tableRow";
import { getColumnsForTable } from "../tableColumns/getColumnsForTable";

export async function addEmptyCellsToRow(
  row: TableRow
): Promise<TableRowWithCells> {
  const { id, tableId } = row;
  const tableColumns = await getColumnsForTable(tableId);

  const newCells = await Promise.all(
    tableColumns.map(async (column) => {
      return await createCellForRow(id, column.id);
    })
  );

  return {
    ...row,
    cells: newCells,
  };
}
