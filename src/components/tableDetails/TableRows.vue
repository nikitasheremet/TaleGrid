<script lang="ts" setup>
import type { TableRowWithCells } from "../../types/tableRow";

defineProps<{
  rows: TableRowWithCells[];
}>();
</script>

<template>
  <tr v-for="row of rows">
    <td v-for="cell of row.cells">
      <input :value="cell?.value" />
    </td>
  </tr>
</template>

<style scoped></style>
