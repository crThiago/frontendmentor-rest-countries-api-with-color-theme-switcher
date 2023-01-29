<template>
  <v-app-bar>
    <v-app-bar-title>Where in the World?</v-app-bar-title>

    <v-spacer />

    <v-btn
      @click="$emit('toggle')"
      prepend-icon="mdi-circle-slice-4"
    >Dark Mode</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
