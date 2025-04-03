<script lang="ts" setup>
import type { TableRowWithCells } from "../../types/tableRow";
import EditableCell from "./EditableCell.vue";

defineProps<{
  rows: TableRowWithCells[];
}>();
</script>

<template>
  <tr v-for="row of rows">
    <td v-for="cell of row.cells">
      <EditableCell :cell="cell" />
    </td>
  </tr>
</template>

<style scoped></style>
