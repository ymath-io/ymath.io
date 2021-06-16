<template>
  <div>

    <div class='max-w-7xl mt-8 mx-10 gap-8 py-6 px-4 sm:px-6 lg:px-8 mx-auto  lg:grid grid-cols-4'>



      <div class=' col-span-3 grid grid-rows-2'>
        <h1 class='text-5xl ml-2 row-span-1 mt-10 align-baseline my-10 font-bold'>
           <span class='mx-1 text-green-400 '>
             Math,
          </span>
          <span class=' dark:text-darkText text-gray-600'>
            explained  to be understood.
          </span>
        </h1>

        <div class='row-span-1 mt-9  gap-8'>
          <a href='/learn' class='dark:bg-green-400 bg-green-400  text-xl mx-3 font-semibold cursor-pointer dark:bg-opacity-40 hover:bg-opacity-80 py-4 px-6 rounded-lg text-white'>
            <span class='my-auto'>Find a course</span>
          </a>

          <a class='dark:bg-blue-400 bg-blue-500 bg-opacity-90 mx-3 text-xl  font-semibold cursor-pointer dark:bg-opacity-40 hover:bg-opacity-80 py-4 px-6 rounded-lg text-white'>
            Learn more</a>
        </div>
      </div>

      <div class='col-span-1 px-6 '>
        <div
          class='absolute z-0 h-52 w-52 rounded-2xl rotate-12 bg-green-200 bg-opacity-70 dark:bg-opacity-40 transform -translate-x-0'></div>
        <Logo class='z-20 absolute' size='200' />
      </div>



    </div>

    <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>


    </div>

  </div>
</template>

<script lang='js'>
import Vue from 'vue'


export default Vue.extend({
  components: {},
  data: () => ({})
})
</script>

<style>

</style>
