<template>
  <footer id="contact" class="footer relative overflow-hidden">
    <div class="footer-bg" />
    <div class="footer-orbits">
      <span class="orbit orbit-lg" />
      <span class="orbit orbit-md" />
      <span class="orbit orbit-sm" />
    </div>

    <div class="footer-inner">
      <div class="footer-top">
        <div class="brand-block">
          <div class="brand-mark">
            <img src="/SpinX_Logo.png" alt="SpinX" class="brand-logo" />
            <span class="brand-name">SpinX 360</span>
          </div>
          <p class="brand-copy">
            SpinX360 is committed to empowering individuals and institutions by
            delivering practical, industry-ready drone training and hands-on
            learning experiences.
          </p>
        </div>

        <!--<div class="link-grid">
          <div class="link-col">
            <p class="link-title">Products</p>
            <a class="link-item" href="#">Protocol</a>
            <a class="link-item" href="#">Developer Console</a>
            <a class="link-item" href="#">Network Status</a>
          </div>
          <div class="link-col">
            <p class="link-title">Resources</p>
            <a class="link-item" href="#">Documentation</a>
            <a class="link-item" href="#">Guides</a>
            <a class="link-item" href="#">SDK Downloads</a>
          </div>
          <div class="link-col">
            <p class="link-title">Community</p>
            <a class="link-item" href="#">Forum</a>
            <a class="link-item" href="#">Events</a>
            <a class="link-item" href="#">Ambassadors</a>
          </div>
          <div class="link-col">
            <p class="link-title">Company</p>
            <a class="link-item" href="#">About</a>
            <a class="link-item" href="#">Careers</a>
            <a class="link-item" href="#">Press</a>
          </div>
        </div>-->
      </div>

      <div class="footer-bottom">
        <p class="footer-meta">2026 SpinX 360. All rights reserved.</p>
        <div class="social-row">
          <a class="social-pill" href="https://www.instagram.com/spinx360"
            >Instagram</a
          >
          <a class="social-pill" href="#">YouTube</a>
          <a class="social-pill" href="#">LinkedIn</a>
          <a class="social-pill" href="#">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000;
  color: #f4f4f4;
  font-family: "Space Grotesk", sans-serif;
  padding: 96px 0 48px;
}

.footer-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.08),
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 60%,
      rgba(255, 255, 255, 0.05),
      transparent 55%
    );
  opacity: 0.7;
}

.footer-orbits {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}

.orbit-lg {
  width: 860px;
  height: 860px;
}

.orbit-md {
  width: 620px;
  height: 620px;
}

.orbit-sm {
  width: 420px;
  height: 420px;
}

.footer-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-top {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.8fr);
  gap: 48px;
  align-items: start;
}

.brand-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.brand-name {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.brand-copy {
  color: rgba(255, 255, 255, 0.68);
  max-width: 360px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
}

.link-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.link-item {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.link-item:hover {
  color: #f3f26b;
}

.footer-bottom {
  margin-top: 56px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-meta {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
}

.social-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-pill {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.social-pill:hover {
  color: #f3f26b;
  border-color: rgba(243, 242, 107, 0.7);
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .link-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 72px 0 40px;
  }

  .link-grid {
    grid-template-columns: 1fr;
  }

  .footer-meta {
    font-size: 0.7rem;
  }

  .social-pill {
    width: 100%;
    text-align: center;
  }
}
</style>
