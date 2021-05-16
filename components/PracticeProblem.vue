<template>
  <div class='dark:bg-gray-800 bg-gray-50 py-4 dark:text-darkText rounded-md shadow-lg mx-20'>
    <div class='px-4'>
      <span class='dark:text-darkText'>hello what is 1+1</span>
      <math-live-input :config='config' class='dark:text-gray-200' v-model="formula" >a^3-b</math-live-input>
    </div>
<hr class='border-b mt-2 dark:border-gray-700 border-gray-100'/>

    <details  class=''>
      <summary class='block hover:bg-gray-700 hover:bg-gray-100 py-2 px-4'>hint one <m-icon icon='chevron-down' /></summary>
      amazing hint you know
    </details>
  </div>
</template>

<script>
import MathLive from "mathlive";
export default {
  name: 'PracticeProblem',
  data:()=>({
    formula: 'h(x)',
    config:{
      smartMode: true,
      virtualKeyboardMode: "manual",
    }
  }),
  mounted(){
    MathLive.renderMathInDocument();
  }
}
</script>

<style >

</style>
