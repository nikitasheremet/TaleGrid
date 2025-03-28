<script lang="ts" setup>
import type { Table } from "../../types/table";
import Error from "../error/Error.vue";
import AddNewTable from "./AddNewTable.vue";
import { useGetTablesForSelectedUniverse } from "./hooks/useGetTablesForSelectedUniverse";
import UniverseTables from "./UniverseTables.vue";

const { universeId, universeName } = defineProps<{
  universeId: string;
  universeName: string;
}>();
const { tables, error } = useGetTablesForSelectedUniverse(universeId);

function newTableAdded(table: Table) {
  tables.value.push(table);
}
</script>

<template>
  <h1>Selected Universe {{ universeName }}</h1>
  <UniverseTables
    :tables="tables"
    :universe="{ id: universeId, name: universeName }"
  />
  <AddNewTable :universe-id="universeId" @table-added="newTableAdded" />
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
