<template>
<div>
  <div class="flex flex-row"><h1 class='font-semibold text-green-400 text-3xl mb-4'>{{document.title}}</h1><progress-selector class="ml-auto"  v-model='progress'/></div> 
  <nuxt-content :document='document'/>
  <div class='text-center mt-10'><progress-selector  v-model='progress'/></div>
</div>
</template>

<script>
export default {
  async asyncData({$content, params}){
    const [document] = await $content('courses', params.course, params.chapter, params.lesson).fetch();
    return {
      document, params
    }
  },
  mounted(){
     this.progress = localStorage[`progress:${this.params.course}/${this.params.chapter}/${this.params.lesson}`] || 'not-started';

    window.addEventListener('storage', function(event) {
      this.progress = localStorage[`progress:${this.params.course}/${this.params.chapter}/${this.params.lesson}`];
    })
  },
  data(){
    return {
      progress:'not-started'
    }
  },
  watch:{
    progress(){
      localStorage[`progress:${this.params.course}/${this.params.chapter}/${this.params.lesson}`] = this.progress;
    }
  }
}
</script>

<style scoped>

</style>
