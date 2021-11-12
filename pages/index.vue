<template>
  <div>

    <div class='overflow-x-hidden mt-10'>
      <div :key="sidx" :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='(section, sidx) of [doc.sections[0]]' :style='section.type==="bubble"?bubbleStyle:{}'   >
        <div class='hero-image md:hidden col-span-1 md:mr-32'>
          <img  style='transform: scaleX(-1) rotate(-20deg);'  class='md:my-auto w-1/2 transform  mx-auto' src='/img/mascot/flying.png'  alt='Flying Y'/>
        </div>
        <div :class='openTextClass'>
          <h1 class='block text-green-400 font-bold text-4xl md:text-7xl tracking-wide'>Why Math?</h1>
          <h1 :class='titleClass'>{{section.title}}</h1>
          <p :class='bodyClass'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a :class="buttonClass" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
        <div class='hero-image md:flex hidden col-span-1 md:mr-32'>
          <img  style='transform: scaleX(-1) rotate(-10deg);' class='md:my-auto transform  md:mx-auto' src='/img/mascot/flying.png'  alt='Flying Y'/>
        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[1]]' :style='section.type==="bubble"?bubbleStyle:{}' >
        <div class='hero-image md:flex col-span-1 md:ml-32'>
          <img class='md:my-auto w-1/2 md:w-auto transform  mx-auto' src='/img/mascot/writing.png' />
        </div>
        <div class='md:col-span-2 md:pl-16  text-center md:pr-16 md:mr-32'>
          <h1 :class='titleClass'>{{section.title}}</h1>
          <p :class='bodyClass'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a :class="buttonClass" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>

      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[2]]' :style='section.type==="bubble"?bubbleStyle:{}'>
        <div class='hero-image md:hidden w-1/3 mx-auto my-2'>
          <img class='my-auto transform bg-green-400 bg-opacity-20 p-5 rounded-full mx-auto' src='/img/mascot/notebook.png' />
        </div>
        <div :class='openTextClass'>
          <h1 :class='titleClass'>{{section.title}}</h1>
          <p :class='bodyClass'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a :class="buttonClass" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>
        </div>
        <div class='hero-image hidden  md:flex col-span-1 mr-32'>
          <img class='my-auto transform bg-green-400 bg-opacity-20 p-5 rounded-full mx-auto' src='/img/mascot/notebook.png' />
        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[3]]' :style='section.type==="bubble"?bubbleStyle:{}'  >
        <div class='hero-image w-1/3 md:w-auto mx-auto md:col-span-1 md:ml-32'>
            <div class='relative'>
              <img style='z-index:0' class='absolute transform scale-125 top-0' src='/img/mascot/scenes/code-wall.png'/>
              <img style='z-index: 1' class='relative transform scale-75' src='/img/mascot/front-view.png'/>

            </div>
        </div>
        <div class='col-span-2 md:pl-16 md:flex text-center md:pr-16 md:mr-32'>

          <div class='my-auto'><h1 :class='titleClass'>{{section.title}}</h1>
          <p :class='bodyClass'>{{section.body}}</p>
          <div class="my-5 " v-if='section.button'>
            <a :class="buttonClass" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div></div>

        </div>
      </div>
      <div :class="[section.type==='bubble'? bubbleClasses:'', sectionClasses]" v-for='section of [doc.sections[4]]' >
        <div class='hero-image md:hidden w-1/3 mx-auto'>
          <div class='relative'>
            <img style='z-index:0' class='absolute transform scale-125 top-0' src='/img/mascot/scenes/speech.png'/>
            <img style='z-index: 1' class='relative transform scale-75' src='/img/mascot/side-view.png'/>

          </div>
        </div>
        <div :class='openTextClass'>
          <h1 :class='titleClass'>{{section.title}}</h1>
          <p :class='bodyClass'>{{section.body}}</p>
          <div class="my-5" v-if='section.button'>
            <a :class="buttonClass" :href='button.href' v-for='button of [section.button]'>
              {{button.title}}
            </a>
          </div>

        </div>
        <div class='hero-image col-span-1 hidden md:block mr-32'>
          <div class='relative'>
            <img style='z-index:0' class='absolute transform  top-0' src='/img/mascot/scenes/speech.png'/>
            <img style='z-index: 1' class='relative transform ' src='/img/mascot/side-view.png'/>

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
    bubbleClasses:'bg-green-400 bg-opacity-20 px-2 -mx-2 md:px-12  md:-mx-12 md:py-48 py-12',
    sectionClasses:'md:grid gap-4 my-5 py-8 md:py-24 grid-cols-3 ',
    openTextClass:'md:col-span-2 md:pl-16 mx-5 text-center md:text-right md:pr-16 md:ml-32',
    bodyClass:'md:text-xl mx-3 text-md dark:text-darkText md:leading-loose my-3',
    titleClass:'md:text-4xl text-2xl dark:text-darkText md:my-5 underline-green-500 font-bold font-sans',
    buttonClass:'bg-green-500 text-sm md:text-md text-white tracking-wide cursor-pointer hover:bg-green-500 font-semibold md:font-bold inline-flex py-2 px-3 rounded-lg  shadow-lg',
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
