<template>
  <div>
    <div v-if='error.statusCode === 404'>
      <header-banner>Oops!</header-banner>
      <container  class='prose dark:prose-dark'>
        The page you are trying to access does not exist. Please use the menu to navigate to one that does.
      </container>
    </div>
    <div v-else>
      <header-banner>Error: {{error.statusCode}}</header-banner>
      <container >
        {{error.message}}
      </container>
    </div>

  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>

</style>
