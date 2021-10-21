<template>
  <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
    <div class="w-full h-full bg-gray-200 dark:bg-gray-700 absolute"></div>
    <div class="h-full bg-green-500 absolute" :style="`width:${value*100}%`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props:{
    value:{
      default:0.3,type:Number
    }
  }
}
</script>

<style scoped>

</style>
