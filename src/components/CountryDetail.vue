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
  <v-row>
    <v-col cols="12" lg="6">
      <v-img
        src="https://flagcdn.com/be.svg"
      />
    </v-col>
    <v-col cols="12" lg="6">
      <h1 class="subtitle-1">Belgium</h1>
      <v-row>
        <v-col cols="12" lg="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Native Name: </span>
                <span>België</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Population: </span>
                <span>11,589,623</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Region: </span>
                <span>Europe</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Sub Region: </span>
                <span>Western Europe</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Capital: </span>
                <span>Brussels</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" lg="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Top Level Domain: </span>
                <span>.be</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Currencies: </span>
                <span>EUR</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold">Languages: </span>
                <span>Dutch, French, German</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-center">
          <h2 class="text-body-1">Border Countries: </h2>
          <v-btn>FRA</v-btn>
          <v-btn>DEU</v-btn>
          <v-btn>LUX</v-btn>
          <v-btn>NLD</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
</script>
