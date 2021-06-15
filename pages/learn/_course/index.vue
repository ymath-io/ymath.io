<template>
  <div v-if="fetched">

    <nuxt-content :document="course"/>

  <div :key="subject.title" v-for="subject of subjects">
    {{subject.url+''}}
  </div>

  </div>
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
}
</script>

<style scoped>
</style>
