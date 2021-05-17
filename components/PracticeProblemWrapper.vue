<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'PracticeProblemWrapper',
  async asyncData({ $content }) {

  },
  props: {
    text: {
      type: string,
      default: 'Try this on your own now.'
    },
    path: {
      type: string,
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
