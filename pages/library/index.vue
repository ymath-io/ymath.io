<template>
  <div>
    <container v-if='papers'>
      <div class='bg-white p-3 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg my-4 shadow-md hover:shadow-2xl transition duration-200 relative' :key='paper.slug' v-for='paper of papers'>
        <a :href='`/library/${paper.slug}`' class='font-bold text-gray-800 dark:text-gray-300 stretched-link text-lg'>{{paper.title}}</a>
        <p><span class='text-green-400 font-semibold'>{{paper.author}}</span> <span class='dark:text-darkText'>on {{$moment(paper.date).format('MMMM do YYYY')}}</span></p>
        <p class='text-gray-500 dark:text-gray-400'>
          {{paper.description}}
        </p>
      </div>
    </container>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData({$content}){
    let papers = [];
    const dapapres = await $content('library').fetch();
    papers.push(...dapapres);
    papers = papers.sort(function(a, b) {
      return Date.parse(b.date) - Date.parse(a.date);
    });papers.forEach(e=>{e.date = Date.parse(e.date)});
    return {papers}
  },
}
</script>

<style scoped>

</style>
