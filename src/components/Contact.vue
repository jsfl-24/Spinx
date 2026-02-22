<script setup lang="ts">
import { ref } from "vue";

const isSubmitting = ref(false);

const handleSubmit = async (event: Event) => {
  if (isSubmitting.value) return;

  const form = event.target as HTMLFormElement | null;
  if (!form) return;

  isSubmitting.value = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
    }
  } finally {
    window.setTimeout(() => {
      isSubmitting.value = false;
    }, 600);
  }
};
</script>

<template>
  <section id="contact" class="contact relative w-full overflow-hidden py-24">
    <div class="contact-bg absolute inset-0" />
    <div class="contact-orbits absolute inset-0 pointer-events-none">
      <span class="orbit orbit-lg" />
      <span class="orbit orbit-md" />
      <span class="orbit orbit-sm" />
    </div>

    <div class="contact-inner relative z-10">
      <div class="contact-header text-center mb-12">
        <p class="contact-kicker"></p>
        <h2 class="contact-title">Contact Us</h2>
        <p class="contact-sub">
          Tell us what you are looking for and we will point you to the right
          program, partnership, or project.
        </p>
      </div>

      <div class="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="contact-info hidden lg:block">
          <div class="contact-card">
            <h3 class="contact-card-title">Training & Programs</h3>
            <p class="contact-card-text">
              From beginner training to advanced certification paths, we help
              you find the right learning track.
            </p>
          </div>
          <div class="contact-card">
            <h3 class="contact-card-title">Internships & Careers</h3>
            <p class="contact-card-text">
              Explore hands-on internships and real-world exposure with active
              drone operations.
            </p>
          </div>
          <div class="contact-card">
            <h3 class="contact-card-title">Collaboration</h3>
            <p class="contact-card-text">
              Partner with us on workshops, events, or drone innovation
              initiatives.
            </p>
          </div>
        </div>

        <form
          class="contact-form"
          action="https://formspree.io/f/mzdajkaq"
          method="POST"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="_subject" value="SpinX Contact Form" />
          <label class="contact-label" for="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your full name"
            class="contact-input"
            required
          />

          <label class="contact-label" for="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@email.com"
            class="contact-input"
            required
          />

          <label class="contact-label" for="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us about your goals"
            class="contact-textarea"
            required
          ></textarea>

          <button type="submit" class="contact-submit" :disabled="isSubmitting">
            <span
              v-if="isSubmitting"
              class="submit-spinner"
              aria-hidden="true"
            ></span>
            {{ isSubmitting ? "Submitting..." : "Send Message" }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
}

.contact-bg {
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    radial-gradient(
      circle at 75% 70%,
      rgba(255, 255, 255, 0.05),
      transparent 60%
    );
  opacity: 0.7;
}

.contact-orbits {
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

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-kicker {
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

.contact-title {
  font-size: 2.2rem;
  margin: 12px 0 12px;
}

.contact-sub {
  color: rgba(255, 255, 255, 0.7);
  max-width: 560px;
  margin: 0 auto;
}

.contact-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  margin-bottom: 16px;
}

.contact-card-title {
  font-size: 1rem;
  margin-bottom: 8px;
}

.contact-card-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 28px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
}

.contact-label {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
}

.contact-input,
.contact-textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 12px 14px;
  color: #f4f4f4;
  font-size: 0.95rem;
  outline: none;
}

.contact-input:focus,
.contact-textarea:focus {
  border-color: rgba(243, 242, 107, 0.7);
  box-shadow: 0 0 0 2px rgba(243, 242, 107, 0.2);
}

.contact-submit {
  margin-top: 8px;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.7rem;
  padding: 12px 28px;
  border-radius: 999px;
  background: #ffff00;
  color: #121212;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.contact-submit:hover {
  background: #fff;
  transform: translateY(-2px);
}

.contact-submit:disabled {
  cursor: wait;
  transform: none;
  opacity: 0.85;
}

.submit-spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(18, 18, 18, 0.25);
  border-top-color: #121212;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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
  .contact {
    padding: 20px 0;
  }

  .contact-title {
    font-size: clamp(1.8rem, 5vw, 2.6rem);
  }
}
</style>
