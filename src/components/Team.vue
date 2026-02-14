<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray(".team-card").forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
    });
  });
});
</script>

<template>
  <section id="team" class="team relative w-full overflow-hidden py-24">
    <div class="team-bg absolute inset-0" />
    <div class="team-orbits absolute inset-0 pointer-events-none">
      <span class="orbit orbit-lg" />
      <span class="orbit orbit-md" />
      <span class="orbit orbit-sm" />
    </div>

    <div class="team-inner relative z-10">
      <div id="team" class="team-section">
        <h2 class="section-title">Meet the Team</h2>
        <div
          class="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>

          <div class="team-card">
            <img
              src="https://cdn.britannica.com/58/129958-050-C0EF01A4/Adolf-Hitler-1933.jpg"
              alt="Adolf Hitler"
              class="team-avatar"
            />
            <h3 class="team-name">Adolf Hitler</h3>
            <p class="team-role">Founder of the Nazi Party</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
}

.team-bg {
  background:
    radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    radial-gradient(
      circle at 70% 80%,
      rgba(255, 255, 255, 0.05),
      transparent 60%
    );
  opacity: 0.7;
}

.team-orbits {
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

.team-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 32px;
  letter-spacing: 0.08em;
}

.team-section {
  margin-bottom: 48px;
}

.team-grid {
  margin-bottom: 48px;
}

.team-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 28px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.team-card:hover {
  border-color: rgba(243, 242, 107, 0.5);
  background: rgba(0, 0, 0, 0.5);
}

.team-avatar {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

@media (max-width: 768px) {
  .team-avatar {
    height: 200px;
  }
}

.team-card:hover .team-avatar {
  filter: grayscale(0%);
}

.team-name {
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.team-role {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #f3f26b;
}

@media (max-width: 1024px) {
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
  .team {
    padding: 20px 0;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  .team-grid {
    gap: 12px;
  }

  .team-card {
    padding: 12px;
    gap: 8px;
  }

  .team-avatar {
    height: 140px;
  }

  .team-name {
    font-size: 0.85rem;
  }

  .team-role {
    font-size: 0.65rem;
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
