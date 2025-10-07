<script lang="ts" setup>
const variable = ref<string>('Click me');
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UButton>{{ variable }}</UButton>
  </UApp>
</template>
