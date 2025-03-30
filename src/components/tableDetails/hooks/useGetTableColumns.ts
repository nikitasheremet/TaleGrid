import { onMounted, ref, type Ref } from "vue";
import type { TableColumn } from "../../../types/tableColumn";
import { getColumnsForTable } from "../../../service/tableColumns/getColumnsForTable";

export function useGetTableColumns(tableId: string): {
  columns: Ref<TableColumn[]>;
  error: Ref<Error | undefined>;
} {
  const columns = ref<TableColumn[]>([]);
  const error = ref<Error | undefined>(undefined);

  onMounted(() => {
    getColumnsForTable(tableId)
      .then((response) => (columns.value = response))
      .catch((e) => {
        error.value = e as Error;
      });
  });
  return {
    columns,
    error,
  };
}
