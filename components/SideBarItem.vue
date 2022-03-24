<template>
  <div>
    <div style='position: relative'
         :class='{"ml-8 ":item.sub,  "bg-green-400 dark:bg-green-500 border-none font-bold  text-white shadow-primary-xl":item.active, "hover:shadow-2xl hover:bg-white dark:hover:bg-gray-800":!item.active}'
         class='px-3 py-2 my-2.5 transition-shadow ease-in-out hover:border-transparent  border-2 border-gray-200 dark:border-gray-800 dark:text-gray-200 duration-500   rounded-2xl '>
      <a :href='item.to' class='stretched-link'>{{ item.menuTitle || item.title }}</a>
    </div>
    <SideBarItem
      v-for='(child, childIdx) of item.children'
      :item='child'
      :key='childIdx'
    />
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    'active': Boolean, 'item': {
      type: Object, default: { title: 'Item.title', active: false, sub: false, children: [] }
    }, 'sub': Boolean
  }
}
</script>

<style scoped>

</style>
