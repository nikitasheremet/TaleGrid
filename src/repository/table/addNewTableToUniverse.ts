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
      resolve(dbTableToTable(newTableAdded.result));
    };
    newTableAdded.onerror = () => {
      reject(newTableAdded.error);
    };
  });
}

function dbTableToTable(dbTable: any): Table {
  return {
    id: dbTable.id,
    name: dbTable.name,
    universeId: dbTable.universeId,
  };
}
