<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { db } from "../db/db";
import type { Table } from "../types/table";

const tables = ref<Table[]>([]);
onMounted(() => {
  const transaction = db.transaction("tables", "readonly");
  const objectStore = transaction.objectStore("tables");
  const request = objectStore.getAll();
  request.onsuccess = () => {
    tables.value = request.result.map((table: any) => table.name);
  };
});

const newTable = ref("");
function addTable() {
  if (newTable.value) {
    try {
      const transaction = db.transaction("tables", "readwrite");
      const objectStore = transaction.objectStore("tables");
      objectStore.add({ name: newTable.value, id: crypto.randomUUID() });
    } catch (error) {
      console.error(error);
    }

    tables.value.push(newTable.value);
    newTable.value = "";
  }
}
</script>

<template>
  <p>Selected Universe {{ $route.params.universe }}</p>
  <p>Tables</p>
  <div>
    <RouterLink
      :to="`/universe/${$route.params.universe}/table/${table}`"
      v-for="table in tables"
    >
      {{ table }}
    </RouterLink>
  </div>
  <input type="text" v-model="newTable" />
  <button @click="addTable">Add table</button>
</template>

<style scoped></style>
