<script lang="ts" setup>
import { ref, toRef } from "vue";
import { useAddNewColumn } from "./hooks/useAddNewColumn";
import type { TableColumn } from "../../types/tableColumn";

const { tableId, lastColumnIndex } = defineProps<{
  tableId: string;
  lastColumnIndex: number;
}>();
const emits = defineEmits<{
  newColumnAdded: [TableColumn];
}>();

const isAddNewColumnClicked = ref(false);
function clickAddNewColumn() {
  isAddNewColumnClicked.value = !isAddNewColumnClicked.value;
}

function newColumnAdded(newColumn: TableColumn) {
  emits("newColumnAdded", newColumn);
  isAddNewColumnClicked.value = false;
}

const { newColumnDetails, addNewColumn } = useAddNewColumn(
  tableId,
  newColumnAdded,
  toRef(() => lastColumnIndex)
);
</script>

<template>
  <button @click="clickAddNewColumn">+ New Column</button>
  <div v-if="isAddNewColumnClicked">
    <h3>New Column form</h3>
    <form @submit.prevent @submit="addNewColumn">
      <label for="columnName">Column Name</label>
      <input
        type="text"
        id="columnName"
        name="columnName"
        v-model="newColumnDetails.name"
      />
      <label for="columnType">Column Type</label>
      <select id="columnType" name="columnType" v-model="newColumnDetails.type">
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
      </select>
      <button type="submit">Add Column</button>
    </form>
  </div>
</template>

<style scoped></style>
