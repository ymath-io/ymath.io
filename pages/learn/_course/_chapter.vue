<template>
<nuxt-child/>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [document] = await $content('courses', params.course, params.chapter).fetch()
    return { chapter: document }
  },
  head() {
    return {
      titleTemplate: '%s | ' + this.chapter.title + ' • YMath.io'
    }
  }
}
</script>

<style scoped>

</style>
