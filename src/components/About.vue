<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".about-hero-title", {
    y: 60,
    opacity: 0,
    duration: 1,
  });

  tl.from(
    ".about-hero-sub",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6",
  );

  gsap.utils.toArray(".feature-card").forEach((element: any) => {
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

  gsap.utils.toArray(".stat-block").forEach((element: any) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
  });

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
  <section class="about relative w-full overflow-hidden py-24">
    <div class="about-bg absolute inset-0" />
    <div class="about-orbits absolute inset-0 pointer-events-none">
      <span class="orbit orbit-lg" />
      <span class="orbit orbit-md" />
      <span class="orbit orbit-sm" />
    </div>

    <!-- Hero Section -->
    <div class="about-inner relative z-10">
      <div class="about-hero-sec text-center mb-32">
        <p class="about-kicker">Our Story</p>
        <h1 class="about-hero-title">
          Building the future of community-driven technology
        </h1>
        <p class="about-hero-sub">
          We believe in the power of decentralized networks and community-first
          innovation to create meaningful impact.
        </p>
      </div>

      <!-- Mission Section -->
      <div class="mission-grid grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
        <div class="mission-block">
          <h2 class="mission-title">Our Mission</h2>
          <p class="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="mission-block">
          <h2 class="mission-title">Our Vision</h2>
          <p class="mission-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum sed ut perspiciatis.
          </p>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="features-section mb-32">
        <h2 class="section-title">Why Choose SpinX</h2>
        <div
          class="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-name">Secure & Reliable</h3>
            <p class="feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-name">Lightning Fast</h3>
            <p class="feature-desc">
              Ut labore et dolore magna aliqua enim ad minim veniam quis nostrud
              exercitation.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3 class="feature-name">Global Community</h3>
            <p class="feature-desc">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute
              irure dolor.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <h3 class="feature-name">Innovation Driven</h3>
            <p class="feature-desc">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3 class="feature-name">Community First</h3>
            <p class="feature-desc">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-name">Data Driven</h3>
            <p class="feature-desc">
              Mollit anim id est laborum sed ut perspiciatis unde omnis iste
              natus error sit voluptatem.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section mb-32">
        <div class="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="stat-block">
            <p class="stat-number">50K+</p>
            <p class="stat-name">Active Users</p>
            <span class="stat-underline" />
          </div>
          <div class="stat-block">
            <p class="stat-number">200M+</p>
            <p class="stat-name">Transactions</p>
            <span class="stat-underline" />
          </div>
          <div class="stat-block">
            <p class="stat-number">$500M+</p>
            <p class="stat-name">Total Volume</p>
            <span class="stat-underline" />
          </div>
          <div class="stat-block">
            <p class="stat-number">150+</p>
            <p class="stat-name">Partners</p>
            <span class="stat-underline" />
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="team-section">
        <h2 class="section-title">Meet the Team</h2>
        <div
          class="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div class="team-card">
            <div class="team-avatar">👨‍💼</div>
            <h3 class="team-name">Alex Johnson</h3>
            <p class="team-role">Founder & CEO</p>
            <p class="team-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Passionate about decentralized systems.
            </p>
          </div>

          <div class="team-card">
            <div class="team-avatar">👩‍💻</div>
            <h3 class="team-name">Sarah Chen</h3>
            <p class="team-role">CTO</p>
            <p class="team-bio">
              Ut labore et dolore magna aliqua. Expert in blockchain
              architecture and protocol design.
            </p>
          </div>

          <div class="team-card">
            <div class="team-avatar">👨‍🎨</div>
            <h3 class="team-name">Marcus Lee</h3>
            <p class="team-role">Head of Design</p>
            <p class="team-bio">
              Sed do eiusmod tempor incididunt. Focused on creating beautiful
              and intuitive experiences.
            </p>
          </div>

          <div class="team-card">
            <div class="team-avatar">👩‍💼</div>
            <h3 class="team-name">Lisa Rodriguez</h3>
            <p class="team-role">Operations Lead</p>
            <p class="team-bio">
              Quis nostrud exercitation ullamco laboris. Driving strategic
              partnerships and growth.
            </p>
          </div>

          <div class="team-card">
            <div class="team-avatar">👨‍🚀</div>
            <h3 class="team-name">James Park</h3>
            <p class="team-role">Protocol Engineer</p>
            <p class="team-bio">
              Nisi ut aliquip ex ea commodo. Architecting next-generation
              blockchain infrastructure.
            </p>
          </div>

          <div class="team-card">
            <div class="team-avatar">👩‍🔬</div>
            <h3 class="team-name">Emma Stone</h3>
            <p class="team-role">Research Lead</p>
            <p class="team-bio">
              Consequat duis aute irure dolor. Pioneering new approaches to
              consensus and security.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section text-center mt-32">
        <h2 class="cta-title">Ready to Join Us?</h2>
        <p class="cta-sub">
          Be part of the revolution. Explore our documentaion, join our
          community, or get in touch.
        </p>
        <div
          class="cta-buttons flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <button class="cta-primary">Explore Docs</button>
          <button class="cta-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
}

.about-bg {
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

.about-orbits {
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

.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.about-hero-sec {
  margin-bottom: 80px;
}

.about-kicker {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
}

.about-hero-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  line-height: 1.1;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
}

.about-hero-sub {
  color: rgba(255, 255, 255, 0.7);
  max-width: 640px;
  margin: 0 auto;
  font-size: 1rem;
}

.mission-grid {
  margin-bottom: 48px;
}

.mission-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mission-title {
  font-size: 1.4rem;
  letter-spacing: 0.08em;
}

.mission-text {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  font-size: 0.95rem;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 32px;
  letter-spacing: 0.08em;
}

.feature-grid {
  margin-bottom: 48px;
}

.feature-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-card:hover {
  border-color: rgba(243, 242, 107, 0.5);
  background: rgba(0, 0, 0, 0.5);
}

.feature-icon {
  font-size: 2.4rem;
}

.feature-name {
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.feature-desc {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.6;
}

.stats-section {
  margin-bottom: 48px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(0, 0, 10, 0.4);
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-number {
  font-size: 2rem;
  letter-spacing: 0.12em;
  color: #f3f26b;
}

.stat-name {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.6);
}

.stat-underline {
  width: 32px;
  height: 2px;
  background: rgba(243, 242, 107, 0.6);
  border-radius: 999px;
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
  font-size: 3.2rem;
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

.cta-section {
  padding: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(0, 0, 10, 0.4);
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta-sub {
  color: rgba(255, 255, 255, 0.7);
  max-width: 560px;
  margin: 0 auto;
  font-size: 1rem;
}

.cta-buttons {
  margin-top: 24px;
}

.cta-primary,
.cta-secondary {
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.7rem;
  padding: 12px 28px;
  border-radius: 999px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.cta-primary {
  background: #f3f26b;
  color: #121212;
}

.cta-primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

.cta-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.cta-secondary:hover {
  border-color: rgba(243, 242, 107, 0.7);
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
  .about {
    padding: 20px 0;
  }

  .about-hero-title {
    font-size: clamp(1.8rem, 5vw, 2.8rem);
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  .feature-card,
  .team-card {
    padding: 18px;
  }

  .stats-section,
  .cta-section {
    padding: 24px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
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
