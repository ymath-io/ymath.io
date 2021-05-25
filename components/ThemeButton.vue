<template>
  <div @click='toggle' class='h-6 -mt-2 mx-2 cursor-pointer w-6'>
    <svg class="hex-icon-sun">
      <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1"></path>
      <circle cx="21" cy="25" r="7"></circle>
      <circle cx="21" cy="25" r="12"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ThemeButton',
  methods: {
    toggle: function(){
      localStorage.darkMode = document.body.parentElement.classList.toggle('dark');
    }
  },
  mounted(){
    const isDark = localStorage.darkMode==='true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.body.parentElement.classList.toggle('dark', isDark )
  }
}
</script>

<style scoped>
[class^="hex-icon"] {
  width: 42px;
  height: 50px;
  margin: 0 10px;
  display: inline-block;
  -webkit-transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

[class^="hex-icon"] svg {
  width: 100%;
  height: 100%;
  display: block;
}

.hex-icon-sun path:first-of-type {
  fill: transparent;
}

.hex-icon-sun circle {
  stroke: #757579;
  stroke-width: 2px;
  fill: none;
}

.hex-icon-sun circle:last-of-type {
  stroke-width: 2px;
  stroke-dasharray: 2,7.4;
}
</style>
