<template>
<span class='mqfield' @click='mathField.focus()' style='width: 100%;height: 100%;'>

  <span  ref='field'>{{modelValue}}</span>
</span>
</template>

<script>
export default {
  name: 'mathfield',
  props:['model-value'],
  emits: ['update:model-value'],
  data:()=>({
    mathField:null
  }),
  mounted() {
    //console.log(this.$refs["field"])
    const v = this;
    const mathField = this.$mq.MathField(this.$refs.field, {
      handlers: {
        edit: function() {
          const enteredMath = mathField.latex(); // Get entered math in LaTeX format
          //console.log(enteredMath)
          v.value = enteredMath;
          v.$emit('update:model-value', enteredMath)
        }
      }
    })
    mathField.latex(this.modelValue)
    this.mathField = mathField
  },
  watch: {
    modelValue: function(value){
      this.mathField.latex(value);
    }
  }
}
</script>

<style scoped>
.mq-editable-field, .mq-math-mode .mq-editable-field {
  border:none
}
.mq-editable-field .mq-cursor {
  border-left: 1px solid white !important;
}
</style>
