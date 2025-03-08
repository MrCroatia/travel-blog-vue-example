<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-heading">Wanderlust</h3>
        <p class="footer-text">Travel inspiration since 2025</p>
        <div class="social-links">
          <a href="#" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h4 class="footer-subheading">Explore</h4>
        <router-link to="/destinations" class="footer-link">All Destinations</router-link>
        <router-link to="/about" class="footer-link">About Us</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
      </div>

      <div class="footer-section newsletter-section">
        <h4 class="footer-subheading">Get Travel Updates</h4>
        <form @submit.prevent="subscribe" class="newsletter-form">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="newsletter-input"
            required
          >
          <button type="submit" class="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Wanderlust. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const subscribe = () => {
  alert(`Thanks for subscribing, ${email.value}!`);
  email.value = '';
};
</script>

<style lang="scss" scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  margin-top: auto;
  position: relative;
  z-index: 100;

  &-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding-bottom: 2rem;
  }

  &-section {
    padding: 1rem;

    &.newsletter-section {
      margin-top: -0.5rem;
    }
  }

  &-heading {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #42b983;
  }

  &-subheading {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #ecf0f1;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: #42b983;
    }
  }

  &-link {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: #42b983;
      transform: translateX(5px);
    }
  }

  &-bottom {
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  &-icon {
    font-size: 1.8rem;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      color: #42b983;
      transform: translateY(-2px);
    }
  }
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;

  &-input {
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      outline: 2px solid #42b983;
    }
  }

  &-button {
    padding: 0.8rem 1.5rem;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;

    &:hover {
      background: #3aa876;
      transform: translateY(-1px);
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem;

    &-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    &-section {
      text-align: center;
      padding: 1rem 0;

      &.newsletter-section {
        margin-top: 0;
      }
    }

    &-subheading::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .social-links {
    justify-content: center;
  }

  .newsletter-form {
    max-width: 100%;
    align-items: center;
  }
}
</style>
