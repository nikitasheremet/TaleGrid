import { ref, type Ref } from "vue";
import type { TableRowWithCells } from "../../../types/tableRow";
import { addNewRowToTable } from "../../../service/row/addNewRowToTable";

export function useAddNewRow(
  tableId: string,
  newRowAddedCallback: (newRow: TableRowWithCells) => void
): {
  addNewRow: () => Promise<void>;
  error: Ref<Error | undefined>;
} {
  const error = ref<Error | undefined>(undefined);
  async function addNewRow() {
    try {
      const newRowAdded = await addNewRowToTable(tableId);
      newRowAddedCallback(newRowAdded);
    } catch (err) {
      error.value = err as Error;
    }
  }

  return {
    addNewRow,
    error,
  };
}
