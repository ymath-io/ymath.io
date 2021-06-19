<template>
  <div class='mt-auto bg-gray-200 w-full dark:bg-gray-800 pt-4 pb-6'>

    <div class='md:mx-72 mx-3 linknasium grid sm:gap-3 md:gap-6 grid-cols-4'>
      <div class='col-span-1  text-right'>
        <h1 class='footer-heading'>Community</h1>
        <div class='dark:text-darkText'>
          <a href='//github.com/ymath-io/ymath.io'>Github</a>
          <a href='//discord.gg/NPbfRt4wNM'>Discord</a>
        </div>
        <h1 class='footer-heading mt-2'>More</h1>
        <div class='dark:text-darkText'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/faq'>FAQ</a>
        </div>
      </div>
      <div class='col-span-2 text-center'>
        <h1 class='footer-heading'>Courses</h1>
        <div class='dark:text-darkText'>
          <a :href='`/learn/${course.path.split("/")[2]}`' class='block' :key='course.title' v-for='course in courses'>{{ course.title }}</a>
        </div>
      </div>
      <div class='sm:col-span-1 sm:text-left'>
        <Logo size='70' class='mt-3' />
      </div>

    </div>
    <div class='lg:mx-96 mx-4 border-t-2 dark:border-gray-700 border-gray-300 mt-4 py-2'>
      <span class='text-gray-400'>&copy; {{ (new Date()).getFullYear() }}</span> <a class='link' href='/'>YMath.io</a>
      <span class='text-gray-400'>owned and operated by</span> <a class='link' href='//github.com/saumyasinghal747'>Saumya
      Singhal</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: () => ({
    courses: []
  }),
  async fetch() {
    this.courses = await this.$content('/', { deep: true })
      .where({ type: 'course' })
      .only(['title', 'path'])
      .fetch()

  }
}
</script>

<style scoped>
.footer-heading {
  @apply text-lg text-green-400
}

.link {
  @apply font-semibold text-green-400
}

a[href] {
  @apply hover:underline;
}

.linknasium a[href] {
  @apply block;
}
</style>
