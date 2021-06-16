<template>
  <div style='position: relative' class=' py-5 px-5 bg-white my-2 mx-3 rounded-md shadow-md'>
    <a :href='determineLink()' class='stretched-link font-bold text-lg'>{{result.title}}</a>
    <h3 class='text-gray-500' v-if='result.description'>{{result.description}}</h3>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props:['result'],
  methods:{
    determineLink(){
      const {dir, slug} = this.result;
      const segments = dir.split('/');
      segments.shift();
      switch (segments[0]) {
        case 'courses':
          segments[0] = '/learn'
          return segments.join('/');
        case 'home':
          segments[0] = '';
          segments.push(slug)
          return segments.join('/')
        default:
          return segments[0]
      }
    }
  }
}
</script>

<style scoped>

</style>
