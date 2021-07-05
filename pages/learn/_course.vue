<template>
  <div>
    <div class="select dark:select-dark" v-if="fetched">

      <div v-show="false" :style="{backgroundColor:course.color,height:'84px'}"></div>
      <div  v-show="false" :style="{backgroundColor:`${course.color}`}" style="height:60px" class=" flex">
          <div class="mb-2 ml-16 ">
              <a class="text-4xl font-bold tracking-wide text-black text-opacity-80">{{course.title}}</a>
              <hr class="border-black border-opacity-40"/>
              <p class="text-md text-black text-opacity-70 ml-1 mtt-1">{{course.description}}</p>
          </div>
      </div>
      <div class="" :style="{backgroundColor:course.color,height:'64px'}"></div>
      <main
           style="min-height: 100%; top: 64px"
        class="h-full grid sm:gap-12 sm:grid-cols-4 sticky mb-0 py-0"
      >
        <div
          style="height: calc(100vh - 64px)"
          class="
            sm:col-span-1
            scrollbar-thin scrollbar-thumb-rounded-full
            dark:scrollbar-thumb-gray-800
            scrollbar-thumb-gray-200 scrollbar-track-transparent
            w-screen
            overflow-y-scroll
            sm:sticky
            sm:w-full
            sm:border-r-2
            flex flex-col
            border-b-2
            pb-7
            sm:border-b-0
            dark:border-gray-800
            border-gray-200

          "
          :key="JSON.stringify(params)"
        >

        <div class="sticky bg-gray-100 dark:bg-gray-900 w-full py-3 z-10 text-center top-0">
          <h1 class="text-2xl dark:text-darkText font-bold font-sans">
            {{course.title}}
          </h1>
        </div>

          <div class="text-center">
           <!--- <h1
              class="
                tracking-wide
                font-extrabold
                bg-gradient-to-l bg-clip-text
                text-transparent
                from-green-400
                to-green-600
                my-3
                uppercase
                text-2xl
              "
            >
              {{ course.title }}
            </h1>-->
          </div>

          <side-bar-item
            :key="index"
            v-for="(subject, index) in subjects"
            :item="subject"
          />
        </div>

        <div
          style="height: calc(100vh - 64px)"
          class="sm:col-span-3 w-screen pr-4 sm:pr-20 sm:w-full overflow-scroll h-full pb-6"
        >
          <div
            v-if="prev || next && level !=='course'"
            class="
              mb-15

              flex flex-col
              sm:flex-row
              border-t-0
              dark:border-gray-800
              border-gray-200
            "
          >
            <a
              :href="prev.href"
              v-if="prev"
              class="text-md btn-primary mx-auto sm:ml-1 sm:mr-auto flex-col"
            >
              <m-icon class="" icon="chevron-left" />
              <span>{{ prev.title }}</span>

            </a>

            <a
              :href="next.href"
              v-if="next"
              class="text-md btn-primary sm:mr-1 mx-auto sm:ml-auto flex-col"
            >
              <span>{{ next.title }}</span>
              <m-icon class="" icon="chevron-right" />
            </a>
          </div>
          <div
          v-if="prev || next && level !=='course'"
            class="mb-15 h-6 border-t-2 dark:border-gray-800 border-gray-200"
          />
          <nuxt-child class="pl-4 " />
          <div
          v-if="prev || next && level !=='course'"
            class="mt-0 h-6 border-b-2 dark:border-gray-800 border-gray-200"
          />
          <div
            v-if="prev || next && level !=='course'"
            class="
              mt-15
              w-full
              flex flex-col
              sm:flex-row
              border-b-2
              dark:border-gray-800
              border-gray-200
            "
          >
            <a
              :href="prev.href"
              v-if="prev"
              class="text-md btn-primary mx-auto sm:ml-1 sm:mr-auto flex-col"
            >
              <m-icon class="" icon="chevron-left" />
              <span>{{ prev.title }}</span>
            </a>

            <a
              :href="next.href"
              v-if="next"
              class="text-md btn-primary sm:mr-1 mx-auto sm:ml-auto flex-col"
            >
              <span>{{ next.title }}</span>
              <m-icon class="" icon="chevron-right" />
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
    let level = 'course'
    let prev, next
    if (params.lesson) {

      ;[prev, next] = await $content('courses', params.course, { deep: true })
        //.where({'type':'lesson'})
        .sortBy('index')
        .surround(
          `/courses/${params.course}/${params.chapter}/${params.lesson}/index`
        )
        .only(['path', 'title'])
        .fetch()
      level = 'lesson'
    } else if (params.chapter) {
      ;[prev, next] = await $content('courses', params.course, { deep: true })
        .sortBy('index')
        .surround(`/courses/${params.course}/${params.chapter}/index`)
        .only(['path', 'title'])
        .fetch()
      level = 'chapter'
    } else {
      ;[prev, next] = await $content('courses', params.course, { deep: true })

        .sortBy('index')
        .surround(`/courses/${params.course}/index`)
        .only(['path', 'title'])
        .fetch()
    }

    if (prev) {
      const segments = prev.path.split('/')
      delete segments[0]
      segments[1] = 'learn'
      delete segments[segments.length - 1]
      prev.href = segments.join('/')
    }
    if (next) {
      const segments = next.path.split('/')
      delete segments[0]
      segments[1] = 'learn'
      delete segments[segments.length - 1]
      next.href = segments.join('/') //.substring(1);
    }

    const subjects = await $content('courses', params.course, { deep: true })
      .where({ type: 'chapter' })
      .sortBy('index')
      .only(['title', 'slug', 'path'])
      .fetch()
    for (const subject of subjects) {
      subject.to = Object.assign([], {
        ...subject.path.split('/'),
        1: 'learn',
        4: '',
      }).join('/')
      // if le subject is le active subject then we highlighteth
      if (subject.path.split('/')[3] === params.chapter) {
        subject.active = !params.lesson
      }
      subject.children = await $content(
        'courses',
        params.course,
        subject.path.split('/')[3],
        { deep: true }
      )
        .where({ type: 'lesson' })
        .sortBy('index')
        .only(['title', 'slug', 'path'])
        .fetch()
      subject.children.forEach((k) => {
        k.progress = 'not-started'
        k.to = Object.assign([], {
          ...k.path.split('/'),
          1: 'learn',
          5: '',
        }).join('/')
        k.active =
          params.lesson &&
          params.lesson === k.path.split('/')[4] &&
          params.chapter == k.path.split('/')[3]
      })
    }
    return { course, subjects, fetched: true, level, params, prev, next }
  },
}
</script>

<style>
.scroll-down::before {
  @apply  text-4xl animate-bounce;
}
</style>
