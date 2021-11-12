<template>
  <div class="border-b-2 dark:border-gray-800 border-gray-200">
    <div
      @click="open = !open"
      style="position: relative"
      class="
        px-3
        py-2
        sidebar-item
        font-semibold
        cursor-pointer
        flex flex-row
        focus:outline-none
        w-full
        flex
        dark:text-gray-200
        duration-500
        rounded-0
      "
    >
      <a>{{ item.title }}</a>
      <m-icon
        v-if="item.children"
        class="transform ml-auto mr-1 duration-300 ease-in-out transition-transform"
        :class="[open ? 'rotate-0' : '-rotate-90']"
        icon="chevron-down"
      />
    </div>
    <div
      class="
        duration-500
        dark:text-darkText
        overflow-hidden
        ease-in-out
        transition-max-height
      "
      :class="{ 'max-h-0 ': !open, 'max-h-screen': open }"
    >
      <div
        class="py-2 pr-3 pl-14 relative sidebar-subitem"
        :key="idx+''+child.progress"
        :class="child.active?'active':child.progress"
        v-for="(child, idx) of item.children"
      >
        <a class="stretched-link" :href="child.to">{{ child.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    active: Boolean,
    item: {
      type: Object,
      default: { title: 'Item.title', active: false, sub: false, children: [] },
    },
    sub: Boolean,
  },
  data: () => ({
    open: true,
  }),
  mounted() {
    this.fetchCompletion();
    let v = this;
    window.addEventListener('storage', ()=>{
      v.fetchCompletion();
    });
    window.addEventListener('completionChange', ()=>{
      v.fetchCompletion();
    })
  },
  methods: {
    fetchCompletion() {
      for (const child of this.item.children) {
        let path = child.path.split('/')
        path.shift()
        path.shift()
        path.pop()
        path = path.join('/')
        path;
        child.progress =
          localStorage.getItem(`progress:${path}`) || 'not-started'
      }
    },
  },
  watch:{
    item:{
      handler(){
        console.log(this.item.children);
        this.fetchCompletion();
      },
      deep: true,

    }
  }
}
</script>

<style scoped>
.sidebar-subitem::before {
  content: '';
  position: absolute;
  width: 2px;
  display: block;
  left: 27px;
  top: 0px;
  bottom: 0px;
  @apply bg-gray-300 dark:bg-gray-700;
}

.sidebar-subitem:first-of-type::before {
  top: 22px;
}
.sidebar-subitem:last-of-type::before {
  bottom: calc(100% - 22px);
}

.sidebar-subitem::after {
  border-radius: 100%;
  @apply bg-gray-300 dark:bg-gray-700 absolute;
  content: '';
  left: 24px;
  top: 18px;
  height: 8px;
  width: 8px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}
.sidebar-subitem, .sidebar-item {
  @apply hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-opacity-70 dark:hover:bg-opacity-70;
}

.sidebar-subitem.skipped::before {
  @apply bg-purple-500;
}

.sidebar-subitem.skipped::after {
  @apply bg-purple-500;
}

.sidebar-subitem.active::before {
  @apply bg-green-600;
}

.sidebar-subitem.active::after {
  @apply bg-green-600;
}

.sidebar-subitem.active {
  @apply text-green-500 bg-green-400 bg-opacity-10 ;
}

.sidebar-subitem.in-progress::before {
  @apply bg-yellow-400;
}

.sidebar-subitem.in-progress::after {
  @apply bg-yellow-400;
}

.sidebar-subitem.completed::before {
  @apply bg-emerald-400;
}

.sidebar-subitem.completed::after {
  @apply bg-emerald-400;
}
</style>
