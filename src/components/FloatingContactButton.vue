<template>
  <a
    href="#contact"
    class="floating-button"
    title="Contact us"
    aria-label="Contact us"
  >
    <svg
      class="button-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </a>
</template>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background: #ffff00;
  color: #121212;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(255, 255, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 99;
}

.floating-button:hover {
  background: #fff;
  box-shadow: 0 6px 28px rgba(255, 255, 0, 0.4);
  transform: translateY(-4px);
}

.button-icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}

@media (max-width: 640px) {
  .floating-button {
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
  }

  .button-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
