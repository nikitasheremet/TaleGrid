<script lang="ts" setup>
import type { Universe } from "../../types/universe";
import { useAddUniverse } from "./hooks/useAddUniverse";

console.log("In AddUniverse.vue");
const emits = defineEmits<{
  addedUniverse: [Universe];
}>();
function emitAddedUniverse(universe: Universe) {
  emits("addedUniverse", universe);
}

const { newUniverseName, addUniverse } = useAddUniverse(emitAddedUniverse);
</script>

<template>
  <h2>Add New Universe</h2>
  <label for="universe-name">Universe Name</label>
  <input type="text" id="universe-name" v-model="newUniverseName" />
  <button type="submit" @click="addUniverse">Add Universe</button>
</template>

<style scoped></style>
