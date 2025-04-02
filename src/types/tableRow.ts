import type { RowCell } from "./rowCell";

export interface TableRow {
  id: string;
  tableId: string;
}

export interface TableRowWithCells extends TableRow {
  cells: RowCell[];
}
