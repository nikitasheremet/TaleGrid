<script lang="ts" setup>
import Error from "../error/Error.vue";
import ExistingUniverses from "./ExistingUniverses.vue";
import { useGetUniverses } from "./hooks/useGetUniverses";

const { existingUniverses, error } = useGetUniverses();
</script>

<template>
  <ExistingUniverses :universes="existingUniverses" />
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
