<template>
  <div style='position: relative'
       class='inline-block  grid grid-cols-5 gap-3 md:gap-0 m-3 max-w-96 shadow-md transition-shadow duration-300  ease-in-out  dark:bg-gray-800 bg-white rounded-xl'>
    <div :style='{background: `url(${course.thumbnail}) center`,backgroundSize:`cover`}' class='col-span-2  mx-4 my-auto  rounded-xl h-40 '>

    </div>

    <div class='px-1 md:px-5 flex flex-col pb-6 pt-3 col-span-3'>
      <h1 class='text-xl font-bold row-span-1 text-green-400'>
        <a
           :href='!`/learn/${course.path.split("/")[2]}`||null'>
          {{ course.title }}
        </a>
      </h1>
      <p class='dark:text-gray-400 text-gray-600  row-span-2 my-2'>
        {{ course.description }}
      </p>
      <div class='row-span-1 mt-auto mb-3'>
        <progress-bar class='flex-grow' :value='completionProgress'/>
      </div>
      <a  :href='`/learn/${actionInfo.nextUp.path}`' v-if='actionInfo.nextUp' class='btn-primary bg-green-400 dark:bg-green-300 dark:text-green-400 text-green-500 bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30  row-span-1  px-3 flex flex-row py-2 rounded-xl'>
        <span class='flex-grow'>{{actionInfo.nextUp.title}}</span>
        <m-icon icon='chevron-right' />
      </a>

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
    actionInfo:{
      finished: false,
      nextUp: null,
      continueStatus:null
    }
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
  async mounted(){
     await this.$fetch();
    // when we use `generate` perhaps this will run properly
    // fetch the completion status for each lesson!
    let completed = 0;
    // skipped and completed = 1
    // in progress = 0.5
    const reversedLessons = Array.from(this.lessons).reverse();
    reversedLessons.forEach( lesson => {
      const prog = localStorage.getItem(`progress:${lesson.path}`);
      switch (prog) {
        case 'not-started':
          completed += 0;
          this.actionInfo.nextUp = lesson;
          this.actionInfo.continueStatus = 'not-started';
          break;
        case 'in-progress':
          completed += 0.5;
          this.actionInfo.nextUp = lesson;
          this.actionInfo.continueStatus = 'in-progress';
          break;
        case 'completed':
          completed += 1;
          break;
        case 'skipped':
          completed += 1;
          break;
        default: // for when it is null
          completed += 0;
          this.actionInfo.nextUp = lesson;
          this.actionInfo.continueStatus = 'not-started';
          break;
      }
    });
    if (!this.actionInfo.nextUp) this.actionInfo.finished = true;
    this.completionProgress = completed / (this.lessons.length || 1)
  }
}
</script>

<style>
</style>
