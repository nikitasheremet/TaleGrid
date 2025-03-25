<script lang="ts" setup>
import type { Universe } from "../../types/universe";

const { universes } = defineProps<{
  universes: Universe[];
}>();
</script>

<template>
  <h1>Existing Universes</h1>
  <ul>
    <RouterLink
      :to="`/universe/${universe.name}/${universe.id}`"
      v-for="universe in universes"
    >
      {{ universe.name }}
    </RouterLink>
  </ul>
</template>

<style scoped></style>
