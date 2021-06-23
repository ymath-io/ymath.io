<template>
<div>
  <h1 class='font-semibold text-green-400 text-3xl mb-4 '>{{document.title}}</h1>
  <nuxt-content :document='document'></nuxt-content>
</div>
</template>

<script>
export default {
  name: 'index',
  async asyncData({$content, params}){
    const [document] = await $content('courses', params.course, params.chapter).fetch()
    return {document}
  },
  head(){
    return {
      title: 'Home',
    }
  }
}
</script>

<style scoped>

</style>
