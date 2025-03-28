import { ref, type Ref } from "vue";
import type { Table } from "../../../types/table";
import { addNewTableToUniverse } from "../../../service/table/addNewTableToUniverse";

export function useAddNewTableToUniverse(
  universeId: string,
  newTableAddedCallback?: (newTableAdded: Table) => void
): {
  newTableName: Ref<string>;
  addNewTable: () => void;
  error: Ref<Error | undefined>;
} {
  const newTableName = ref("");
  const error = ref<Error | undefined>(undefined);
  async function addNewTable() {
    try {
    } catch (err) {
      if (err instanceof Error) {
        error.value = err;
      }
    }
    const newAddedTable = await addNewTableToUniverse(
      universeId,
      newTableName.value
    );
    if (newTableAddedCallback) {
      newTableAddedCallback(newAddedTable);
    }
  }
  return {
    newTableName,
    addNewTable,
    error,
  };
}
