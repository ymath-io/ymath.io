<template>
  <div>
    <h1 class="font-semibold text-green-400 text-3xl mb-4">
      Course Description
    </h1>
    <nuxt-content :document="course" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const [course] = await $content('courses', params.course)
      .where({ type: { $eq: 'course' } })
      .fetch()
    if (!course) {
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    // fetch chapters
    const subjects = await $content('courses', params.course, { deep: true })
      .where({ type: 'chapter' })
      .only(['title', 'slug'])
      .fetch()
    return { course, subjects, fetched: true }
  },
  head() {
    return {
      titleTemplate: this.course.title + ' • YMath.io',
    }
  },
}
</script>

<style scoped>
</style>
