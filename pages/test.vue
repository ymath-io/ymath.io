<template>
  <div>
    <header-banner>Practice Problem</header-banner>
    <container>
      <client-only>
        <practice-problem :hints='doc.hints' :answers='doc.answers' :solutions='doc.solutions'
                          :question='doc.problemStatement' />

      </client-only>

    </container>
    <header-banner>
      Practice Problem Correct
    </header-banner>
    <container>
      <client-only>
        <practice-problem  :hints='doc.hints' :solutions='doc.solutions'
                          :question='doc.problemStatement' />

      </client-only>
    </container>
    <header-banner>
      Practice Problem Wrapper
    </header-banner>
    <container>
      <client-only>
        <practice-problem-wrapper>

        </practice-problem-wrapper>
      </client-only>
    </container>
  </div>


</template>
<script>


export default {
  name: 'test',
  async asyncData({ $content }) {
    const doc = await $content('courses/calculus/limits/introduction/problems/1').fetch()
    return { doc }
  },

  data: () => ({
    formula: 'f(x)=2x'
  })
}
</script>

<style scoped>

</style>
