<template>
  <div style='position: relative'
       class='inline-block  grid grid-cols-5 md:grid-cols-none gap-3 md:gap-0 m-3 max-w-96 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 bg-white rounded-xl'>
    <div :style='{background: `url(${course.thumbnail}) center`,backgroundSize:`cover`}' class='col-span-2 md:col-span-12 m-2 md:m-0 md:rounded-t-xl rounded-xl h-40 md:rounded-b-none'>

    </div>

    <div class='px-1 md:px-5 flex flex-col pb-3 pt-3 col-span-3 md:col-span-12'>
      <h1 class='text-xl font-bold row-span-1 text-green-500'>
        <a class='stretched-link'
           :href='`/learn/${course.path.split("/")[2]}`'>
          {{ course.title }}
        </a>
      </h1>
      <p class='dark:text-gray-400 text-gray-600  row-span-2 my-2'>
        {{ course.description }}
      </p>
      <progress-bar class='row-span-1' :value='completionProgress'/>
      <!-- add a progress bar, there is an extra row-span already -->
      <div class='row-span-1 mt-auto text-center'>
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
  },
  data:()=>({
    lessons:[],
    completionProgress: 0,
  }),
  async fetch(){
    const courseid = this.course.path.split("/")[2];
    this.lessons = (await this.$content('courses',courseid, {deep:true}).where({type:'lesson'}).only(['path', 'title','index']).sortBy('index').fetch()).map(lesson=>{
      lesson.path = lesson.path.split('/');
      lesson.path.shift();lesson.path.shift();
      lesson.path.pop();
      lesson.path = lesson.path.join('/');
      return lesson;
    });
  },
  fetchOnServer: true,
  mounted(){
    // when we use `generate` perhaps this will run properly
    // fetch the completion status for each lesson!
    let completed = 0;
    // skipped and completed = 1
    // in progress = 0.5
    this.lessons.forEach( lesson => {
      const prog = localStorage.getItem(`progress:${lesson.path}`);
      switch (prog) {
        case 'not-started':
          completed += 0;
          break;
        case 'in-progress':
          completed += 0.5;
          break;
        case 'completed':
          completed += 1;
          break;
        case 'skipped':
          completed += 1;
          break;
        default: // for when it is null
          completed += 0;
          break;
      }
    });
    this.completionProgress = completed / (this.lessons.length || 1)
  }
}
</script>

<style>
</style>
