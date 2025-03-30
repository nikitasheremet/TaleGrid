export interface TableColumn {
  id: string;
  name: string;
  tableId: string;
  type: TableColumnType;
  index: number;
}

export type TableColumnType = "string" | "number" | "boolean" | "link";

export type NewColumnDetails = {
  name: string;
  type: TableColumnType;
};
