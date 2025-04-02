import { db } from "../../db/db";
import type { RowCell } from "../../types/rowCell";

export async function getCellsForRow(rowId: string): Promise<RowCell[]> {
  return new Promise<RowCell[]>((resolve, reject) => {
    const transaction = db.transaction("cells", "readonly");
    const cellStore = transaction.objectStore("cells");
    const rowIdIndex = cellStore.index("rowId");
    const getAllCellsRequest = rowIdIndex.getAll(rowId);
    getAllCellsRequest.onsuccess = () => {
      resolve(mapDbCellstoRowCells(getAllCellsRequest.result));
    };
    getAllCellsRequest.onerror = () => {
      reject(getAllCellsRequest.error);
    };
  });
}

function mapDbCellstoRowCells(dbCells: any[]): RowCell[] {
  return dbCells.map((dbCell) => mapDbCelltoRowCell(dbCell));
}
function mapDbCelltoRowCell(dbCell: any): RowCell {
  return {
    id: dbCell.id,
    columnId: dbCell.columnId,
    rowId: dbCell.rowId,
    value: dbCell.value,
  };
}
