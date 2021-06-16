<template>
  <div>
    <div class='select dark:select-dark pb-16'   v-if='fetched'>
      <header-banner shift>
        {{course.title}}

      </header-banner>
      <main style='min-height: 100%'
        class='max-w-7xl h-full grid gap-12 sm:grid-cols-4 mx-auto py-0 mx-4  sm:px-6 md:px-7 lg:px-8'>

        <div class='sm:col-span-1 px-4 sm:pl-0 w-screen sm:w-full h-full border-b-2 sm:border-b-0 sm:pr-6 dark:border-gray-800 border-gray-200 py-3 sm:py-6' :key='JSON.stringify(params)'>
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
        <div  class='sm:col-span-3 w-screen sm:w-full problem-child h-full px-4 sm:px-0 pb-6 pt-1 sm:py-6'>
        
          <div v-if='prev || next' class='mb-15 w-full flex flex-col sm:flex-row border-t-2 dark:border-gray-800 border-gray-200'>
            <a :href='prev.href' v-if='prev' class='text-md btn-primary mx-auto sm:ml-1 sm:mr-auto flex-col'>
              <m-icon class='' icon='chevron-left'/> <span>{{prev.title}}</span>
            </a>

            <a :href='next.href' v-if='next' class='text-md btn-primary sm:mr-1 mx-auto sm:ml-auto flex-col'>
              <span>{{next.title}}</span> <m-icon class='' icon='chevron-right'/>
            </a>
          </div>
          <div class='mb-15 h-10 border-t-2 dark:border-gray-800 border-gray-200'/>
          <nuxt-child />
          <div class='mt-15 h-10 border-b-2 dark:border-gray-800 border-gray-200'/>
          <div v-if='prev || next' class='mt-15 w-full flex flex-col sm:flex-row border-b-2 dark:border-gray-800 border-gray-200'>
            <a :href='prev.href' v-if='prev' class='text-md btn-primary mx-auto sm:ml-1 sm:mr-auto flex-col'>
              <m-icon class='' icon='chevron-left'/> <span>{{prev.title}}</span>
            </a>

            <a :href='next.href' v-if='next' class='text-md btn-primary sm:mr-1 mx-auto sm:ml-auto flex-col'>
              <span>{{next.title}}</span> <m-icon class='' icon='chevron-right'/>
            </a>
          </div>


        </div>

      </main>
    </div>
  </div>
</template>

<script>

export default {

  async asyncData({ $content, params }) {

    const [course] = await $content('courses', params.course).fetch()
    // fetch chapters
    let prev,next;
    if (params.lesson){
      [prev, next] = await $content('courses', params.course, {deep:true}).sortBy('index').surround(`/courses/${params.course}/${params.chapter}/${params.lesson}/index`).only(['path', 'title']).fetch()
    }
    else if (params.chapter){
      [prev, next] = await $content('courses', params.course, {deep:true}).sortBy('index').surround(`/courses/${params.course}/${params.chapter}/index`).only(['path', 'title']).fetch()
    }
    else {
      [prev, next] = await $content('courses', params.course, {deep:true}).sortBy('index').surround(`/courses/${params.course}/index`).only(['path', 'title']).fetch();
    }



    if (prev){
      const segments = prev.path.split('/');
      delete segments[0];segments[1] = 'learn';
      delete segments[segments.length-1]
      prev.href = segments.join('/')
    }
    if (next){
      const segments = next.path.split('/');
      delete segments[0];segments[1] = 'learn';
      delete segments[segments.length-1]
      next.href = segments.join('/')//.substring(1);
    }

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
    return { course, subjects, fetched: true, params, prev, next }
  }
}
</script>

<style>

</style>
