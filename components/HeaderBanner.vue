<template>
  <header class='bg-transparent border-b-2 dark:border-gray-800 border-gray-200'>
    <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8' :class='{"grid gap-12 grid-cols-4":shift}'>
      <div v-if='shift' class='col-span-1'></div>
      <h1 class='text-3xl dark:text-gray-100 font-bold text-gray-900'>
        <slot/>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{'shift':Boolean}
}
</script>

<style scoped>

</style>
