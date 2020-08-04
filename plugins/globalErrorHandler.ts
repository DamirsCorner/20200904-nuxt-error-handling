import Vue from 'vue'

Vue.config.errorHandler = (err: Error, vm: Vue, info: string) => {
  console.log('Logged in Vue global error handler', err, vm, info)
}
