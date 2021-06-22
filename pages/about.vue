<template>
  <div>
    <header-banner>
      About
    </header-banner>
    <div class='no:sm:grid grid-cols-4 section my-16'>
      <div class='col-span-1 hidden flex'>
        <div class='
            sm:h-40
            w-full
            h-40
            sm:w-40
            mr-auto
            sm:rounded-full
          '>
        </div>
      </div>
      <div class='col-span-3 mt-4'>
        <h2 class='
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
          '>
          {{ about.overview.title }}
        </h2>
        <p class='dark:text-darkText whitespace-pre-wrap text-gray-800'>
          {{ about.overview.body }}
        </p>
      </div>
    </div>
    <div class='mb-16 section'>
      <h2 class='
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
        '>
      {{ about.meet.title }}
    </h2>
      <div v-for='(person, idx) of about.meet.people' class='sm:grid gap-4 mb-10 grid-cols-4'>
        <div class='col-span-1 w-full flex' :class='{"sm:hidden":idx%2 === 0}'>
          <img :src='person.photo'
               class='

            object-contain
            sm:w-40
            sm:h-40
            max-w-full
            max-h-full
            mr-auto
            sm:rounded-full
          '>
        </div>
        <div class='col-span-3 mx-8 my-4 sm:my-0 md:mx-0 flex'>
          <div class='my-auto'><h3 class='font-bold text-black dark:text-darkText tracking-wide text-2xl'>
            {{ person.name }}
          </h3> <small class='text-black dark:text-white dark:text-opacity-60 text-base text-opacity-50'>
            {{ person.position }}
          </small>
            <hr class=' border-gray-300 mb-2'>
            <div class='text-black dark:text-darkText'>
              {{ person.about }}
            </div>
          </div>
        </div>

        <div v-if='idx % 2 === 0' class='col-span-1 hidden  sm:flex'>
          <div class='
            sm:h-40
            w-full
            h-40
            sm:w-40
            ml-auto
            sm:rounded-full
            bg-cover bg-center
          ' :style="`background-image: url('${person.photo}');`"></div>
        </div>
      </div>
    </div>
    <div class='mb-16 section'>
      <h2 class='
          text-4xl
          inline-block
          leading-normal
          tracking-tight
          font-bold
          text-transparent
          bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500
          mb-3
        '>
        {{ about.contributors.title }}
      </h2>
      <div v-show='false' class='flex flex-wrap flex-row'>
        <div :key='n' v-for='(cont, n) of about.contributors.people' class='w-20 h-24  sm:w-40 sm:h-48 flex flex-col '>
        <img class=' object-cover flex-grow' :src='cont.photo' :alt='cont.name'/>
          <div class='py-3 bg-gray-200 px-3'>{{cont.name}}</div>
        </div>
      </div>
      <div class='prose dark:prose-dark'>
        <ul>
          <li :key='n' v-for='(cont, n) of about.contributors.people'>{{cont.name}}</li>
        </ul>
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
  }
}
</script>

<style scoped>
.section {
  @apply md:mx-12 lg:mx-32 xl:mx-48 ;
}
.section > h2 {
  @apply mx-12 sm:mx-0;
}
</style>
