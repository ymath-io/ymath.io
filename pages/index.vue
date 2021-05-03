<template>
<div >
  <header-banner>
    YMath.io
  </header-banner>
  <main
    class='max-w-7xl dark:prose-dark prose grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto py-6 xs:px-3 xs:mx-5 sm:px-6 md:px-7 lg:px-8'>
    This part of YMath is still under development!
  </main>
</div>
</template>

<script lang="js">
import Vue from 'vue'


export default Vue.extend({
  components: {

  },
  data:()=>({

  }),
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
})
</script>

<style>

</style>
