<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { getTableColumns } from "../service/table/getTableColumns";
import { useRoute } from "vue-router";
import { addColumnToTable } from "../service/table/addColumnToTable";

const route = useRoute();
const tableColumns = ref<string[]>([]);
onMounted(() => {
  getTableColumns(route.params.table as string).then((columns) => {
    tableColumns.value = columns;
  });
});

const properCaseTableName = computed(() => {
  return (route.params.table as string).replace(/^\w/, (c) => c.toUpperCase());
});

const newColumn = ref("");
async function addColumn() {
  if (newColumn.value) {
    try {
      await addColumnToTable(route.params.table as string, newColumn.value);
    } catch (error) {
      console.error(error);
    }
    tableColumns.value.push(newColumn.value);
    newColumn.value = "";
  }
}
</script>

<template>
  <h2>{{ properCaseTableName }} Table</h2>
  <table>
    <thead>
      <tr>
        <th v-for="column in tableColumns">{{ column }}</th>
      </tr>
    </thead>
  </table>
  <input v-model="newColumn" />
  <button @click="addColumn">Add column</button>
</template>

<style scoped></style>
