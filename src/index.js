import AreaSelect from './components/AreaSelect.vue'
const MyPlugin = { 
  install: (Vue) => {
    Vue.componet(AreaSelect.name, AreaSelect)
  }
}
export default MyPlugin