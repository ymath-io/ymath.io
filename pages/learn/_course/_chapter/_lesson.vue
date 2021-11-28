<template>
<div>
  <h1 class='font-semibold text-green-400 text-3xl mb-4'>{{document.title}}</h1>
  <nuxt-content :document='document'/>

</div>
</template>

<script>
export default {
  async asyncData({$content, params, error}){
    const [document] = await $content('courses', params.course, params.chapter, params.lesson).fetch();
    if (!document){
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    return {
      document
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
