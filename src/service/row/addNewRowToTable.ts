import { createRowInTable } from "../../repository/rows/createRowInTable";
import type { TableRowWithCells } from "../../types/tableRow";
import { addEmptyCellsToRow } from "../cell/addEmptyCellsToRow";

export async function addNewRowToTable(
  tableId: string
): Promise<TableRowWithCells> {
  const newTableRow = await createRowInTable(tableId);
  const newTableRowWithCells = await addEmptyCellsToRow(newTableRow);
  return newTableRowWithCells;
}
