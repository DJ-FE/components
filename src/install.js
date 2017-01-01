import loading from './components/loading'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(loading.name, loading)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install as default,
  loading
}
