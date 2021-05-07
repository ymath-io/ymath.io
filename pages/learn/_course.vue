<template>
  <div>
    <div class='select dark:select-dark '   v-if='fetched'>
      <header-banner shift>
        {{course.title}}

      </header-banner>
      <main style='min-height: 100%'
        class='max-w-7xl h-full grid gap-12 grid-cols-4 mx-auto py-0 px-4  sm:px-6 md:px-7 lg:px-8'>

        <div class='col-span-1 h-full border-r-0 pr-6 dark:border-gray-800 border-gray-200 py-6' :key='JSON.stringify(params)'>
          <h2 class='text-2xl pb-2 dark:text-darkText font-medium'>Chapters</h2>
          <side-bar-item
          :item='{
            title:"Home",
            to:`/learn/${params.course}`,
            active: !params.chapter
          }'
          />
          <side-bar-item
            :key='index'
            v-for='(subject, index) in subjects'
            :item='subject'
          />
        </div>
        <div  class='col-span-3 problem-child h-full py-6'>
          <nuxt-child />
        </div>

      </main>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
export default {
  mounted () {
    Prism.highlightAll()
  },
  async asyncData({ $content, params }) {

    const [course] = await $content('courses', params.course).fetch()
    // fetch chapters
    const subjects = await $content('courses', params.course, { deep: true })
      .where({ type: 'chapter' })
      .sortBy('index')
      .only(['title', 'slug', 'path'])
      .fetch()
    for (const subject of subjects) {
      subject.to = Object.assign([],({ ...subject.path.split('/'), 1:'learn', 4:'' })).join('/')
      // if le subject is le active subject then we highlighteth
      if (subject.path.split('/')[3] === params.chapter) {
        subject.active = !params.lesson
        subject.children = await $content('courses', params.course, params.chapter, { deep: true })
          .where({ type: 'lesson' })
          .sortBy('index')
          .only(['title', 'slug', 'path'])
          .fetch()
        subject.children.forEach(k=> {
          k.sub = true;
          k.to = Object.assign([],({ ...k.path.split('/'), 1:'learn', 5:'' })).join('/')
          k.active = params.lesson && params.lesson===k.path.split('/')[4]
        })

      }
    }
    return { course, subjects, fetched: true, params }
  }
}
</script>

<style>

</style>
