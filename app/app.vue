<script lang="ts" setup>
const variable = ref(false);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UButton>{{ variable }}</UButton>
  </UApp>
</template>
