<template>
  <div :class="{'sm:grid':!!text}" class='grid-cols-4 my-5'>
  <div v-if="text" class='sm:col-span-1 mb-4 sm:mb-1'>
    {{/* the text to the 'left' of the practice problem */}}
    {{text}}
  </div>
    <div class='sm:col-span-2 ' v-if='fetched'>
      {{/* the actual practice problem */}}
      <practice-problem
      :answers='doc.answers'
      :solutions='doc.solutions'
      :question='doc.problemStatement'
      :hints='doc.hints'
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'PracticeProblemWrapper',

  data:()=>({
    doc:{},
    fetched:false
  }),
  async fetch() {
    const { $content, path, number } = this;
    this.doc = await $content(path+'/problems/'+number).fetch()
    this.fetched = true;
  },
  props: {
    text: {
      type: String,
      default: 'Try this on your own now.'
    },
    path: {
      type: String,
      default: 'courses/calculus/limits/introduction'
    },
    number: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>

</style>
