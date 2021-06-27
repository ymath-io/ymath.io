<template>
  <div>
    <div class=''>
      <div :class="{'bg-green-400 bg-opacity-20':section.type==='bubble'}" v-for='section of doc.sections' class='grid  my-5   grid-cols-3 '>
        <div class='hero-image border border-dashed border-red-800 col-span-1 ml-32'>

        </div>
        <div class='col-span-2 pl-16  text-right pr-16 mr-32 border border-dashed border-yellow-900'>
          <h1 class='text-4xl my-5  font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-400  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang='js'>
import Vue from 'vue'


export default Vue.extend({
  components: {},
  data: () => ({}),
  async asyncData({ $content }) {
    const doc = await $content('home/index').fetch();
    return {doc}
  },
  head: {
    title: 'YMath.io - A New Way to Learn Math',
    titleTemplate: null
  }
})
</script>

<style>

</style>
