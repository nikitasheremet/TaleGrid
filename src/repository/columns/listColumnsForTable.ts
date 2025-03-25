import { db } from "../../db/db";

export function getColumnsForTable(tableId: string): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    const transaction = db.transaction("columns", "readonly");
    const objectStore = transaction.objectStore("columns");
    const columnTableIdIndex = objectStore.index("tableId");
    const request = columnTableIdIndex.getAll(tableId);
    request.onsuccess = () => {
      resolve(request.result.map((column: any) => column.name));
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
