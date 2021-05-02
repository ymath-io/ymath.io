<template>
<div>
  <nuxt-content :document='document'/>
</div>
</template>

<script>
export default {
  async asyncData({$content, params}){
    const [document] = await $content('courses', params.course, params.chapter, params.lesson).fetch();
    return {
      document
    }
  }
}
</script>

<style scoped>

</style>
