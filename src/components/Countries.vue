<template>
  <v-row>
    <v-col cols="12" lg="5">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Search for a country..."
        variant="solo"
      >
      </v-text-field>
    </v-col>
    <v-col cols="12" offset-lg="5" lg="2">
      <v-select
        label="Filter by Region..."
        variant="solo"
      ></v-select>
    </v-col>
  </v-row>

  <v-row>
    <v-col v-for="(value, key) in [1, 2, 3, 4, 5, 6]" :key="key" cols="12" lg="3">
      <CountryCard />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import CountryCard from "@/components/CountryCard.vue";
</script>
