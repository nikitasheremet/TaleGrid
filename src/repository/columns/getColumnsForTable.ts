import { db } from "../../db/db";
import type { TableColumn } from "../../types/tableColumn";

export function getColumnsForTable(tableId: string): Promise<TableColumn[]> {
  return new Promise<TableColumn[]>((resolve, reject) => {
    const transaction = db.transaction("columns", "readonly");
    const objectStore = transaction.objectStore("columns");
    const columnTableIdIndex = objectStore.index("tableId");
    const request = columnTableIdIndex.getAll(tableId);
    request.onsuccess = () => {
      resolve(mapDbTableColumnsToTableColumns(request.result));
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}

function mapDbTableColumnsToTableColumns(dbTableColumns: any[]): TableColumn[] {
  return dbTableColumns.map((column) => mapDbTableColumnToTableColumn(column));
}

function mapDbTableColumnToTableColumn(dbTableColumn: any): TableColumn {
  return {
    id: dbTableColumn.id,
    name: dbTableColumn.name,
    tableId: dbTableColumn.tableId,
    type: dbTableColumn.type,
    index: dbTableColumn.index,
  };
}
