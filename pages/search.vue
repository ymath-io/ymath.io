<template>
  <div>
    <header-banner>Search: {{q}}</header-banner>
    <container v-if='datums' class='grid md:grid-cols-4 mx-20'>
      <search-result :result='result' :key='resultIdx' v-for='(result, resultIdx) of datums'/>

    </container>
  </div>

</template>

<script>
export default {
  name: 'search',
  async asyncData({$content, query}){
    const {q} = query;
    const courseResults = await $content('courses', {deep:true}).search(q).where({type:{$ne:'problem'}}).sortBy('index').fetch();
    const homeResults = await $content('home', {deep:true}).search(q).where({type:{$ne:'problem'}}).sortBy('index').fetch();
    return {datums:[...courseResults,...homeResults ], q};

  }
}
</script>

<style scoped>

</style>
