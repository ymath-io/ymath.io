<template>
  <div v-if="fetched" class="mt-10">

  <chapter-block :subject="subject" :key="subject.title" v-for="subject of subjects"/>
  
  <div class="my-4">
<h1 class="text-2xl font-bold text tracking-wide">About this course</h1>
    <hr class="border-gray-200 mb-4"/>
    <nuxt-content :document="course" />
  </div>
  


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
  head(){
    return {
      title:this.course.title
    }
  }
}
</script>

<style scoped>
</style>
