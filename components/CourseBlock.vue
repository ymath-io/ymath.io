<template>
  <div style='position: relative'
       class='inline-block  grid grid-cols-5 md:grid-cols-none gap-3 md:gap-0 m-3 max-w-96 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 bg-white rounded-xl'>
    <div :style='{background: `url(${course.thumbnail}) center`,backgroundSize:`cover`}' class='col-span-2 md:col-span-12 m-2 md:m-0 md:rounded-t-xl rounded-xl h-40 md:rounded-b-none'>

    </div>

    <div class='px-1 md:px-5 grid-rows-4 pb-3 pt-3 col-span-3 md:col-span-12'>
      <h1 class='text-xl font-bold row-span-1 text-green-500'>
        <a class='stretched-link'
           :href='`/learn/${course.path.split("/")[2]}`'>
          {{ course.title }}
        </a>
      </h1>
      <p class='dark:text-gray-400 text-gray-600  row-span-2 my-2'>
        {{ course.description }}
      </p>
      <div class='row-span-1 text-center'>
        <a class='dark:text-gray-500  text-gray-500'>By {{ course.author }}</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CourseBlock',
  props: {
    course: {
      default: {
        title: 'Course.title',
        description: 'Course.description',
        author:'Course.author'
      },
      type: Object
    }
  }
}
</script>

<style>
</style>
