<template>
  <article class="blog-post" @click="navigateToDestination">
    <div class="image-container">
      <img
        :src="destination.image"
        :alt="destination.title"
        class="destination-image"
        :loading="$route && $route.name === 'Home' && destination.featured ? 'eager' : 'lazy'"
      />
      <div class="location-badge">{{ destination.location }}</div>
      <div class="rating-badge">
        <i class="fas fa-star"></i>
        {{ destination.rating || '4.8' }}
      </div>
    </div>
    <div class="content">
      <h2 class="destination-title">{{ destination.title }}</h2>
      <p class="excerpt">{{ destination.excerpt }}</p>
      <div class="meta-info">
        <span class="price">From ${{ destination.price || '999' }}</span>
        <span class="duration">
          <i class="fas fa-clock"></i>
          {{ destination.duration || '7 days' }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const props = defineProps({
  destination: {
    type: Object,
    required: true,
  },
})

const navigateToDestination = () => {
  router.push(`/destinations/${props.destination.id}`)
}
</script>

<style lang="scss" scoped>
.blog-post {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

    .destination-image {
      transform: scale(1.05);
    }
  }
}

.image-container {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.location-badge {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(2px);
}

.rating-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
}

.content {
  padding: 1.5rem;
}

.destination-title {
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.excerpt {
  color: var(--text);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text);
}

.price {
  color: var(--secondary);
  font-weight: 600;
}

.duration {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
