import xForm from '../xForm/index'
import golbalConfig from './config'
import showConfig from '../flowable/showConfig'
golbalConfig.set({
  input: {
  },
  select: {
  },
  colorPicker: {
    showAlpha: true
  },
  xform: {
    form: {
    }
  }
})
export default {
  components: { xForm: xForm },
  props: {
    modeler: {
      type: Object,
      required: true
    },
    element: {
      type: Object,
      required: true
    },
    categorys: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    'formData.id': function(val) {
      this.updateProperties({ id: val })
    },
    'formData.name': function(val) {
      this.updateProperties({ name: val })
    },
    'formData.documentation': function(val) {
      if (!val) {
        this.updateProperties({ documentation: [] })
        return
      }
      const documentationElement = this.modeler.get('moddle').create('bpmn:Documentation', { text: val })
      this.updateProperties({ documentation: [documentationElement] })
    }
  },
  methods: {
    updateProperties(properties) {
      const modeling = this.modeler.get('modeling')
      modeling.updateProperties(this.element, properties)
    }
  },
  computed: {
    elementType() {
      const bizObj = this.element.businessObject
      return bizObj.eventDefinitions
        ? bizObj.eventDefinitions[0].$type
        : bizObj.$type
    },
    showConfig() {
      return showConfig[this.elementType] || {}
    }
  }
}
