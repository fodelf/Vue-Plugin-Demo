/*
 * @Description: vue插件打包的入口文件
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-10-19 17:35:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-19 17:59:27
 */
import test from './test.vue'
//多文件读取形式
// const viewModulesFiles = require.context('@/components/Charts', false, /\.vue$/)
// const viewModules = viewModulesFiles
//   .keys()
//   .reduce((viewModules, modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = viewModulesFiles(modulePath)
//     viewModules[moduleName] = value.default
//     return viewModules
//   }, {})
const install = function(Vue) {
  //注册组件，如果是多个组件请用文件读取的形式
  Vue.component('text-test', test)
  //通用过滤器
  Vue.filter('parseTime', function(value) {
    // let time = value ? dateFormat(value * 1, 'yyyy-MM-dd') : ''
    return time
  })
  //通用自定义指令
  // element输入框限制输入 金额字段只能输入两位小数
  // 使用方法v-Number="{set:this,name:'form.table.allowanceNumber'}"
  Vue.directive('Number', {
    inserted: function(el, binding) {
      el.querySelectorAll('.el-input__inner')[0].addEventListener(
        'keyup',
        function(event) {
          var dom = event.currentTarget
          dom.value =
            dom.value.replace(/\D/g, '') !== '0'
              ? dom.value.replace(/\D/g, '')
              : ''
          let keyArry = binding.value.name.split('.')
          let len = 0
          let lenArry = keyArry.length - 1
          function match(obj) {
            if (len < lenArry) {
              len = len + 1
              match(obj[keyArry[len - 1]])
            } else if (len === lenArry) {
              obj[keyArry[len]] = dom.value
            }
          }
          match(binding.value.set)
        }
      )
    }
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install
}
