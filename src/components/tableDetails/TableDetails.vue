<script lang="ts" setup>
import { useGetTableColumns } from "./hooks/useGetTableColumns";
import AddNewColumn from "./AddNewColumn.vue";
import Error from "../error/Error.vue";
import type { TableColumn } from "../../types/tableColumn";
import { computed } from "vue";

const { tableId, tableName } = defineProps<{
  tableId: string;
  tableName: string;
}>();

const { columns, error } = useGetTableColumns(tableId);

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
  </table>
  <AddNewColumn
    :table-id="tableId"
    @new-column-added="addNewColumn"
    :last-column-index="lastColumnIndex"
  />
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
