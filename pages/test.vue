<template>
  <div>
    <header-banner>Practice Problems</header-banner>
    <container>
      <client-only>
        <practice-problem/>
      </client-only>
    </container>
  </div>


</template>

<script>
export default {
  name: 'test',
  data:()=>({
    formula:'f(x)=2x'
  })
}
</script>

<style scoped>

</style>
