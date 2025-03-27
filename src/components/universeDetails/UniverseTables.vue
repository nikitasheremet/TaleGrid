<script lang="ts" setup>
import type { Table } from "../../types/table";

const { tables } = defineProps<{
  tables: Table[];
}>();
</script>

<template>
  <p>Tables</p>
  <div>
    <RouterLink
      v-for="table in tables"
      :to="`/universe/${universe.name}/${universe.id}/table/${table.name}/${table.id}`"
    >
      {{ table }}
    </RouterLink>
  </div>
</template>

<style scoped></style>
