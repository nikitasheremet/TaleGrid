<script lang="ts" setup>
import TableDetails from "../components/tableDetails/TableDetails.vue";

import { useRoute } from "vue-router";
const route = useRoute();
const tableId = route.params.tableId as string;
const tableName = route.params.tableName as string;
</script>

<template>
  <TableDetails :table-id="tableId" :table-name="tableName" />
</template>

<style scoped></style>
