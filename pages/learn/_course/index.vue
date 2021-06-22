<template>

        <nuxt-content :document='course' />

</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [course] = await $content('courses', params.course).fetch()
    // fetch chapters
    const subjects = await $content('courses', params.course, { deep: true })
      .where({ type: 'chapter' })
      .only(['title', 'slug'])
      .fetch()
    return { course, subjects, fetched: true }
  },
  head(){
    return {
      title:this.course.title
    }
  }
}
</script>

<style scoped>

</style>
