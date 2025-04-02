<script lang="ts" setup>
import type { TableRowWithCells } from "../../types/tableRow";
import { useAddNewRow } from "./hooks/useAddNewRow";
import Error from "../error/Error.vue";

const { tableId } = defineProps<{
  tableId: string;
}>();

const emits = defineEmits<{
  newRowAdded: [TableRowWithCells];
}>();

function newRowAdded(newRow: TableRowWithCells) {
  emits("newRowAdded", newRow);
}

const { addNewRow, error } = useAddNewRow(tableId, newRowAdded);

async function handleAddRowClicked() {
  await addNewRow();
}
</script>

<template>
  <button @click="handleAddRowClicked">Add Row</button>
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
