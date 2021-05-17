<template>
  <div class='dark:bg-gray-800 bg-gray-50 py-4 dark:text-darkText rounded-md shadow-md hover:shadow-lg'>
    <div class='px-4'>
      <div class='dark:text-darkText'>
        <nuxt-content :document='question'></nuxt-content>
      </div>
      <math-live-input :config='config' class='dark:text-gray-200' :class='{correct:answers.includes(formula)}' v-model="formula" >{{formula}}</math-live-input>
    </div>


    <prac-prob-section :key='`hint-`+hintIdx' v-for='(hint, hintIdx) of hints'>
      <template v-slot:header>
        Hint {{hintIdx+1}}
      </template>
      <template v-slot:body>
        <nuxt-content :document='hint'/>
      </template>
    </prac-prob-section>
    <prac-prob-section :key='`sol-`+solIdx' v-for='(sol, solIdx) of solutions'>
      <template #header>
        Solution {{solIdx+1}}
      </template>
      <template #body>
        <nuxt-content :document='sol'/>
      </template>
    </prac-prob-section>
  </div>
</template>

<script>
import MathLive from "mathlive";
export default {
  name: 'PracticeProblem',
  props:{
      question:{
        type:Object,
        default:()=>({})
      },
    answers:{
      type: Array,
      default:()=>[],
    },
    hints:{
      type:Array,
      default:()=>[],
    },
    solutions:{
      type: Array,
      default:()=>[]

    }
  },
  data:()=>({
    formula: '',
    config:{
      //smartMode: true,
      virtualKeyboardMode: "manual",
      smartFence: true,
    }
  }),
  mounted(){
    MathLive.renderMathInDocument();
  }
}
</script>

<style >

</style>
