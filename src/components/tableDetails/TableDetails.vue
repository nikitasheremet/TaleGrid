<script lang="ts" setup>
import { useGetTableColumns } from "./hooks/useGetTableColumns";
import AddNewColumn from "./AddNewColumn.vue";
import Error from "../error/Error.vue";
import type { TableColumn } from "../../types/tableColumn";
import { computed } from "vue";
import { useGetTableRows } from "./hooks/useGetTableRows";
import TableRows from "./TableRows.vue";
import AddNewRow from "./AddNewRow.vue";
import type { TableRowWithCells } from "../../types/tableRow";

const { tableId, tableName } = defineProps<{
  tableId: string;
  tableName: string;
}>();

const { columns, error } = useGetTableColumns(tableId);
const { rows, error: rowError } = useGetTableRows(tableId);

const lastColumnIndex = computed(() => {
  const columnsArrayLength = columns.value.length;
  if (columnsArrayLength) {
    return columns.value[columnsArrayLength - 1].index;
  }
  return -1;
});

function addNewColumn(newColumn: TableColumn) {
  columns.value.push(newColumn);
}
function addNewRow(newRow: TableRowWithCells) {
  rows.value.push(newRow);
}
</script>

<template>
  <h2>{{ tableName }}</h2>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name">
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TableRows :rows="rows" />
    </tbody>
  </table>
  <AddNewRow :table-id="tableId" @new-row-added="addNewRow" />

  <AddNewColumn
    :table-id="tableId"
    @new-column-added="addNewColumn"
    :last-column-index="lastColumnIndex"
  />
  <Error v-if="error || rowError" :error="error || rowError || ''" />
</template>

<style scoped></style>
