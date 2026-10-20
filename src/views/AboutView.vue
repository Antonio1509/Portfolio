<script setup>
import portrait from '../assets/about-portrait.jpg'
import HeadingFlow from '../components/HeadingFlow.vue'

const aboutParagraphs = [
  "Hi, I'm Chad, a software development student at Life Choices Academy in Cape Town. I always loved coding, and what made me love it more is when I learned how to build a full page and viewing it on the browser.",
  'I learn by building. And I build with others. My team andI created a Web Scraping dashboard with Flask API and a Vue frontend, aswell as a multi-vendor marketplace with a cart, checkout and order tracking. I plan on learning more about backend as i already know the basics about it.',
  "Each project taught me somethingI didn't know when i started, and working as a team taught me how to plan, share the work and how to solve problems together.",
  'Currently I am learning how to use WordPress. And a strength of mine that was shared to me by others was the ability to take lead in situations where nobody would want to take lead, to guide and lead the team into solving problems and working our way to deadline without any problems. I am always open to new challenges and to learn from it.',
  'I am looking for a internship or junior role in frontend where i can contribute to real products and learn from experienced developers.',
  "Outside of coding, you'll find me playing football and even the piano. I enjoy gaming as well.",
]
</script>

<template>
  <section id="about" class="inner-page page-wrap">
    <p class="eyebrow">About</p>
    <div class="inner-heading"><HeadingFlow><h1>My Journey</h1></HeadingFlow>
      <p class="lead">Building real products, one project at a time.</p></div>
    <div class="about-grid">
      <div class="about-art"><div class="about-image"><img :src="portrait" alt="Portrait of Chad Gys" /></div></div>
      <div class="about-copy">
        <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        <p class="quick-facts-title">Quick facts:</p>
        <p>Based in Cape Town, Studying Software Development, Open to Internships.</p>
        <a class="text-link" href="#contact">Let's Connect and Collaborate <span>→</span></a>
      </div>
    </div>
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
  transform: translateY(-40px);
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

.about-copy .quick-facts-title {
  color: var(--text);
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
