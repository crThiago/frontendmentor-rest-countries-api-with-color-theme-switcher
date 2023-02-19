<template>
  <v-row>
    <v-col>
      <v-btn
        @click="$router.push({ name: 'Home' })"
        prepend-icon="mdi-arrow-left"
      >
        Back
      </v-btn>
    </v-col>
  </v-row>
  <v-row v-if="country.code">
    <v-col cols="12" lg="6">
      <v-img
        :src="country.flag"
        alt="Flag of {{ country.name.common }}"
      />
    </v-col>
    <v-col cols="12" lg="6">
      <h1 class="subtitle-1">{{ country.name.common }}</h1>
      <v-row>
        <v-col cols="12" lg="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Native Name: </span>
                <span>{{ country.name.native }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Population: </span>
                <span>{{ country.population }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Region: </span>
                <span>{{ country.region }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Sub Region: </span>
                <span>{{ country.subregion }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Capital: </span>
                <span>{{ country.capital }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" lg="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Top Level Domain: </span>
                <span>{{ country.topLevelDomain }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Currencies: </span>
                <span v-for="(currency, key) in country.currencies" :key="key">{{ currency }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Languages: </span>
                <span v-for="(language, key) in country.languages" :key="key">{{ language }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-center">
          <h2 class="text-body-1">Border Countries: </h2>
          <v-btn
            v-for="border in country.borders"
            :key="border"
            link
            @click="changeCountry(border)"
          >
            {{ border }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import CountyService from "@/services/CountyService";
import {useRoute} from "vue-router";
import {Ref} from "@vue/reactivity";
import router from "@/router";

const code: string = <string>useRoute().params.code
const country: Ref<Country> = ref({})

onMounted(() => {
  CountyService.getCountry(code).then((response: object) => {
    country.value = CountyService.formatData(response.data)
  })
})

function changeCountry(code: string) {
  CountyService.getCountry(code).then((response: object) => {
    country.value = CountyService.formatData(response.data)
  })
  router.push({ name: 'Detail', params: { code } })
}
</script>
