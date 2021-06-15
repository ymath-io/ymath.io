<template>
  <header class='bg-transparent border-b-2 dark:border-gray-800 border-gray-200'>
    <div class=' py-6 px-4 sm:px-6 lg:px-8' :class='{"grid gap-12 grid-cols-4 ":shift,
     "grid grid-cols-4 gap-12":courseShift,
     "max-w-7xl mx-auto":!courseShift}'>
      <div v-if='shift||courseShift' class='col-span-1 '>
        <slot name='thumbnail'></slot>
      </div>
      <div class=' align-baseline items-baseline ' :class='{"grid grid-rows-2":subtitle,"col-span-3":!courseShift, "col-span-3":courseShift}'>
        <span v-if='category' class='uppercase font-semibold tracking-wide text-gray-500 text-sm'>
          <slot name='category'></slot>
        </span>
        <h1 class='text-3xl   dark:text-gray-100 font-bold text-gray-900' :class='{"row-span-1":subtitle}'>
          <slot/>
        </h1>
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
  props:{'shift':Boolean, courseShift:Boolean, category:Boolean, subtitle:Boolean}
}
</script>

<style scoped>

</style>
