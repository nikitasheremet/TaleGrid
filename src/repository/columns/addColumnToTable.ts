import { db } from "../../db/db";

export function addColumnToTable(
  tableId: string,
  columnName: string
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction("columns", "readwrite");
    const objectStore = transaction.objectStore("columns");
    objectStore.add({ tableId, name: columnName, id: crypto.randomUUID() });
    transaction.oncomplete = () => {
      resolve();
    };
    transaction.onerror = () => {
      reject(transaction.error);
    };
  });
}
