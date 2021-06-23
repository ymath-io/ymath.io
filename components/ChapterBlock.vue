<template>
  <div class='bg-white dark:bg-gray-800 py-3 px-4 rounded-xl shadow-xl my-3'>
    <div class='grid grid-cols-4'>
      <h1
        class='
          font-bold col-span-3
          bg-gradient-to-r bg-clip-text
          text-transparent
          from-green-400
          to-green-500 mr-5
          text-2xl

        '
      >
        {{ subject.title }}
      </h1>
      <progress-bar class='w-full col-span-1 ml-auto my-auto' :value='progress' />
    </div>
    <hr class='mb-3' />
    <div class='grid grid-cols-4 dark:text-darkText'>
      <div class='grid lg:grid-cols-3 col-span-3'>
        <a href='#' class='hover:underline' :key='n.path' v-text='n.title' v-for='n of lessons'></a>
      </div>
      <div class='py-4 px-4 bg-gray-300 rounded-lg bg-opacity-30'>
        <h3 class='font-bold'>Up next for you:</h3>
        <div class='flex flex-row mt-2 align-middle'>
          <a href='#' class='flex hover:underline align-middle items-center'
          >Lesson 7</a
          >
          <a
            :href='subject.to'
            class='
              bg-blue-400
              hover:bg-blue-500
              cursor-pointer
              ml-auto
              text-white
              py-1
              px-3
              rounded-xl
            '
          >Start</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['subject'],
  async fetch() {
    let fetchPath = this.subject.path.split('/')
    fetchPath.pop()
    fetchPath = fetchPath.join('/')
    this.lessons = await this.$content(fetchPath, { deep: true }).where({ type: 'lesson' }).sortBy('index').only(['path', 'title']).fetch()
  },
  data: () => ({
    lessons: [],
    progress: 0
  }),
  async mounted() {
    await this.$fetch()
    this.fetchCompletion()
    let v = this
    window.addEventListener('storage', () => {
      v.fetchCompletion()
    })
    window.addEventListener('completionChange', () => {
      v.fetchCompletion()
    })
  },
  methods: {
    fetchCompletion() {
      let completed = 0
      for (const child of this.lessons) {
        let path = child.path.split('/')
        path.shift()
        path.shift()
        path.pop()
        child.to = '/learn/' + path
        path = path.join('/')
        path
        let prog =
          localStorage.getItem(`progress:${path}`) || 'not-started'
        switch (prog) {
          case 'not-started':
            completed += 0
            break
          case 'in-progress':
            completed += 0.5
            break
          case 'completed':
            completed += 1
            break
          case 'skipped':
            completed += 1
            break
          default: // for when it is null
            completed += 0
            break
        }
      }
      this.progress = completed / (this.lessons.length || 1)
    }
  }
}
</script>

<style>
</style>
