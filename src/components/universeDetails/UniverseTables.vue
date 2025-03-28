<script lang="ts" setup>
import type { Table } from "../../types/table";

const { tables, universe } = defineProps<{
  tables: Table[];
  universe: { name: string; id: string };
}>();
</script>

<template>
  <p>Tables</p>
  <ul>
    <RouterLink
      v-for="table in tables"
      :to="`/universe/${universe.name}/${universe.id}/table/${table.name}/${table.id}`"
    >
      {{ table.name }}
    </RouterLink>
  </ul>
</template>

<style scoped></style>
