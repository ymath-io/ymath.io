<template>
  <div v-if='fetched'>
    <header-banner shift>
      {{ document.title }}
    </header-banner>
    <main
      class='max-w-7xl h-full sm:grid gap-12 grid-cols-4 mx-auto pt-6 pb-10 px-4 sm:px-6 md:px-7 lg:px-8'>
      <div class='col-span-1'>
        <ul class='prose dark:prose-dark mb-5'>
          <li
            v-for="link of document.toc"
            :key="link.id"
            :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>

      </div>
      <div class='col-span-3'>
        <nuxt-content :document='document' />
      </div>

    </main>

  </div>
</template>

<script>
export default {
  name: 'faq',
  async asyncData({ $content }) {
    const document = await $content('home', 'faq').fetch()
    return {
      document,
      fetched: true
    }
  }
}
</script>

<style >
h2::before {
  display: block;
  content: " ";
  margin-top: -70px;
  height: 70px;
  visibility: hidden;
  pointer-events: none;
}
</style>
