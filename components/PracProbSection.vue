<template>
  <details @toggle='open=!open' :open='open' class=''>
    <summary class='block font-semibold cursor-pointer border-t-2 dark:border-gray-700 border-gray-100 dark:hover:bg-gray-700 hover:bg-gray-100 py-2 px-4'>
      <slot name='header'>
        Slots.header
      </slot>
      <m-icon class='text-lg' v-if='open' icon='chevron-up' />
      <m-icon class='text-lg' v-else icon='chevron-down' />
    </summary>
    <div class='mx-4 my-2'>
      <slot name='body'>
        Slots.body
      </slot>
    </div>


  </details>
</template>

<script>
export default {
  name: 'PracProbSection',
  data:()=>({
    open:false,
  })
}
</script>

<style scoped>

</style>
