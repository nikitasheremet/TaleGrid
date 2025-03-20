<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { db } from "../db/db";

const universes = ref<string[]>([]);

onMounted(() => {});

const newUniverse = ref("");
function addUniverse() {
  if (newUniverse.value) {
    try {
      universes.value.push(newUniverse.value);
      const transaction = db.transaction("universes", "readwrite");
      const objectStore = transaction.objectStore("universes");
      objectStore.add({ name: newUniverse.value });
    } catch (error) {
      console.error(error);
    }

    newUniverse.value = "";
  }
}
</script>

<template>
  <p>List of universes</p>
  <div>
    <RouterLink :to="`/universe/${universe}`" v-for="universe in universes">
      {{ universe }}
    </RouterLink>
  </div>
  <input type="text" v-model="newUniverse" />
  <button @click="addUniverse">Add universe</button>
</template>

<style scoped></style>
