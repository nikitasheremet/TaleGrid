<script lang="ts" setup>
import type { Universe } from "../../types/universe";
import Error from "../error/Error.vue";
import AddUniverse from "./AddUniverse.vue";
import ExistingUniverses from "./ExistingUniverses.vue";
import { useGetUniverses } from "./hooks/useGetUniverses";

const { existingUniverses, error } = useGetUniverses();

function addNewUniverse(universe: Universe) {
  existingUniverses.value.push(universe);
}
</script>

<template>
  <ExistingUniverses :universes="existingUniverses" />
  <AddUniverse @added-universe="addNewUniverse" />
  <Error v-if="error" :error="error" />
</template>

<style scoped></style>
