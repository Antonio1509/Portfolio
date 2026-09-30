<script setup>
import monogram from '../assets/cg-monogram.png'
</script>

<template>
  <section class="home-hero page-wrap">
    <div class="hero-copy">
      <p class="home-location">Cape Town, South Africa</p>
      <h1>Hi, I'm Chad.<br />I learn by <em>building.</em></h1>
      <p class="hero-intro">
        I'm a software development trainee at Life Choices Academy. This site is where I share what I've learned and the projects I've built.
      </p>
      <div class="hero-actions">
        <RouterLink class="button button-gold" to="/projects">See my projects <span>→</span></RouterLink>
        <RouterLink class="text-link" to="/about">About me <span>→</span></RouterLink>
      </div>
    </div>

    <article class="featured-project">
      <RouterLink class="featured-image" to="/projects" aria-label="Browse Chad Gys projects">
        <img :src="monogram" alt="CG gold monogram logo" />
      </RouterLink>
      <div class="featured-caption">
        <div>
          <p class="eyebrow">My mark</p>
          <h2>Chad Gys</h2>
        </div>
        <RouterLink class="text-link" to="/projects">More projects <span>→</span></RouterLink>
      </div>
    </article>
  </section>
</template>

<style scoped>
.home-hero {
  min-height: 680px;
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  align-items: center;
  gap: 70px;
  padding-top: 55px;
  padding-bottom: 85px;
}

.hero-copy {
  max-width: 520px;
}

.home-location {
  color: var(--gold);
  font-size: 14px;
  margin: 0 0 22px;
}

.hero-copy h1 {
  font: 600 clamp(46px, 6.2vw, 72px)/1.12 var(--display);
  letter-spacing: -3px;
  margin: 0 0 24px;
}

.hero-copy h1 em {
  color: var(--gold);
  font-style: normal;
}

.hero-intro {
  max-width: 450px;
  color: #aaa9a4;
  font-size: 16px;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 32px;
}

.featured-project {
  min-width: 0;
  border: 1px solid var(--line);
  background: #111214;
}

.featured-image {
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle, rgba(216, 182, 119, .1), #111214 62%);
  aspect-ratio: 2.1 / 1;
}

.featured-image img {
  display: block;
  width: clamp(132px, 28%, 190px);
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 50%;
  mix-blend-mode: screen;
  transition: transform .25s ease;
}

.featured-image:hover img {
  transform: scale(1.02);
}

.featured-caption {
  min-height: 96px;
  padding: 18px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.featured-caption .eyebrow {
  margin-bottom: 3px;
  font-size: 11px;
}

.featured-caption h2 {
  font: 500 17px var(--display);
  margin: 0;
}

.featured-caption .text-link {
  white-space: nowrap;
}

@media (max-width: 900px) {
  .home-hero {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 48px;
    padding-top: 64px;
    padding-bottom: 80px;
  }

  .hero-copy {
    max-width: 650px;
  }

  .featured-project {
    width: 100%;
  }
}

@media (max-width: 520px) {
  .home-hero {
    padding-top: 46px;
    gap: 36px;
  }

  .hero-actions {
    gap: 18px;
  }

  .featured-caption {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
