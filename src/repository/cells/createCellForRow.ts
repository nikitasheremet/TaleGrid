import { db } from "../../db/db";
import type { RowCell } from "../../types/rowCell";

export async function createCellForRow(
  rowId: string,
  columnId: string
): Promise<RowCell> {
  return new Promise<RowCell>((resolve, reject) => {
    const createCellTransaction = db.transaction("cells", "readwrite");
    const cellObjectStore = createCellTransaction.objectStore("cells");
    const newCell = {
      id: crypto.randomUUID(),
      rowId,
      columnId,
      value: "",
    };
    const addCellRequest = cellObjectStore.add(newCell);
    addCellRequest.onsuccess = () => {
      resolve(newCell);
    };
    addCellRequest.onerror = () => {
      reject(addCellRequest.error);
    };
  });
}
