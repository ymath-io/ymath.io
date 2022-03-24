<template>
  <header class='bg-transparent border-b-2 dark:border-gray-800 border-gray-200'>
    <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8' :class='{"grid gap-12 grid-cols-4":shift}'>
      <div v-if='shift' class='col-span-1 '>
        <slot name='thumbnail'></slot>
      </div>
      <div class='col-span-3 align-baseline items-baseline ' :class='{"grid grid-rows-2":subtitle}'>
        <span class='text-3xl   dark:text-gray-100 font-bold text-gray-900' :class='{"row-span-1":subtitle}'>
          <slot/>
        </span>
        <h3 v-if='subtitle' class='row-span-1 mt-auto text-md dark:text-gray-400 font-normal text-gray-90'>
          <slot name='subtitle'></slot>
        </h3>
      </div>


    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{'shift':Boolean, subtitle:Boolean}
}
</script>

<style scoped>

</style>
