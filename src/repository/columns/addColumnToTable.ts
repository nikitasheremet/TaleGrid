import { db } from "../../db/db";
import type { NewColumnDetails, TableColumn } from "../../types/tableColumn";

export function addColumnToTable(
  tableId: string,
  newColumnDetails: NewColumnDetails,
  columnIndex: number
): Promise<TableColumn> {
  return new Promise<TableColumn>((resolve, reject) => {
    const transaction = db.transaction("columns", "readwrite");
    const objectStore = transaction.objectStore("columns");
    const newColumn = {
      tableId,
      id: crypto.randomUUID(),
      ...newColumnDetails,
      index: columnIndex,
    };
    objectStore.add(newColumn);
    transaction.oncomplete = () => {
      resolve(newColumn);
    };
    transaction.onerror = () => {
      reject(transaction.error);
    };
  });
}
