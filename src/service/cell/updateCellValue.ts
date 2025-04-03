import type { RowCell } from "../../types/rowCell";
import { updateCellValue as repoUpdateCellValue } from "../../repository/cells/updateCellValue";

export async function updateCellValue(
  cellId: string,
  value: any
): Promise<RowCell> {
  return await repoUpdateCellValue(cellId, value);
}
