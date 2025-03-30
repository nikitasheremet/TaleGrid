import { computed, ref, type Ref } from "vue";
import type { NewColumnDetails, TableColumn } from "../../../types/tableColumn";
import { addColumnToTable } from "../../../service/tableColumns/addColumnToTable";

const EMPTY_NEW_COLUMN_DETAILS: NewColumnDetails = {
  name: "",
  type: "string",
};

export function useAddNewColumn(
  tableId: string,
  newColumnAddedCallback: (newColumn: TableColumn) => void,
  lastColumnIndex: Ref<number>
): {
  newColumnDetails: Ref<NewColumnDetails>;
  error: Ref<Error | undefined>;
  addNewColumn: () => void;
} {
  const nextColumnIndex = computed(() => lastColumnIndex.value + 1);
  const newColumnDetails = ref<NewColumnDetails>({
    ...EMPTY_NEW_COLUMN_DETAILS,
  });
  const error = ref<Error | undefined>(undefined);
  async function addNewColumn() {
    try {
      const newColumnAdded = await addColumnToTable(
        tableId,
        newColumnDetails.value,
        nextColumnIndex.value
      );
      newColumnAddedCallback(newColumnAdded);
      newColumnDetails.value = { ...EMPTY_NEW_COLUMN_DETAILS };
    } catch (e) {
      error.value = e as Error;
    }
  }
  return {
    newColumnDetails,
    error,
    addNewColumn,
  };
}
