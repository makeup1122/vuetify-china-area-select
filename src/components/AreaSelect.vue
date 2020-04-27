<!--
 @Author: makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-02-12 16:29:45"
-->
<template>
  <v-menu offset-y :close-on-content-click="false" v-model="menuValue" allow-overflow max-width="600">
    <template v-slot:activator="{ on }">
      <v-text-field :autocomplete="false" v-on="on" :value="value" @input="inputHandle"></v-text-field>
    </template>
    <v-row no-gutters style="background-color:#FCFCFC;">
      <v-col style="overflow-y:scroll;height:400px;">
        <v-list dense subheader>
          <v-list-item-group v-model="province" color="primary">
            <v-list-item
              dense
              v-for="(item, index) in provinceItems"
              :key="index"
              :value="item"
              @click="handleProvince(item, index)"
              >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col style="overflow-y:scroll;height:400px;">
        <v-list dense subheader v-if="provinceItems.length > 0">
          <v-list-item-group v-model="city" color="primary">
            <v-list-item
              dense
              v-for="(item, index) in cityItems"
              :value="item"
              :key="index"
              @click="handleCity(item, index)">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col style="overflow-y:scroll;height:400px;">
        <v-list dense subheader v-if="cityItems.length > 0">
          <v-list-item-group v-model="county" color="primary">
            <v-list-item
              dense
              @click="handleCounty(item, index)"
              v-for="(item, index) in countyItems"
              :key="index"
              :value="item">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-menu>
</template>
<script>
import AreaData from 'china-area-data/data.js'
export default {
  name: 'VAreaSelect',
  props: {
    value: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    return: {
      type: String,
      default: 'text' // code/object/text
    }
  },
  data: function () {
    return {
      AreaData,
      menuValue: false,
      province: {},
      city: {},
      county: {}
    }
  },
  watch: {
    menuValue: function(newVal) {
      if (newVal === false) {
        this.inputHandle()
      }
    }
  },
  created: function () {
  },
  computed: {
    provinceItems: function() {
      const p = Object.entries(this.AreaData['86'])
      return p.map(e => {
        return { code: e[0], text: e[1] }
      })
    },
    cityItems: function() {
      if (!this.province.code) return []
      const p = Object.entries(this.AreaData[this.province.code])
      return p.map(e => {
        return { code: e[0], text: e[1] }
      })
    },
    countyItems: function() {
      if (!this.city.code) return []
      const p = Object.entries(this.AreaData[this.city.code])
      return p.map(e => {
        return { code: e[0], text: e[1] }
      })
    }
  },
  methods: {
    handleProvince: function(/* item, index */) {
      this.city = this.county = {}
    },
    handleCity: function(/* item, index */) {
      this.county = {}
    },
    handleCounty: function(/* item, index */) {
      this.menuValue = false
    },
    inputHandle: function() {
      switch (this.return) {
        case 'object':
          this.$emit('input', [this.province, this.city, this.county].filter(e => e !== undefined))
          break
        case 'code':
          this.$emit('input', [this.province.code, this.city.code, this.county.code].filter(e => e !== undefined))
          break
        case 'text':
        default:
          this.$emit('input', [this.province.text, this.city.text, this.county.text].filter(e => e !== undefined))
          break
      }
    }
  }
}
</script>
