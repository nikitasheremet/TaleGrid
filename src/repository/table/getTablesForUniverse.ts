import { db } from "../../db/db";
import type { Table } from "../../types/table";

export async function getTablesForUniverse(
  universeId: string
): Promise<Table[]> {
  return new Promise((resolve, reject) => {
    const getTablesTransaction = db.transaction("tables", "readonly");
    const tablesStore = getTablesTransaction.objectStore("tables");
    const tablesIndex = tablesStore.index("universeId");
    const tablesRequest = tablesIndex.getAll(universeId);
    tablesRequest.onsuccess = () => {
      resolve(tablesRequest.result);
    };
    tablesRequest.onerror = () => {
      reject(tablesRequest.error);
    };
  });
}
