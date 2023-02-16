<template>
  <v-row>
    <v-col cols="12" lg="5">
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search for a country..."
        variant="solo"
        clearable
      >
      </v-text-field>
    </v-col>
    <v-col cols="12" offset-lg="5" lg="2">
      <v-select
        v-model="region"
        :items="itemsRegion"
        label="Filter by Region..."
        variant="solo"
        clearable
      ></v-select>
    </v-col>
  </v-row>

  <v-row>
    <v-col v-for="(country, key) in countries" :key="key" cols="12" lg="3">
      <CountryCard :country="country"/>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import CountryCard from "@/components/CountryCard.vue";
import CountyService from "@/services/CountyService";
import {onMounted, ref, watch} from "vue";
import {Ref} from "@vue/reactivity";

const itemsRegion = [
  {title: 'Africa', value: 'Africa'},
  {title: 'Americas', value: 'Americas'},
  {title: 'Asia', value: 'Asia'},
  {title: 'Europe', value: 'Europe'},
  {title: 'Oceania', value: 'Oceania'},
];

const countries: Ref<Country[]> = ref([])
onMounted(() => {
  allContries();
});

const search: Ref<string> = ref('')
watch(search, (value) => {
  countries.value = [];
  if (value) {
    CountyService.getCountriesByName(value).then((response) => {
      countries.value.push(...CountyService.sliceMapData(response.data));
    });
  } else {
    allContries();
  }
})

const region = ref<string>();
watch(region, (value) => {
  countries.value = [];
  if (value) {
    CountyService.getCountriesByRegion(value).then((response) => {
      countries.value.push(...CountyService.sliceMapData(response.data));
    });
  } else {
    allContries();
  }
})

function allContries() {
  CountyService.getCountries().then((response) => {
    countries.value.push(...CountyService.sliceMapData(response.data));
  });
}
</script>
