<template>
  <v-app-bar elevation="2">
    <v-app-bar-title class="font-weight-bold">Where in the World?</v-app-bar-title>

    <v-spacer />

    <v-btn
      @click="$emit('toggle')"
      prepend-icon="mdi-moon-waning-crescent"
    >Dark Mode</v-btn>
  </v-app-bar>
</template>
