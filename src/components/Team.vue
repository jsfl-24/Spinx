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
          class="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Alex Johnson"
              class="team-avatar"
            />
            <h3 class="team-name">Alex Johnson</h3>
            <p class="team-role">Founder & CEO</p>
            <p class="team-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Passionate about decentralized systems.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
              alt="Sarah Chen"
              class="team-avatar"
            />
            <h3 class="team-name">Sarah Chen</h3>
            <p class="team-role">CTO</p>
            <p class="team-bio">
              Ut labore et dolore magna aliqua. Expert in blockchain
              architecture and protocol design.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
              alt="Marcus Lee"
              class="team-avatar"
            />
            <h3 class="team-name">Marcus Lee</h3>
            <p class="team-role">Head of Design</p>
            <p class="team-bio">
              Sed do eiusmod tempor incididunt. Focused on creating beautiful
              and intuitive experiences.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
              alt="Lisa Rodriguez"
              class="team-avatar"
            />
            <h3 class="team-name">Lisa Rodriguez</h3>
            <p class="team-role">Operations Lead</p>
            <p class="team-bio">
              Quis nostrud exercitation ullamco laboris. Driving strategic
              partnerships and growth.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="James Park"
              class="team-avatar"
            />
            <h3 class="team-name">James Park</h3>
            <p class="team-role">Protocol Engineer</p>
            <p class="team-bio">
              Nisi ut aliquip ex ea commodo. Architecting next-generation
              blockchain infrastructure.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
              alt="Emma Stone"
              class="team-avatar"
            />
            <h3 class="team-name">Emma Stone</h3>
            <p class="team-role">Research Lead</p>
            <p class="team-bio">
              Consequat duis aute irure dolor. Pioneering new approaches to
              consensus and security.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
              alt="Michael Torres"
              class="team-avatar"
            />
            <h3 class="team-name">Michael Torres</h3>
            <p class="team-role">Lead Developer</p>
            <p class="team-bio">
              Lorem ipsum dolor sit amet. Building scalable infrastructure and
              optimizing performance.
            </p>
          </div>

          <div class="team-card">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
              alt="Jessica Park"
              class="team-avatar"
            />
            <h3 class="team-name">Jessica Park</h3>
            <p class="team-role">Product Manager</p>
            <p class="team-bio">
              Sed do eiusmod tempor incididunt. Focused on delivering
              exceptional product experiences.
            </p>
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

.team-bio {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.6;
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

  .team-card {
    padding: 18px;
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
