<template>

  <button
    ref='butt'
    :class='[item.id]'
    class='dropdown bg-opacity-20  cursor-pointer  py-2 px-3 my-1 rounded-md dark:hover:bg-opacity-10 hover:bg-opacity-20 '>
    <span >{{item.title}} <m-icon icon='chevron-down'/> </span>
    <div class='dropdown-content '>
      <div @click='()=>{$emit(`input`, option.id);$refs.butt.blur()}' :key='option.id' v-for='option in items' :class='[value===option.id?`active`:``, `bg-`+option.color]'>{{option.title}}</div>
    </div>
  </button>

</template>

<script>
export default {
  name: 'ProgressSelector',
  props: {
    value: {
      default: 'not-started',
      type: String
    }
  },
  computed:{
    item(){
      return this.items.find(e=>e.id===this.value)
    }
  },
  data:()=>({
    items:[
      {
        id:'not-started',
        title:'Not Started',
        color:'blue-400',
      },
      {
        id:'in-progress',
        title:'In progress',
        color:'yellow-500',
      },
      {
        id:'completed',
        title:'Completed',
        color:'green-400',
      },
      {
        id:'skipped',
        title:'Skipped',
        color:'purple-500',
      }
    ]
  })
}
</script>

<style scoped>
.skipped {
  @apply bg-purple-500 text-purple-500;
}

.completed {
  @apply bg-green-400 text-green-400;
}

.in-progress {
  @apply bg-yellow-500 text-yellow-500;
}

.not-started {
  @apply bg-blue-400 text-blue-400;
}

.dropdown {
  @apply relative inline-block focus:outline-none;
}

div.dropdown-content div:not(.dropdown-content) {
  @apply py-2 px-3 my-2 rounded-lg  cursor-pointer;
}

div.dropdown-content div:not(.dropdown-content):not(.active) {
  @apply bg-opacity-0 hover:bg-opacity-10 hover:bg-gray-400;
}

div.dropdown-content div:not(.dropdown-content).active {
  @apply bg-opacity-10 hover:bg-opacity-20;
}


.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  @apply rounded-lg py-1 px-2 dark:bg-gray-800 dark:text-darkText left-0 mt-2 shadow-2xl;
  z-index: 1;
}

.dropdown:focus .dropdown-content {
  @apply block;
}
</style>
