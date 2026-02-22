<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import hackathonImg from "../assets/gallery/hackathon.jpg";
import infinia2Img from "../assets/gallery/infinia2.0.jpg";
import coconImg from "../assets/gallery/cocon.jpg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: hackathonImg,
    alt: "TakeDown 2025",
    event: "Takedown - 24 Hour Hackathon",
    date: "February 2025",
  },
  {
    id: "2",
    src: "",
    alt: "Workshop on Drone Skills",
    event: "Workshop on Drone Skills",
    date: "March 2025",
  },
  {
    id: "3",
    src: infinia2Img,
    alt: "Sahrdaya Infinia 2.0",
    event: "Sahrdaya Infinia 2.0",
    date: "September 2025",
  },
  {
    id: "4",
    src: "",
    alt: "3-Day Internship at Universal Engineering College",
    event: "3-Day Internship at Universal Engineering College",
    date: "September 2025",
  },
  {
    id: "5",
    src: coconImg,
    alt: "COCON Hacking and Cyber Security Conference",
    event: "COCON Hacking and Cyber Security Conference",
    date: "October 2025",
  },
  {
    id: "6",
    src: "",
    alt: "Skill To Venture Training Program",
    event: "Skill To Venture Training Program",
    date: "November 2025",
  },
  {
    id: "7",
    src: "",
    alt: "Expert Interaction - Drone Service Technician",
    event: "Expert Interaction - Drone Service Technician",
    date: "November 2025",
  },
  {
    id: "8",
    src: "",
    alt: "Vidya Jyothi EMUPS Workshop",
    event: "Vidya Jyothi EMUPS Workshop",
    date: "January 2026",
  },
];

const isPaused = ref(false);
const carouselTrack = ref<HTMLElement | null>(null);
const currentIndex = ref(0);

const navigateCarousel = (direction: "next" | "prev") => {
  if (!carouselTrack.value) return;

  const itemWidth =
    carouselTrack.value.querySelector(".carousel-item")?.clientWidth || 0;
  const gap = 20;
  const scrollAmount = itemWidth + gap;

  if (direction === "next") {
    currentIndex.value++;
  } else {
    currentIndex.value--;
  }

  // Pause animation temporarily
  isPaused.value = true;

  // Apply transform
  const translateX = -(currentIndex.value * scrollAmount);
  carouselTrack.value.style.transform = `translateX(${translateX}px)`;
  carouselTrack.value.style.animation = "none";

  // Resume auto-scroll after 3 seconds
  setTimeout(() => {
    if (carouselTrack.value) {
      carouselTrack.value.style.animation = "";
      carouselTrack.value.style.transform = "";
      currentIndex.value = 0;
      isPaused.value = false;
    }
  }, 3000);
};

onMounted(() => {
  gsap.from(".gallery-title", {
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
  });

  gsap.from(".gallery-carousel", {
    scrollTrigger: {
      trigger: ".gallery-carousel",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    duration: 0.8,
  });
});
</script>

<template>
  <section
    id="gallery"
    class="gallery-section relative w-full overflow-hidden py-24"
  >
    <div class="gallery-bg absolute inset-0" />
    <div class="gallery-orbits absolute inset-0 pointer-events-none">
      <span class="orbit orbit-lg" />
      <span class="orbit orbit-md" />
      <span class="orbit orbit-sm" />
    </div>

    <div class="gallery-inner relative z-10">
      <div class="gallery-header text-center mb-16">
        <p class="gallery-kicker">Events & Moments</p>
        <h2 class="gallery-title">Capturing our community in action</h2>
        <p class="gallery-sub">
          Explore moments from our events, workshops, and community gatherings.
        </p>
      </div>

      <!-- Carousel -->
      <div class="gallery-carousel-wrapper">
        <div
          class="gallery-carousel"
          @mouseenter="isPaused = true"
          @mouseleave="isPaused = false"
        >
          <div
            ref="carouselTrack"
            class="carousel-track"
            :class="{ paused: isPaused }"
          >
            <div
              v-for="(image, index) in [
                ...galleryImages,
                ...galleryImages,
                ...galleryImages,
              ]"
              :key="`${image.id}-${index}`"
              class="carousel-item"
            >
              <div class="image-card">
                <img :src="image.src" :alt="image.alt" class="gallery-img" />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <h3 class="overlay-title">{{ image.event }}</h3>
                    <p class="overlay-date">{{ image.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="carousel-controls">
          <button
            class="carousel-nav carousel-nav-prev"
            @click="navigateCarousel('prev')"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            class="carousel-nav carousel-nav-next"
            @click="navigateCarousel('next')"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
}

.gallery-bg {
  background:
    radial-gradient(
      circle at 60% 30%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    radial-gradient(
      circle at 20% 70%,
      rgba(255, 255, 255, 0.05),
      transparent 60%
    );
  opacity: 0.7;
}

.gallery-orbits {
  display: grid;
  place-items: center;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}

.orbit-lg {
  width: 900px;
  height: 900px;
}

.orbit-md {
  width: 640px;
  height: 640px;
}

.orbit-sm {
  width: 420px;
  height: 420px;
}

.gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.gallery-header {
  margin-bottom: 56px;
}

.gallery-kicker {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
}

.gallery-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: 12px;
}

.gallery-sub {
  color: rgba(255, 255, 255, 0.7);
  max-width: 560px;
  margin: 0 auto;
  font-size: 0.95rem;
}

.gallery-carousel-wrapper {
  position: relative;
  margin-bottom: 24px;
}

.gallery-carousel {
  overflow: hidden;
  border-radius: 140px/36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.35);
}

.carousel-track {
  display: flex;
  gap: 20px;
  padding: 18px 22px;
  animation: scroll-left 40s linear infinite;
  width: max-content;
}

.carousel-track.paused {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

.carousel-item {
  flex: 0 0 clamp(240px, 32vw, 380px);
  min-width: 0;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.carousel-nav {
  width: 50px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-nav:hover {
  border-color: rgba(243, 242, 107, 0.8);
  color: #f3f26b;
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.image-card {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.35s ease;
}

.image-card:hover .gallery-img {
  filter: grayscale(0%);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.overlay-title {
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.overlay-date {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.08em;
}

@media (max-width: 1024px) {
  .carousel-nav {
    width: 44px;
    height: 44px;
    font-size: 1.3rem;
  }

  .orbit-md {
    width: 500px;
    height: 500px;
  }

  .orbit-sm {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 640px) {
  .carousel-nav {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }

  .overlay-title {
    font-size: 0.9rem;
  }

  .overlay-date {
    font-size: 0.7rem;
  }

  .orbit-lg {
    width: 520px;
    height: 520px;
  }

  .orbit-md {
    width: 380px;
    height: 380px;
  }

  .orbit-sm {
    width: 260px;
    height: 260px;
  }
}
</style>
