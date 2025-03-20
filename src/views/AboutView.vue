<template>
  <div class="about-view">
    <section class="about-hero">
      <h1 class="hero-title">Our Story</h1>
      <p class="hero-subtitle">Discover the passion behind Wanderlust</p>
    </section>

    <section class="about-content">
      <div class="about-section">
        <h2 class="section-title">Who We Are</h2>
        <p class="about-text">
          Wanderlust was born from a shared passion for exploration and cultural discovery.
          Founded in 2025 by a team of seasoned travelers, we aim to inspire and empower
          adventurers to explore the world responsibly.
        </p>
      </div>

      <div class="about-section">
        <h2 class="section-title">Our Mission</h2>
        <p class="about-text">
          We believe travel should be accessible, sustainable, and transformative.
          Through detailed guides and authentic storytelling, we help travelers:
        </p>
        <ul class="mission-list">
          <li>Discover hidden gems</li>
          <li>Connect with local cultures</li>
          <li>Travel sustainably</li>
          <li>Create unforgettable memories</li>
        </ul>
      </div>

      <div class="team-section">
        <h2 class="section-title">Meet the Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="/images/team1.jpg" alt="Founder" class="member-photo" loading="lazy">
            <h3 class="member-name">Sarah Johnson</h3>
            <p class="member-role">CEO & Founder</p>
          </div>
          <div class="team-member">
            <img src="/images/team2.jpg" alt="Editor" class="member-photo" loading="lazy">
            <h3 class="member-name">Michael Chen</h3>
            <p class="member-role">Content Editor</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/about-bg.jpg') center/cover;
  color: white;
  margin-bottom: 3rem;
  border-radius: 0 0 30px 30px;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.about-text {
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.mission-list {
  list-style: none;
  padding-left: 1.5rem;

  li {
    position: relative;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--secondary);
      font-weight: bold;
    }
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.member-name {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.member-role {
  color: var(--text);
  font-size: 0.9rem;
}
</style>
