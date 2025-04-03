import { db } from "../../db/db";
import type { RowCell } from "../../types/rowCell";

export async function updateCellValue(
  cellId: string,
  newCellValue: string
): Promise<RowCell> {
  return new Promise<RowCell>((resolve, reject) => {
    const updateCellTransaction = db.transaction("cells", "readwrite");
    const cellObjectStore = updateCellTransaction.objectStore("cells");
    const getExistingCell = cellObjectStore.get(cellId);

    getExistingCell.onsuccess = () => {
      const existingCell = getExistingCell.result;

      existingCell.value = newCellValue;

      const updateExistingCell = cellObjectStore.put(existingCell);

      updateExistingCell.onsuccess = () => {
        resolve(existingCell);
      };
      updateExistingCell.onerror = () => {
        reject(updateExistingCell.error);
      };
    };
    getExistingCell.onerror = () => {
      reject(getExistingCell.error);
    };
  });
}
