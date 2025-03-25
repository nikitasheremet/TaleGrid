<script lang="ts" setup>
import { defineProps } from "vue";

const { error } = defineProps<{
  error: string | Error;
}>();
</script>

<template>
  <p>{{ error }}</p>
</template>

<style scoped></style>
