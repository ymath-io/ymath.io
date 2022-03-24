<template>
  <nuxt-child />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [document] = await $content('courses', params.course, params.chapter).fetch()
    if (!document){
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    
    return { chapter: document }
  },
  head() {
    return {
      title: this.chapter.title
    }
  }
}
</script>

<style scoped>

</style>
