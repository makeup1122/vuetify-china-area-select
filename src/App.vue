<template>
  <v-app id="app">
    <v-content>
      <v-container>
        <v-card>
          <v-card-title>Vuetify 地区选择组件</v-card-title>
          <v-card-text>
            <v-select v-model="returnType" :items="items" label="选择返回类型"></v-select>
            <v-checkbox v-model="custom" :label="`自定义地区数据: ${custom ? '使用': '不使用'}`" ></v-checkbox>
            <AreaSelect v-if="custom" v-model="area" :return="returnType" label="选择地区" :area-data="CustomData"/>
            <AreaSelect v-else v-model="area" :return="returnType" label="选择地区"/>
            <code>{{area}}</code>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AreaSelect from './components/AreaSelect.vue'
import CustomData from './custom-data'
export default {
  name: 'App',
  components: {
    AreaSelect
  },
  data() {
    return  {
      CustomData,
      custom: false,
      items: [
        { text: '地区名称', value :"text" },
        { text: '地区代码', value:"code" },
        { text: '地区对象(名称和代码)', value:"object" }
      ],
      area: [],
      returnType: 'text'
    }
  }
}
</script>

<style>
</style>
