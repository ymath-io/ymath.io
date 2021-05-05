import 'mathquill/build/mathquill.css'
import 'mathquill/build/mathquill.js'
export default ({ app }, inject) => {
  const mq = window.MathQuill.getInterface(2);
  inject('mq', mq)
}
