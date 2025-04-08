import { onMounted, ref, type Ref } from "vue";
import type { TableRowWithCells } from "../../../types/tableRow";
import { getRowsForTable } from "../../../service/row/getRowsForTable";

export function useGetTableRows(tableId: string): {
  rows: Ref<TableRowWithCells[]>;
  error: Ref<Error | undefined>;
} {
  const rows = ref<TableRowWithCells[]>([]);
  const error = ref<Error | undefined>(undefined);

  onMounted(async () => {
    rows.value = await getRowsForTable(tableId);
  });
  return {
    rows,
    error,
  };
}
