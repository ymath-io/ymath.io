<template>
  <div class='bg-gray-100 dark:bg-gray-900 '>
    <nav class='bg-gray-100 dark:bg-gray-900 sticky top-0 z-20 bg-opacity-80 backdrop-filter backdrop-blur-sm'>
      <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='flex items-center justify-between h-16'>
          <div class='flex items-center grid gap-12 grid-cols-4'>
            <div class='flex-shrink-0 col-span-1'>
              <a href='/'><img class='h-8 w-8 ml-auto  rounded-lg shadow-lg' src='https://ymath.io/favicon.png' alt='YMath Logo' /></a>
            </div>

            <div class='hidden md:block col-span-3'>
              <div class=' flex items-baseline space-x-4'>
                <span v-for='(item, itemIdx) in navigation' :key='itemIdx'>

                    <!-- Current: "bg-gray-300 text-current", Default: "text-gray-700 hover:bg-gray-200 hover:text-current" -->
                    <nuxt-link v-if='!item.dev || dev' :exact='item.exact'
                               active-class='titlebar-active transform translate-y-6' :to='item.to'
                               class='titlebar'>{{ item.name }}
                    </nuxt-link>

                </span>
              </div>
            </div>
          </div>

          <div class='ml-auto justify-end flex'>
            <form v-if='dev' role='search'
                  action='/search'
                  method='get'
            >
              <input
                required
                aria-label='Search through site content'
                type='search'
                name='q'
                @submit='search' class='bg-gray-200 dark:bg-gray-900 border-b-2 dark:border-gray-800 px-2 ml-auto justify-end p-1 focus-within:ring-0 rounded-md' placeholder='Search'>
            </form>
<theme-button/>
          </div>
          <div class='-mr-2 ml-auto justify-end flex md:hidden'>
            <!-- Mobile menu button -->
            <button @click='expandMenu=!expandMenu'
                    class='bg-gray-100 dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-800 focus:ring-white'>
              <span class='sr-only'>Open main menu</span>
              <m-icon class='block h-6 w-6' icon='menu' v-if='!expandMenu'></m-icon>
              <m-icon class='block h-6 w-6' icon='close' v-else></m-icon>
            </button>
          </div>
        </div>
      </div>

      <div v-if='expandMenu' class='md:hidden'>
        <div class='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
         <span v-for='(item, itemIdx) in navigation' :key='itemIdx'>
                    <!-- Current: "bg-gray-300 text-current", Default: "text-gray-700 hover:bg-gray-200 hover:text-current" -->
                    <nuxt-link v-if='!item.dev || dev' :exact='item.exact' active-class='titlebar-active' :to='item.to'
                               class='titlebar block my-2'>{{ item.name
                      }}</nuxt-link>
                </span>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'

const navigation = [{ name: 'Home', to: '/', exact: true }, { name: 'Learn', to: '/learn' }, {
  name: 'Practice',
  to: '/practice'
}, { name: 'About', to: '/about' }, { name: 'FAQ', to: '/faq' }, { name: 'Beta Features', dev: true, to: '/test' }]
const profile = ['Profile', 'Settings', 'Sign out']
export default Vue.extend({
  components: {},
  data: () => ({
    navigation, profile, open: false, expandMenu: false
  }),
  methods: {
    search(searchEvent) {

    }
  },
  computed: {
    dev() {
      return process.env.NODE_ENV !== 'production'
    }
  }
})
</script>
<style>

</style>
