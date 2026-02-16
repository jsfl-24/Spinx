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
                src="https://i.pinimg.com/736x/2f/ca/40/2fca40121664fc6a6ea9b25e920ce1b8.jpg"
                alt="Diya El Fadhil"
                class="team-avatar"
              />
              <h3 class="team-name">Diya El Fadhil</h3>
              <p class="team-role">Operations Director</p>
            </div>
            <div class="team-card">
              <img
                src="https://cdn.britannica.com/09/117709-050-14F8F41D/Mother-Teresa-of-Calcutta-1975.jpg"
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
                src="data:image/jpeg;base64,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"
                alt="Joise"
                class="team-avatar"
              />
              <h3 class="team-name">Joise</h3>
              <p class="team-role">Drone Design Engineer</p>
            </div>
            <div class="team-card">
              <img
                src="https://i.ytimg.com/vi/_lc9iTNtw3s/hqdefault.jpg"
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
                src="https://m.media-amazon.com/images/I/515zoJZj2-L._AC_UF894,1000_QL80_.jpg"
                alt="Jasfal"
                class="team-avatar"
              />
              <h3 class="team-name">Jasfal</h3>
              <p class="team-role">Technical Director</p>
            </div>
            <div class="team-card">
              <img
                src="https://imagesvs.oneindia.com/ml/img/2015/06/26-1435297330-amrutha8.jpg"
                alt="Neha"
                class="team-avatar"
              />
              <h3 class="team-name">Neha</h3>
              <p class="team-role">Senior Flight Instructor</p>
            </div>
            <div class="team-card">
              <img
                src="https://pbs.twimg.com/media/G3yCn1EWYAAHOwI.jpg"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEP_CYaOSYmVyBE29Mi-dZvA0EF7cvHx12hxiv83_WlAlmuGo03u0XbhZuaX8qJEpnbNQ&usqp=CAU"
                alt="Aswin"
                class="team-avatar"
              />
              <h3 class="team-name">Aswin</h3>
              <p class="team-role">Head of Media Production</p>
            </div>
            <div class="team-card">
              <img
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Rick-Astley-Never-Gonna-Give-You-Up-Remastered-Header.jpg?w=1200&h=900&fit=crop"
                alt="Alin"
                class="team-avatar"
              />
              <h3 class="team-name">Alin</h3>
              <p class="team-role">Media Production Coordinator</p>
            </div>
            <div class="team-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Official_portrait_of_Narendra_Modi%2C_2022_%28cropped%29.jpg"
                alt="Nihala"
                class="team-avatar"
              />
              <h3 class="team-name">Nihala</h3>
              <p class="team-role">Gear Manager</p>
            </div>
            <div class="team-card">
              <img
                src="https://www.trumplibrary.gov/sites/default/files/styles/large/public/2021-01/President-Trump-Official-Portrait.jpg?itok=eReCLE7X"
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
