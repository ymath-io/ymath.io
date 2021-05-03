<template>
  <div class='bg-gray-100 dark:bg-gray-900 ' style='min-height: 100vh'>
    <nav class='bg-gray-100 dark:bg-gray-900 sticky top-0 z-20 bg-opacity-80 backdrop-filter backdrop-blur-sm'>
      <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='flex items-center justify-between h-16'>
          <div class='flex items-center grid gap-12 grid-cols-4'>
            <div class='flex-shrink-0 col-span-1'>
              <img class='h-8 w-8 ml-auto  rounded-lg shadow-lg' src='https://ymath.io/favicon.png' alt='YMath Logo' />
            </div>

            <div class='hidden md:block col-span-3'>
              <div class=' flex items-baseline space-x-4'>
                <span v-for='(item, itemIdx) in navigation' :key='itemIdx'>

                    <!-- Current: "bg-gray-300 text-current", Default: "text-gray-700 hover:bg-gray-200 hover:text-current" -->
                    <nuxt-link :exact='item.exact' active-class='titlebar-active transform translate-y-6' :to='item.to'
                               class='titlebar'>{{ item.name }}
                    </nuxt-link>

                </span>
              </div>
            </div>
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
                    <nuxt-link :exact='item.exact' active-class='titlebar-active' :to='item.to'
                               class='titlebar block my-2'>{{ item.name
                      }}</nuxt-link>


                </span>
        </div>
        <div v-if='false' class='pt-4 pb-3 border-t border-gray-200 dark:border-gray-700'>
          <div class='flex items-center px-5'>
            <div class='flex-shrink-0'>
              <img class='h-10 w-10 rounded-full'
                   src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                   alt='' />
            </div>
            <div class='ml-3'>
              <div class='text-base font-medium leading-none text-current'>Tom Cook</div>
              <div class='text-sm font-medium leading-none text-gray-400'>tom@example.com</div>
            </div>
            <button
              class='ml-auto bg-gray-100 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-current focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
              <span class='sr-only'>View notifications</span>
              <m-icon icon='bell' />
            </button>
          </div>
          <div class='mt-3 px-2 space-y-1'>
            <a v-for='item in profile' :key='item' href='#'
               class='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-current hover:bg-gray-200'>{{ item
              }}</a>
          </div>
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
}, { name: 'About', to: '/about' }, { name: 'FAQ', to: '/faq' }]
const profile = ['Profile', 'Settings', 'Sign out']
export default Vue.extend({
  components: {},
  data: () => ({
    navigation, profile, open: false, expandMenu: false
  })
})
</script>
<style>

</style>
