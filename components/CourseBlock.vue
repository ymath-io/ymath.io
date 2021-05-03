<template>
  <div style='position: relative'
       class='inline-block  grid grid-cols-5 md:grid-cols-none gap-3 md:gap-0  m-3 max-w-96 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 bg-white rounded-xl'>
    <div class='col-span-2 md:col-span-12 m-2 md:m-0'>
      <img
        alt='physics'
        class='md:rounded-t-xl rounded-xl md:rounded-b-none'
        src='https://kavlifoundation.org/static/f3d491f9cf79bdb67282369729c6736d/28d67/abstract-data.jpg'
      />
    </div>

    <div class='px-1 md:px-5 grid-rows-4 pb-5 pt-3 col-span-3 md:col-span-12'>
      <h1 class='text-xl font-bold row-span-1 text-green-500'><a class='stretched-link' :href='`/learn/${course.path.split("/")[2]}`'>{{ course.title }}</a></h1>
      <p class='text-gray-400 row-span-2'>
        {{ course.description }}
      </p>
      <a class='dark:text-white row-span-1 text-gray-100'>{{course.author}}</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CourseBlock',
  props:{
    course:{
      default:{
        title:'Course.title',
        description: 'Course.description'
      },
      type: Object
    }
  }
}
</script>

<style>
</style>
