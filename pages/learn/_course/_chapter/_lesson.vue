<template>
<div>
  <div class="flex flex-row"><h1 class='font-semibold text-green-400 text-3xl mb-4'>{{document.title}}</h1><progress-selector class="ml-auto"  v-model='progress'/></div>
  <nuxt-content :document='document'/>
  <div class='text-right mt-10'><progress-selector  v-model='progress'/></div>
</div>
</template>

<script>
export default {
  async asyncData({$content, params}){
    const [document] = await $content('courses', params.course, params.chapter, params.lesson).fetch();
    return {
      document, params, storageKey:`progress:${params.course}/${params.chapter}/${params.lesson}`, id:Math.random()
    }
  },
  mounted(){
     this.progress = localStorage[this.storageKey] || 'not-started';

    window.addEventListener('storage', function(event) {
      this.progress = localStorage[this.storageKey];
    });
    window.addEventListener('completionChange', function(event) {
      if (event === this.id) return;
      this.progress = localStorage[this.storageKey];
    })
  },
  data(){
    return {
      progress:'not-started'
    }
  },
  watch:{
    progress(){
      localStorage[this.storageKey] = this.progress;
      window.dispatchEvent( new Event('completionChange') );
    }
  },
  head(){
    return {
      title: this.document.title,

    }
  }
}
</script>

<style scoped>

</style>
