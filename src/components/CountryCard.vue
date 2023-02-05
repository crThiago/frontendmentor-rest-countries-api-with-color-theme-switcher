<template>
  <v-card
    :to="`/country/${props.country.code}`"
    link
    hover
    outlined
  >
    <v-img
      :src="props.country.flag"
      :alt="`Flag of ${props.country.name.common}`"
      height="200px"
      cover
    ></v-img>
    <v-card-title>{{ props.country.name.common }}</v-card-title>
    <v-card-text>
      <p><strong>Population:</strong> {{ props.country.population }}</p>
      <p><strong>Region:</strong> {{ props.country.region }}</p>
      <p><strong>Capital:</strong> {{ props.country.capital }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  country: {
    type: Object as () => Country,
    required: true
  }
})
</script>
