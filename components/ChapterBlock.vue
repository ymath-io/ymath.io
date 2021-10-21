<template>
  <div class="bg-white dark:bg-gray-800 py-3 px-4 rounded-xl shadow-xl my-3">
    <div class="grid grid-cols-4">
      <h1
        class="
          font-bold col-span-3
          bg-gradient-to-r bg-clip-text
          text-transparent
          from-green-400
          to-green-500 mr-5
          text-2xl
        "
      >
        {{ subject.title }}
      </h1>
      <progress-bar class="w-full col-span-1 ml-auto my-auto" :value="0.3" />
    </div>
    <hr class="mb-3 invisible" />
    <div class="grid grid-cols-4">
      <div class="grid lg:grid-cols-3 col-span-3">
        <a href="#" class="hover:underline text" :key="n" v-text="n.title" v-for="n of lessons"></a>
      </div>
      <div class="py-4 px-4 bg-gray-300 dark:bg-gray-700 rounded-lg bg-opacity-30">
        <h3 class="font-bold text mb-1">Up next for you:</h3>
        <div class="flex flex-row align-middle">
          <a href="#" class="flex text hover:underline align-middle items-center"
            >Lesson 7</a
          >
          <a
            :href="subject.to"
            class="
              bg-blue-400
              cursor-pointer
              ml-auto
              text-white
              py-1
              px-3
              rounded-xl
            "
            >Start</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['subject'],
  async fetch() {
    let fetchPath = this.subject.path.split('/')
    fetchPath.pop();
    fetchPath = fetchPath.join('/');
    this.lessons  = await this.$content(fetchPath, {deep: true}).where({type:'lesson'}).sortBy('index').fetch();
  },
  data:()=>({
      lessons:[]
  })
}
</script>

<style>
</style>