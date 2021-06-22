<template>
  <container>
    <div v-if='paper'>
      <h1 class='mb-3'><span class='text-green-400 font-semibold text-2xl'>{{ paper.title }}</span> <span
        class='text-xl dark:text-gray-500 text-gray-700'> written by {{ paper.author }}</span></h1>
      <embed class='w-full' style='height: 38rem' :src='paper.embed.link' />
      <a class='text-green-400 font-bold my-2 block' target='_blank' :href='paper.download'>Download
        {{ paper.embed.type }}</a>
    </div>

  </container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { paper } = params
    const datums = await $content('library', paper).fetch()
    return { paper: datums }
  },
  head(){
    return {
      title: this.paper.title
    }
  }
}
</script>

<style scoped>

</style>
