<template>
  <svg class="x">
    <symbol id="lf">
      <path stroke-width="2px" d="M500 10 q80 80, 0 160 q-80 -80, 0 -160 Z" />
    </symbol>
    <use xlink:href="#lf" class="lf" v-for="n in 40" :key="n"></use>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100vw;
  height: 400px;
}

.x {
  animation: move 1.8s ease both;
}

@for $i from 1 through 40 {
  .lf:nth-of-type(#{$i}) {
    // stroke: hsl($i * 1, 100%, 50%);
    fill: hsl($i * 5, 90%, 50%);
    fill-opacity: #{0.5 - $i * 0.01};
    stroke-opacity: #{$i * 0.02};
    animation: leaf-#{$i} #{$i * 0.05}s ease both;
  }
}

@for $i from 1 through 40 {
  @keyframes leaf-#{$i} {
    from {
      transform: rotate(0);
      transform-origin: 490px 100px;
    }

    to {
      transform: rotate(#{10 * $i}deg);
      transform-origin: 490px 180px;
    }
  }
}

@keyframes move {
  to {
    transform: translate(40px, 0px);
  }
}
</style>
