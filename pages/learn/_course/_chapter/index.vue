<template>
<div>
  <nuxt-content :document='document'></nuxt-content>
</div>
</template>

<script>
export default {
  name: 'index',
  async asyncData({$content, params}){
    const [document] = await $content('courses', params.course, params.chapter).fetch()
    return {document}
  }
}
</script>

<style scoped>

</style>
