<script lang="ts" setup>
import type { RowCell } from "../../types/rowCell";
import { useEditCell } from "./hooks/useEditCell";

const props = defineProps<{
  cell: RowCell;
}>();

const { cellValue } = useEditCell(props.cell);
</script>

<template>
  <input v-model="cellValue" :key="cell.id" />
</template>

<style scoped></style>
