<template>
  <div class=' border-b-2 dark:border-gray-800 border-gray-200'>
    <div @click='open=!open' style='position: relative'
         class='px-3 py-2  cursor-pointer flex flex-row focus:outline-none w-full dark:text-gray-200 duration-500 rounded-0 '>
      <a >{{ item.title }}</a>
      <m-icon v-if='item.children' class='transform duration-500 ease-in-out transition-transform' :class="[open?'rotate-0':'-rotate-90']" icon='chevron-down'/>
    </div>
    <div class=' duration-500 overflow-hidden ease-in-out transition-max-height' :class="{'max-h-0 ':!open, 'max-h-screen':open}">
      <div  class='py-2 pr-3 pl-6' :key='idx' v-for='(child, idx) of item.children'>
        <a :href='child.to'>{{child.title}}</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    'active': Boolean, 'item': {
      type: Object, default: { title: 'Item.title', active: false, sub: false, children: [] }
    }, 'sub': Boolean
  },
  data:()=>({
    open: true
  })
}
</script>

<style scoped>

</style>
