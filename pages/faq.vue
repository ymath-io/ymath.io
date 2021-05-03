<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'faq',
  async asyncData({$content}){
    const [document] = await $content('home', 'faq').fetch()
    return {
      document
    }
  }
}
</script>

<style scoped>

</style>
