import xForm from '../xForm/index'
import golbalConfig from './config'
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
  components: { xForm: xForm }
}
