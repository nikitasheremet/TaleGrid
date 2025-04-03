import { createCellForRow } from "../../repository/cells/createCellForRow";

export async function addNewCellToRow(
  rowId: string,
  columnId: string
): Promise<void> {
  await createCellForRow(rowId, columnId);
}
