<script setup>
const aboutParagraphs = [
  "I'm studying software development at Life Choices Academy. I use the exercises and small projects I build to practise what I'm learning and see where I need more work.",
  "My recent work includes Vue pages, JavaScript interactions, and an Express API. I'm still learning, and I try to make each project a little better than the last.",
  'Away from the computer, I like gaming and playing piano.',
]
</script>

<template>
  <section class="inner-page page-wrap">
    <p class="eyebrow">About</p>
    <div class="inner-heading"><h1>A bit about me</h1>
      <p class="lead">I'm a software development trainee at Life Choices Academy, learning by building and improving real projects.</p></div>
    <div class="about-grid"><div class="about-art"><div class="about-image"><img src="https://i.ibb.co/392MSHtk/IMG-1217.jpg" alt="Portrait of Chad Gys" /></div></div>
      <div class="about-copy"><p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
            <RouterLink class="text-link" to="/contact">Say hello <span>→</span></RouterLink></div></div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 11%;
  align-items: center;
  border-top: 1px solid var(--line);
  padding-top: 52px;
}

.about-art {
  position: relative;
  max-width: 355px;
}

.about-image {
  position: relative;
  width: 100%;
  height: 360px;
  background: #1b1b19;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  filter: grayscale(1) sepia(.15) brightness(.72);
 }

.about-copy {
  max-width: 550px;
  color: #a6a49e;
  font-size: 14px;
  line-height: 1.95;
}

.about-copy p {
  margin: 0 0 21px;
}

.about-copy .text-link {
  display: inline-block;
  margin-top: 7px;
}

@media (max-width:800px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 36px;
    padding-top: 35px;
  }
  .about-art {
    width: min(100%,360px);
    margin: auto;
  }
  .about-image {
    height: 390px;
  }
  .about-copy {
    max-width: none;
  }
}

@media (max-width:430px) {
  .about-image {
    height: 330px;
  }
}
</style>
