<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const emojis = "💖";
</script>

<template>
  <!-- HERO WRAPPER -->
  <section class="relative w-full h-screen bg-gray-100">

    <!-- NAVBAR -->
    <nav class="absolute top-0 left-0 w-full z-50">
      
      <div class="flex items-center justify-between px-6 py-4">

        <!-- LOGO -->
        <div class="text-xl font-bold">
          Spinx
        </div>

        <!-- DESKTOP LINKS -->
        <div class="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Workshops</a>
          <a href="#">Contact</a>
        </div>

        <!-- MOBILE BTN -->
        <button
          class="md:hidden"
          @click="open = !open"
        >
          ☰
        </button>

      </div>

      <!-- MOBILE MENU -->
      <div
        v-if="open"
        class="md:hidden px-6 pb-4 flex flex-col gap-2 bg-white"
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Workshops</a>
        <a href="#">Contact</a>
      </div>

    </nav>

    <!-- HERO CONTENT -->
    <div class="flex flex-col items-center justify-center h-full text-center px-6">

      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Drone Innovation Starts Here {{ emojis }}
      </h1>

      <p class="text-gray-600 max-w-xl">
        Student-driven drone startup delivering workshops,
        research, and real-world aerial solutions.
      </p>

      <button class="mt-6 px-6 py-3 bg-black text-white rounded-xl">
        Explore More
      </button>

    </div>

  </section>
</template>
