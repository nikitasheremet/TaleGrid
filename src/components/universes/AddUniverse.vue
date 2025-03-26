<script lang="ts" setup>
import { useAddUniverse } from "./hooks/useAddUniverse";

const { newUniverseName, addUniverse } = useAddUniverse();
</script>

<template>
  <h2>Add New Universe</h2>
  <form>
    <label for="universe-name">Universe Name</label>
    <input type="text" id="universe-name" v-model="newUniverseName" />
    <button type="submit" @click="addUniverse">Add Universe</button>
  </form>
</template>

<style scoped></style>
