<template>
  <svg preserveAspectRatio :height='size||100' viewBox='0 0 400 400'>
    <rect x="0" y="0" rx="60" ry="60" width="400" height="400"
          style="fill:#00ab33;stroke-width:5;opacity:1" />

    <g transform="translate(-22,0)">

      <text
        x="27%"
        y="65%"
        fill="white"
        font-size="300px"
        font-family="Lato">
        y
      </text>

      <text
        x="20.6%"
        y="73%"
        fill="white"
        font-size="75px"
        transform-box="fill-box" transform-origin="center"
        transform="rotate(-67)
   skewX(23.5)
    scale(1.06 1)"
        font-family="Lato">
        MATH
      </text>
    </g>
  </svg>
</template>
<script>
export default {
  name:'Logo',
  props:['size']
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
</style>
