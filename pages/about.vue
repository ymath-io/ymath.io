<template>
  <div>
    <header-banner> About </header-banner>

    <div class="sm:grid grid-cols-4 my-16">
      <div class="col-span-1 flex">
        <div
          class="
            sm:h-40
            w-full
            h-40
            animate-pulse
            sm:w-40
            ml-auto
            sm:mr-12
            bg-gray-300
            sm:rounded-full
          "
        ></div>
      </div>
      <div class="col-span-3 mt-4 mx-4">
        <h2
          class="
            text-4xl
            inline-block
            leading-normal
            tracking-tighter
            font-bold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-teal-500
            via-green-400
            to-lime-500
            mb-3
          "
        >
          {{ about.overview.title }}
        </h2>
        <p class="dark:text-darkText whitespace-pre-wrap text-gray-800">
          {{ about.overview.body }}
        </p>
      </div>
    </div>
    <div class="mb-16 lg:mx-48">
      <h2
        class="
          text-4xl
          inline-block
          leading-normal
          tracking-tighter
          font-bold
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-lightBlue-500
          via-indigo-500
          to-purple-500
          mb-3
        "
      >
        {{ about.meet.title }}
      </h2>
      <div
        :key="person.name"
        class="sm:grid grid-cols-4"
        v-for="(person, idx) of about.meet.people"
      >
      
      <div class="col-span-1 flex" v-if="idx % 2" >
        <div
          class="
            sm:h-40
            w-full
            h-40
            animate-pulse
            sm:w-40
            mx-auto
            sm:mr-12
            bg-gray-300
            sm:rounded-full
          "
        ></div>
      </div>
      <div class="col-span-3">

          <h3 class="font-bold tracking-tighter text-2xl">
            {{person.name}}
          </h3>
          <div > 
            {{bipsum}}
          </div>
      </div>
      <div class="col-span-1 flex" v-if="idx % 2  === 0" >
<div
          class="
            sm:h-40
            w-full
            h-40
            animate-pulse
            sm:w-40
            mx-auto
            sm:mr-12
            bg-gray-300
            sm:rounded-full
          "
        ></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  async asyncData({ $content }) {
    const about = await $content('home/about').fetch()
    return { about }
  },
  data:()=>({
    bipsum:'Bacon ipsum dolor amet labore commodo tenderloin filet mignon eu laborum sed porchetta enim nostrud venison consequat tongue. Doner chicken boudin, aliqua tail culpa ut aute short ribs chuck laborum chislic swine jerky adipisicing. Deserunt boudin lorem tongue, veniam bresaola ut tri-tip non dolore. Commodo non jowl, bresaola sint veniam nulla. Deserunt nostrud jerky tail culpa boudin. Consectetur anim id, biltong ipsum corned beef andouille tenderloin veniam et chicken. Pork chop ad officia meatloaf, ex tri-tip mollit chicken short ribs chuck drumstick tongue boudin.'
  })
}
</script>

<style scoped>
</style>
