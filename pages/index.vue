<template>
  <div>
    <div class='overflow-x-hidden'>
      <div :class="{'bg-green-400 bg-opacity-20':section.type==='bubble'}" v-for='section of [doc.sections[0]]' class='grid  my-5 py-24  grid-cols-3 '>
        <div class='col-span-2 pl-16  text-right pr-16 ml-32'>
          <h1 class='text-4xl  dark:text-darkText my-5 underline-green-500 font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl  dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
        <div class='hero-image flex col-span-1 mr-32'>
          <img  style='transform: scaleX(-1);' class='my-auto transform  mx-auto' src='/img/mascot/flying.png' />
        </div>
      </div>
      <div :class="{'bg-green-400 bg-opacity-20':section.type==='bubble'}" v-for='section of [doc.sections[1]]' style='border-top-right-radius: 50vw 15vw;border-top-left-radius: 50vw 15vw;border-bottom-left-radius: 50vw 15vw;border-bottom-right-radius: 50vw 15vw' class='grid -mx-5 my-5 py-52 grid-cols-3 '>
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
      <div :class="{'bg-green-400 bg-opacity-20':section.type==='bubble'}" v-for='section of [doc.sections[2]]' class='grid  my-5 py-24  grid-cols-3 '>

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
      <div :class="{'bg-green-400 bg-opacity-20 -mx-5 my-5 py-52':section.type==='bubble'}" v-for='section of [doc.sections[3]]' class='grid  my-5   grid-cols-3 ' style='border-top-right-radius: 50vw 15vw;border-top-left-radius: 50vw 15vw;border-bottom-left-radius: 50vw 15vw;border-bottom-right-radius: 50vw 15vw'   >
        <div class='hero-image  col-span-1 ml-32'>

        </div>
        <div class='col-span-2 pl-16  text-center pr-16 mr-32'>
          <h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5 " v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
      </div>
      <div :class="{'bg-green-400 bg-opacity-20':section.type==='bubble'}" v-for='section of [doc.sections[4]]' class='grid  my-5   grid-cols-3 '>
        <div class='hero-image border border-dashed border-red-800 col-span-1 ml-32'>

        </div>
        <div class='col-span-2 pl-16  text-right pr-16 mr-32 border border-dashed border-yellow-900'>
          <h1 class='text-4xl my-5 dark:text-darkText font-bold font-sans'>{{section.title}}</h1>
          <p class='text-xl dark:text-darkText leading-loose my-3'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a class="bg-green-500  text-white  cursor-pointer hover:bg-green-500 font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg" :href='button.href' v-for='button of [section.button]'>
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
