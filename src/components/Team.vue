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

        <div class="team-group">
          <h3 class="team-group-title">Executive & Strategy</h3>
          <div
            class="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=1"
                alt="Diya El Fadhil"
                class="team-avatar"
              />
              <h3 class="team-name">Diya El Fadhil</h3>
              <p class="team-role">Operations Director</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=2"
                alt="Nehna"
                class="team-avatar"
              />
              <h3 class="team-name">Nehna</h3>
              <p class="team-role">Marketing Director</p>
            </div>
          </div>
        </div>

        <div class="team-group">
          <h3 class="team-group-title">Flight & Engineering</h3>
          <div
            class="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=3"
                alt="Nikhil"
                class="team-avatar"
              />
              <h3 class="team-name">Nikhil</h3>
              <p class="team-role">Chief FPV Pilot</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=4"
                alt="Joise"
                class="team-avatar"
              />
              <h3 class="team-name">Joise</h3>
              <p class="team-role">Drone Design Engineer</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=5"
                alt="Tony"
                class="team-avatar"
              />
              <h3 class="team-name">Tony</h3>
              <p class="team-role">Aerial Cinematographer</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=6"
                alt="Franlee"
                class="team-avatar"
              />
              <h3 class="team-name">Franlee</h3>
              <p class="team-role">Aerial Cinematographer</p>
            </div>
          </div>
        </div>

        <div class="team-group">
          <h3 class="team-group-title">Technical Operations & Training</h3>
          <div
            class="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=7"
                alt="Jasfal"
                class="team-avatar"
              />
              <h3 class="team-name">Jasfal</h3>
              <p class="team-role">Technical Director</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=9"
                alt="Neha"
                class="team-avatar"
              />
              <h3 class="team-name">Neha</h3>
              <p class="team-role">Senior Flight Instructor</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=10"
                alt="Athif"
                class="team-avatar"
              />
              <h3 class="team-name">Athif</h3>
              <p class="team-role">Flight Instructor</p>
            </div>
          </div>
        </div>

        <div class="team-group">
          <h3 class="team-group-title">Media Production & Logistics</h3>
          <div
            class="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=11"
                alt="Aswin"
                class="team-avatar"
              />
              <h3 class="team-name">Aswin</h3>
              <p class="team-role">Head of Media Production</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=12"
                alt="Alin"
                class="team-avatar"
              />
              <h3 class="team-name">Alin</h3>
              <p class="team-role">Media Production Coordinator</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=13"
                alt="Abhishek"
                class="team-avatar"
              />
              <h3 class="team-name">Abhishek</h3>
              <p class="team-role">Equipment & Logistics Manager</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=14"
                alt="Daniya"
                class="team-avatar"
              />
              <h3 class="team-name">Daniya</h3>
              <p class="team-role">Assistant Equipment Manager</p>
            </div>
            <div class="team-card">
              <img
                src="https://picsum.photos/400/500?random=8"
                alt="Nihala"
                class="team-avatar"
              />
              <h3 class="team-name">Nihala</h3>
              <p class="team-role">Gear Manager</p>
            </div>
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

.team-group {
  margin-bottom: 36px;
}

.team-group-title {
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 16px;
}

.team-grid {
  margin-bottom: 48px;
}

.square-card {
  padding: 28px;
}

.square-card .team-avatar {
  height: 300px;
}

.square-card .team-name {
  font-size: 1rem;
}

.square-card .team-role {
  font-size: 0.75rem;
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

  .media-logistics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
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

  .team-group-title {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }

  .team-grid {
    gap: 6px;
  }

  .media-logistics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .team-card {
    padding: 8px;
    gap: 4px;
  }

  .team-avatar {
    height: 140px;
  }

  .team-name {
    font-size: 0.75rem;
  }

  .team-role {
    font-size: 0.55rem;
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
