<template>
  <RadioGroup
    v-model="formData"
    :disabled="computedConfig.disabled"
    :size="computedConfig.size"
    :text-color="computedConfig.textColor"
    :fill="computedConfig.fill"
    @change="data => computeFunction(computedConfig.change, data)"
  >
    <Radio
      v-for="(item, itemIndex) in config.dic"
      :key="itemIndex"
      :disabled="item.disabled"
      :label="item.value"
      :border="computedConfig.border"
    >{{ item.label }}</Radio>
  </RadioGroup>
</template>

<script>
import mixinComponent from '../../common/xMixin'
import merge from 'lodash.merge'
export default {
  mixins: [mixinComponent()],
  data() {
    return {
      // value: this.value
    }
  },
  computed: {
    computedConfig() {
      const c = {}
      merge(c, this.globalConfig.radio, this.config)
      return c
    }
  }
}
</script>

