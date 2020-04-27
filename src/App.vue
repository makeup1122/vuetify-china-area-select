<template>
  <v-app id="app">
    <v-content>
      <v-container>
    <AreaSelect v-model="area"/>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AreaSelect from './components/AreaSelect.vue'
export default {
  name: 'App',
  components: {
    AreaSelect
  },
  data() {
    return  {
      area: []
    }
  }
}
</script>

<style>
</style>
