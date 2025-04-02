import { db } from "../../db/db";
import type { TableRow } from "../../types/tableRow";

export async function createRowInTable(tableId: string): Promise<TableRow> {
  return new Promise<TableRow>((resolve, reject) => {
    const createTableRowTransaction = db.transaction("rows", "readwrite");
    const tableRowObjectStore = createTableRowTransaction.objectStore("rows");
    const newTableRow = {
      id: crypto.randomUUID(),
      tableId,
    };
    const addRequest = tableRowObjectStore.add(newTableRow);
    addRequest.onsuccess = () => {
      resolve(newTableRow);
    };
    addRequest.onerror = () => {
      reject(addRequest.error);
    };
  });
}
