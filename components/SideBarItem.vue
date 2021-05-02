<template>
  <div>
    <div style='position: relative'
         :class='{"ml-8 hover:ml-8":item.sub,  "bg-green-400 text-white shadow-primary-xl":item.active, "hover:shadow-2xl":!item.active}'
         class='p-3 my-2.5 transition-shadow transition-all ease-in-out  duration-500 bg-white mx-1 hover:mx-0  rounded-2xl shadow'>
      <a :href='item.to' class='stretched-link'>{{ item.title }}</a>
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
