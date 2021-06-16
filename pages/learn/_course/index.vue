<template>
  <div v-if="fetched">

    <nuxt-content :document="course"/>

  <chapter-block :subject="subject" :key="subject.title" v-for="subject of subjects"/>
  
  </div>
</template>

<script>
import ChapterBlock from '~/components/ChapterBlock.vue'
import ProgressBar from '~/components/ProgressBar.vue'
export default {
  components: { ChapterBlock },
  async asyncData({ $content, params }) {
    ProgressBar
    const [course] = await $content('courses', params.course).fetch()
    // fetch chapters
    const subjects = await $content('courses', params.course, { deep: true })
      .where({ type: 'chapter' })
      .sortBy('index')
      .only(['title', 'slug', 'path'])
      .fetch()
    for (const subj of subjects){
      let path = subj.path.split('/');
      path.shift();path.shift();path.pop();
      path = path.join('/');subj.to = '/learn/'+path;
    }
    return { course, subjects, fetched: true }
  },
}
</script>

<style scoped>
</style>
