<script lang="ts" setup>
import UniverseDetails from "../components/universeDetails/UniverseDetails.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const universeId = route.params.universeId as string;
const universeName = route.params.universeName as string;
</script>

<template>
  <UniverseDetails :universe-id="universeId" :universe-name="universeName" />
</template>

<style scoped></style>
