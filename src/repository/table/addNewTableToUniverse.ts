import { db } from "../../db/db";
import type { Table } from "../../types/table";

export async function addNewTableToUniverse(
  universeId: string,
  newTableName: string
): Promise<Table> {
  return new Promise((resolve, reject) => {
    const addTableTransaction = db.transaction("tables", "readwrite");
    const tableStore = addTableTransaction.objectStore("tables");
    const newTable = {
      id: crypto.randomUUID(),
      name: newTableName,
      universeId,
    };
    const newTableAdded = tableStore.add(newTable);
    newTableAdded.onsuccess = () => {
      resolve(newTable);
    };
    newTableAdded.onerror = () => {
      reject(newTableAdded.error);
    };
  });
}
