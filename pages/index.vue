<template>
  <div>
    <div class='overflow-x-hidden'>
      <div>

      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[0]]' :style='section.type==="bubble"?bubbleStyle:{}'   >
        <div class='col-span-2 pl-16  text-right pr-16 ml-32'>
          <h1 class='block text-green-400 font-bold text-7xl tracking-wide'>Why Math?</h1>
          <h1 class='text-4xl  dark:text-darkText my-5 underline-green-500 font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl  dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
        <div class='hero-image flex col-span-1 mr-32'>
          <img  style='transform: scaleX(-1) rotate(-10deg);' class='my-auto transform  mx-auto' src='/img/mascot/flying.png' />
        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[1]]' :style='section.type==="bubble"?bubbleStyle:{}' >
        <div class='hero-image flex col-span-1 ml-32'>
          <img class='my-auto transform  mx-auto' src='/img/mascot/writing.png' />
        </div>
        <div class='col-span-2 pl-16  text-center pr-16 mr-32'>
          <h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl  dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>

      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[2]]' :style='section.type==="bubble"?bubbleStyle:{}'>

        <div class='col-span-2 pl-16  text-right pr-16 ml-32 '>
          <h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>
        </div>
        <div class='hero-image   flex col-span-1 mr-32'>
          <img class='my-auto transform bg-green-400 bg-opacity-20 p-5 rounded-full mx-auto' src='/img/mascot/notebook.png' />
        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[3]]' :style='section.type==="bubble"?bubbleStyle:{}'  >
        <div class='hero-image  col-span-1 ml-32'>
            <div class='relative'>
              <img style='z-index:0' class='absolute transform scale-125 top-0' src='/img/mascot/scenes/code-wall.png'/>
              <img style='z-index: 1' class='relative transform scale-75' src='/img/mascot/front-view.png'/>

            </div>
        </div>
        <div class='col-span-2 pl-16 flex text-center pr-16 mr-32'>

          <div class='my-auto'><h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5 " v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div></div>

        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[4]]' >

        <div class='col-span-2 px-16  text-right ml-32 '>
          <h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
        <div class='hero-image col-span-1 mr-32'>
          <div class='relative'>
            <img style='z-index:0' class='absolute transform scale-125 top-0' src='/img/mascot/scenes/speech.png'/>
            <img style='z-index: 1' class='relative transform scale-75' src='/img/mascot/side-view.png'/>

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
  data: () => ({
    bubbleClasses:'bg-green-400 bg-opacity-20 px-12  -mx-12 py-48',
    sectionClasses:'grid gap-4 my-5 py-24 grid-cols-3 ',
    bubbleStyle: {borderRadius:'50vw / 15vw'}
  }),
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
