<template>
  <div class="destinations-view">
    <section class="banner">
      <h1 class="banner-title">Explore All Destinations</h1>
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search destinations..."
          class="search-input"
        />
      </div>
    </section>

    <section class="all-destinations">
      <div class="destinations-grid">
        <BlogPost
          v-for="destination in filteredDestinations"
          :key="destination.id"
          :destination="destination"
          class="destination-card"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import type { Destination } from '@/stores'
import BlogPost from '@/components/BlogPost.vue'

const store = useStore()
const searchQuery = ref('')

// Ensure proper typing for the computed property
const filteredDestinations = computed(() => {
  const destinations = store.getters.allDestinations as Destination[]
  return destinations.filter((dest: Destination) => {
    return (
      dest.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})
</script>

<style scoped lang="scss">
.destinations-view {
  padding: 2rem;
}

.banner {
  text-align: center;
  padding: 4rem 1rem;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/destinations-bg.jpg') center/cover;
  color: white;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.banner-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

.all-destinations {
  max-width: 1400px;
  margin: 0 auto;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .banner {
    padding: 2rem 1rem;
  }

  .banner-title {
    font-size: 2rem;
  }

  .destinations-view {
    padding: 1rem;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
