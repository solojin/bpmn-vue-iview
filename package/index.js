import bpmnVueIview from './index.vue'

bpmnVueIview.install = Vue => Vue.component(bpmnVueIview.name, bpmnVueIview) // 给组件配置install方法

export default bpmnVueIview
