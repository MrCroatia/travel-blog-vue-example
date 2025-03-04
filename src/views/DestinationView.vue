<template>
  <div class="destination-view">
    <div v-if="destination">
      <h1 class="destination-title">{{ destination.title }}</h1>
      <div class="destination-image-container">
        <img :src="destination.image" :alt="destination.title" class="destination-image" />
      </div>
      <div class="destination-content">
        <p class="destination-description">{{ destination.description }}</p>
        <div class="destination-meta">
          <span class="location">{{ destination.location }}</span>
          <span class="price">From ${{ destination.price || '999' }}</span>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <h2>Destination not found</h2>
      <router-link to="/destinations" class="back-link"> ← Back to Destinations </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Destination } from '@/stores'

const route = useRoute()
const store = useStore()

const destination = computed(() =>
  store.state.destinations.find((d: Destination) => d.id === Number(route.params.id)),
)
</script>

<style scoped lang="scss">
.destination-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.destination-title {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.destination-image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-content {
  max-width: 800px;
  margin: 0 auto;
}

.destination-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2rem;
}

.destination-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--light);
  border-radius: 4px;

  .location {
    font-weight: 600;
    color: var(--primary);
  }

  .price {
    color: var(--secondary);
    font-weight: 700;
  }
}

.not-found {
  text-align: center;
  padding: 4rem;

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .back-link {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .destination-view {
    padding: 1rem;
  }

  .destination-title {
    font-size: 2rem;
  }

  .destination-image-container {
    height: 250px;
  }
}
</style>
