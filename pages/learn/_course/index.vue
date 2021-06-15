<template>
  <div v-if="fetched">

    <nuxt-content :document="course"/>

  <div class="bg-white py-3 px-4 rounded-xl shadow-xl my-3" :key="subject.title" v-for="subject of subjects">
   <div class="flex flex-row"> <h1 class="font-bold bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-green-600 text-2xl">{{subject.title}}</h1> <progress-bar :value="0.3"/>  </div>
    <hr class="mb-3"/>
    <div class="grid grid-cols-4"><div class="grid lg:grid-cols-3 col-span-3">
      <div :key="n" v-for="n in 7">Lesson {{n}}</div>
    </div>
    <div class="py-4 px-4 bg-gray-300 rounded-lg bg-opacity-30">
        <h3 class="font-bold">Up next for you:</h3>
        <div class="flex flex-row align-middle"><a href="#" class="flex hover:underline align-middle items-center">Lesson 7</a> <a :href="subject.to" class="bg-blue-400 cursor-pointer ml-auto text-white py-2 px-3 rounded-xl">Start</a></div>
    </div>
    </div>
  </div>

  </div>
</template>

<script>
import ProgressBar from '~/components/ProgressBar.vue'
export default {
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
