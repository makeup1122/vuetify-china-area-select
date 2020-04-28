# vuetify-china-area-select

## 安装
```
npm install vuetify-china-area-select --save
```
## Demo

## 使用
```
import Vue from 'vue'
import AreaSelect from 'vuetify-china-area-select'
Vue.use(AreaSelect)
```
```
<template>
  <v-app id="demo">
    <v-content>
      <AreaSelect v-model="area" return="text">
    </v-content>
  </v-app>
</template>
```
## 参数
### v-model
自定义组件的v-model
### return
返回值类型，
可选参数有`object`、`text`、`code`，默认为`text`。
### areaData
地区数据，默认使用[airyland/china-area-data](https://github.com/airyland/china-area-data)提供的数据: [data.js](https://github.com/airyland/china-area-data/blob/master/data.js)
如果有定制需要，则修改[airyland/china-area-data的data.js](https://github.com/airyland/china-area-data/blob/master/data.js)并保存到本地项目，然后传入areaData的属性。
### menuAttrs
传递给v-menu的属性参数
