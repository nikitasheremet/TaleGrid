<script lang="ts" setup>
import type { Table } from "../../types/table";
import Error from "../error/Error.vue";
import { useAddNewTableToUniverse } from "./hooks/useAddNewTableToUniverse";

const { universeId } = defineProps<{
  universeId: string;
}>();
const emits = defineEmits<{
  tableAdded: [Table];
}>();

function newTableAdded(table: Table) {
  emits("tableAdded", table);
}

const { newTableName, addNewTable, error } = useAddNewTableToUniverse(
  universeId,
  newTableAdded
);
</script>

<template>
  <input type="text" v-model="newTableName" />
  <button @click="addNewTable">Add table</button>
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
