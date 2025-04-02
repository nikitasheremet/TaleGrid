import { db } from "../../db/db";
import type { TableRow } from "../../types/tableRow";

export async function getRowsForTable(tableId: string): Promise<TableRow[]> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("rows", "readonly");
    const rowStore = transaction.objectStore("rows");
    const tableIdIndex = rowStore.index("tableId");
    const getAllRowsRequest = tableIdIndex.getAll(tableId);
    getAllRowsRequest.onsuccess = () => {
      resolve(mapDbRowstoTableRows(getAllRowsRequest.result));
    };
    getAllRowsRequest.onerror = () => {
      reject(getAllRowsRequest.error);
    };
  });
}

function mapDbRowstoTableRows(dbRows: any[]): TableRow[] {
  return dbRows.map((dbRow) => mapDbRowtoTableRow(dbRow));
}

function mapDbRowtoTableRow(dbRow: any): TableRow {
  return {
    id: dbRow.id,
    tableId: dbRow.tableId,
  };
}
