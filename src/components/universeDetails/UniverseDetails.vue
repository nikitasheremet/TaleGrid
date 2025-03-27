<script lang="ts" setup>
import type { Universe } from "../../types/universe";
import Error from "../error/Error.vue";
import AddNewTable from "./AddNewTable.vue";
import { useGetTablesForSelectedUniverse } from "./hooks/useGetTablesForSelectedUniverse";
import UniverseTables from "./UniverseTables.vue";

const { universe } = defineProps<{
  universe: Universe;
}>();
const { tables, error } = useGetTablesForSelectedUniverse(universe.id);
</script>

<template>
  <h1>Selected Universe {{ universe.name }}</h1>
  <UniverseTables :tables="tables" />
  <AddNewTable />
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
