<template>
  <v-app :theme="theme">
    <default-bar @toggle="toggleTheme"/>

    <default-view :class="theme === 'light' ? 'bg-grey-lighten-5' : 'bg-grey-darken-3'" />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { ref } from "vue";
  import { Ref } from "@vue/reactivity";

  const theme: Ref = ref("light");

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }
</script>
