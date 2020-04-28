import AreaSelect from './components/AreaSelect.vue'
const MyPlugin = { 
  install: (Vue) => {
    Vue.component(AreaSelect.name, AreaSelect)
  }
}
export default MyPlugin