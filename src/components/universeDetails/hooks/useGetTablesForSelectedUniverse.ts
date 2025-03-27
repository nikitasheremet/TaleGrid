import { onMounted, ref, type Ref } from "vue";
import type { Table } from "../../../types/table";
import { getTablesForUniverse } from "../../../service/table/getTablesForUniverse";

export function useGetTablesForSelectedUniverse(universeId: string): {
  tables: Ref<Table[]>;
  error: Ref<Error | undefined>;
} {
  const tables = ref<Table[]>([]);
  const error = ref<Error | undefined>(undefined);

  onMounted(() => {
    try {
      getTablesForUniverse(universeId).then(
        (result) => (tables.value = result)
      );
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    }
  });

  return {
    tables,
    error,
  };
}
