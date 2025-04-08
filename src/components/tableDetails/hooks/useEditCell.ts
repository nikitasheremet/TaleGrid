import { watch, type Ref } from "vue";
import type { RowCell } from "../../../types/rowCell";
import { customRef } from "vue";
import { updateCellValue } from "../../../service/cell/updateCellValue";

export function useEditCell(cell: RowCell): {
  cellValue: Ref<any>;
} {
  const cellValue = useDebouncedRef(cell?.value);

  watch(cellValue, async () => {
    await updateCellValue(cell.id, cellValue.value);
  });
  return {
    cellValue,
  };
}

export function useDebouncedRef(value: any, delay = 400) {
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
