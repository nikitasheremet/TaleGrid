<script lang="ts" setup>
import type { Table } from "../../types/table";

defineProps<{
  tables: Table[];
  universe: { name: string; id: string };
}>();
</script>

<template>
  <p>Tables</p>
  <ul>
    <li v-for="table in tables">
      <RouterLink
        :to="`/universe/${universe.name}/${universe.id}/table/${table.name}/${table.id}`"
      >
        {{ table.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
