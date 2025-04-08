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
import { properCase } from "../helpers/properCase";

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
  <h2>{{ properCase(tableName) }}</h2>
  <div class="table-details">
    <div>
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.name">
              {{ properCase(column.name) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows :rows="rows" />
        </tbody>
      </table>
      <div class="add-new-row">
        <AddNewRow :table-id="tableId" @new-row-added="addNewRow" />
      </div>
    </div>
    <div class="add-new-column">
      <AddNewColumn
        :table-id="tableId"
        @new-column-added="addNewColumn"
        :last-column-index="lastColumnIndex"
      />
    </div>
  </div>

  <Error v-if="error || rowError" :error="error || rowError || ''" />
</template>

<style scoped>
.table-details {
  display: flex;
  flex-direction: row;
}
table {
  border: 2px black;
  border-collapse: collapse;
}
.add-new-row {
  margin-top: 8px;
}
.add-new-column {
  margin-left: 8px;
}
</style>
