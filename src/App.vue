<script setup lang="ts">
import Hero from './components/Hero.vue';
import learn from './components/learn.vue'
import src from './assets/SpinX_Logo.png'

</script>

<template>
  <!--<Hero /> -->
  <learn />
  <section>
    <div class="box"><img :src="src" alt="" srcset="">
  </div>
  </section>
</template>
<style>
.box {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}
</style>