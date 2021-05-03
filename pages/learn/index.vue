<template>
  <div>
    <header-banner>Courses</header-banner>
    <main style='height: 100%'>
      <div v-if='fetched'
           class='max-w-7xl grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto py-6 xs:px-3 xs:mx-5 sm:px-6 md:px-7 lg:px-8'>

        <course-block v-for='course in courses'
                      :course='course'
                      :key='course.title'
        />
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const courses = await $content('/', { deep: true })
      .where({ type: 'course' })
      .fetch()
    return {
      courses, fetched: true
    }
  }
})
</script>

<style>
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0)
}
</style>
