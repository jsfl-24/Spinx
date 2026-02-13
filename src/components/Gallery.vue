<script setup lang="ts">
import { ref, computed } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    alt: "Conference Event 2025",
    event: "Annual Conference",
    date: "March 2025",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=500&fit=crop",
    alt: "Community Meetup",
    event: "Community Meetup",
    date: "February 2025",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    alt: "Tech Summit",
    event: "Tech Summit",
    date: "January 2025",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    alt: "Hackathon 2025",
    event: "Hackathon",
    date: "December 2024",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    alt: "Networking Session",
    event: "Networking Session",
    date: "November 2024",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&h=500&fit=crop",
    alt: "Workshop",
    event: "Developer Workshop",
    date: "October 2024",
  },
];

const currentIndex = ref(0);
const itemsPerView = ref(3);

const updateItemsPerView = () => {
  if (window.innerWidth < 640) {
    itemsPerView.value = 1;
  } else if (window.innerWidth < 1024) {
    itemsPerView.value = 2;
  } else {
    itemsPerView.value = 3;
  }
};

const visibleImages = computed(() => {
  const end = currentIndex.value + itemsPerView.value;
  return galleryImages.slice(currentIndex.value, end);
});

const canGoNext = computed(() => {
  return currentIndex.value + itemsPerView.value < galleryImages.length;
});

const canGoPrev = computed(() => {
  return currentIndex.value > 0;
});

const nextSlide = () => {
  if (canGoNext.value) {
    currentIndex.value += 1;
  }
};

const prevSlide = () => {
  if (canGoPrev.value) {
    currentIndex.value -= 1;
  }
};

onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", updateItemsPerView);

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

  return () => {
    window.removeEventListener("resize", updateItemsPerView);
  };
});

import { onMounted } from "vue";
</script>

<template>
  <section class="gallery-section relative w-full overflow-hidden py-24">
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
        <div class="gallery-carousel">
          <div class="carousel-track">
            <div
              v-for="image in visibleImages"
              :key="image.id"
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

        <!-- Navigation -->
        <button
          class="carousel-nav carousel-prev"
          :disabled="!canGoPrev"
          @click="prevSlide"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          class="carousel-nav carousel-next"
          :disabled="!canGoNext"
          @click="nextSlide"
          aria-label="Next"
        >
          →
        </button>
      </div>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <span
          v-for="i in Math.ceil(galleryImages.length / itemsPerView)"
          :key="i"
          class="indicator"
          :class="{ active: i - 1 === Math.floor(currentIndex / itemsPerView) }"
        />
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
  background: radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.08), transparent 55%),
    radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.05), transparent 60%);
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
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item {
  flex: 1;
  min-width: 0;
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
  transition: filter 0.4s ease;
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

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.carousel-nav:hover:not(:disabled) {
  border-color: rgba(243, 242, 107, 0.7);
  color: #f3f26b;
  background: rgba(0, 0, 0, 0.7);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-prev {
  left: 12px;
}

.carousel-next {
  right: 12px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  width: 24px;
  background: #f3f26b;
}

@media (max-width: 1024px) {
  .carousel-nav {
    width: 40px;
    height: 40px;
  }

  .orbit-lg {
    width: 700px;
    height: 700px;
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
    font-size: 1rem;
  }

  .carousel-prev {
    left: 8px;
  }

  .carousel-next {
    right: 8px;
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
