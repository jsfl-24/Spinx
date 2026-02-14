<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-brand", {
    y: -12,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    ".hero-title",
    {
      y: 60,
      opacity: 0,
      duration: 1,
    },
    "-=0.2",
  );

  tl.from(
    ".hero-sub",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6",
  );

  tl.from(
    ".hero-cta",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    },
    "-=0.4",
  );

  tl.from(
    ".hero-stat",
    {
      y: 14,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    },
    "-=0.5",
  );

  gsap.from(".navbar", {
    y: -28,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
  });
});
</script>

<template>
  <section id="home" class="hero relative w-full min-h-screen overflow-hidden">
    <div class="hero-bg absolute inset-0" />

    <div class="hero-lines absolute inset-0 pointer-events-none">
      <span class="hero-line hero-line-lg" />
      <span class="hero-line hero-line-md" />
      <span class="hero-line hero-line-sm" />
      <span class="hero-dot" />
    </div>

    <nav class="navbar fixed top-0 left-0 w-full z-50">
      <div class="mx-auto max-w-6xl px-6">
        <div class="nav-rail flex items-center justify-between">
          <router-link to="/" class="hero-brand flex items-center gap-3">
            <img
              src="/SpinX_Logo.png"
              alt="SpinX"
              class="h-7 w-7 object-contain"
            />
            <span class="nav-wordmark">SpinX 360</span>
          </router-link>

          <div class="hidden md:flex items-center gap-8 text-xs uppercase">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#team" class="nav-link">Team</a>
            <a href="#gallery" class="nav-link">Gallery</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <button
            class="hamburger md:hidden"
            type="button"
            aria-label="Toggle navigation"
            :aria-expanded="isMobileMenuOpen"
            @click="toggleMobileMenu"
          >
            <span class="hamburger-line" />
            <span class="hamburger-line" />
            <span class="hamburger-line" />
          </button>
        </div>
        <div class="nav-divider" />

        <div v-show="isMobileMenuOpen" class="mobile-menu md:hidden">
          <a href="#home" class="mobile-link" @click="closeMobileMenu">
            Home
          </a>
          <a href="#about" class="mobile-link" @click="closeMobileMenu">
            About
          </a>
          <a href="#team" class="mobile-link" @click="closeMobileMenu">
            Team
          </a>
          <a href="#gallery" class="mobile-link" @click="closeMobileMenu">
            Gallery
          </a>
          <a href="#contact" class="mobile-link" @click="closeMobileMenu">
            Contact
          </a>
        </div>
      </div>
    </nav>

    <div class="hero-content mx-auto max-w-6xl px-6">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10">
        <div class="hidden lg:flex flex-col gap-10 justify-center">
          <div class="hero-stat">
            <p class="stat-value">360+</p>
            <p class="stat-label">Total TBCs</p>
            <span class="stat-line" />
          </div>
          <div class="hero-stat">
            <p class="stat-value">40M+</p>
            <p class="stat-label">Network Transactions</p>
            <span class="stat-line" />
          </div>
        </div>

        <div class="text-center flex flex-col justify-center">
          <p class="hero-kicker">SpinX Network, a family of on-chain apps</p>
          <h1 class="hero-title">
            SpinX Protocol powers on-chain consumer apps
          </h1>
          <p class="hero-sub">
            Build utility-first experiences with a seamless protocol layer and a
            community-first incentive engine.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button class="hero-cta hero-cta-primary">
              Start building in 3 steps
            </button>
            <button class="hero-cta hero-cta-ghost hidden">
              Read the documentation
            </button>
          </div>
        </div>

        <div class="hidden lg:flex flex-col gap-10 justify-center items-end">
          <div class="hero-stat text-right">
            <p class="stat-value">297M</p>
            <p class="stat-label">RLY Rewards Distributed</p>
            <span class="stat-line" />
          </div>
          <div class="hero-stat text-right">
            <p class="stat-value">258M</p>
            <p class="stat-label">Total Value Locked in RLY</p>
            <span class="stat-line" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
    >
      <span class="scroll-text">SCROLL FOR MORE</span>
      <div class="scroll-shell">
        <div class="scroll-dot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
}

.hero-bg {
  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(255, 255, 255, 0.08),
      transparent 58%
    ),
    radial-gradient(
      circle at 65% 55%,
      rgba(255, 255, 255, 0.06),
      transparent 62%
    );
  opacity: 0.7;
}

.hero-lines {
  display: grid;
  place-items: center;
}

.hero-line {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}

.hero-line-lg {
  width: 900px;
  height: 900px;
}

.hero-line-md {
  width: 640px;
  height: 640px;
}

.hero-line-sm {
  width: 420px;
  height: 420px;
}

.hero-dot {
  position: absolute;
  right: 20%;
  top: 36%;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
}

.navbar {
  padding-top: 24px;
}

.nav-rail {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  padding: 10px 20px;
}

.nav-divider {
  height: 1px;
  margin-top: 18px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.18),
    transparent
  );
}

.nav-wordmark {
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.18em;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #f9f56b;
}

.hamburger {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  border: none;
  background: none;
  cursor: pointer;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 999px;
}

@media (min-width: 768px) {
  .hamburger {
    display: none !important;
  }

  .mobile-menu {
    display: none !important;
  }
}

.mobile-menu {
  margin-top: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(16px);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-link {
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
}

.hero-content {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 120px;
  padding-bottom: 90px;
}

.hero-kicker {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
}

.hero-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.8rem, 4.5vw, 5.5rem);
  line-height: 1.05;
  margin-top: 1.2rem;
}

.hero-sub {
  margin-top: 1.2rem;
  color: rgba(255, 255, 255, 0.68);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.95rem;
}

.hero-cta {
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.7rem;
  padding: 12px 22px;
  border-radius: 999px;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.hero-cta:hover {
  transform: translateY(-1px);
}

.hero-cta-primary {
  background: #f3f26b;
  color: #121212;
}

.hero-cta-ghost {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(255, 255, 255, 0.72);
}

.stat-value {
  font-size: 1.5rem;
  letter-spacing: 0.12em;
  color: #f5f5f5;
}

.stat-label {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.stat-line {
  width: 46px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.scroll-text {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
}

.scroll-shell {
  width: 22px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #f3f26b;
  animation: scroll 1.8s infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateY(16px);
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .hero-line-lg {
    width: 680px;
    height: 680px;
  }

  .hero-line-md {
    width: 500px;
    height: 500px;
  }

  .hero-line-sm {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding-top: 110px;
    padding-bottom: 80px;
  }

  .nav-rail {
    gap: 12px;
  }

  .nav-wordmark {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
  }

  .hero-kicker {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
  }

  .hero-title {
    font-size: clamp(2.2rem, 7vw, 3.4rem);
  }

  .hero-sub {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .hero-line-lg {
    width: 520px;
    height: 520px;
  }

  .hero-line-md {
    width: 380px;
    height: 380px;
  }

  .hero-line-sm {
    width: 260px;
    height: 260px;
  }

  .hero-dot {
    right: 16%;
    top: 32%;
  }

  .nav-rail {
    padding: 8px 14px;
  }

  .hero-cta {
    width: 100%;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
  }

  .scroll-text {
    font-size: 0.55rem;
  }
}

@media (max-width: 640px) {
  .nav-rail {
    padding: 8px 14px;
  }

  .nav-wordmark {
    letter-spacing: 0.08em;
  }

  .hero-cta {
    width: 100%;
  }
}
</style>
