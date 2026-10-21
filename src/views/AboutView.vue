<script setup>
import portrait from '../assets/about-portrait.jpg'
import HeadingFlow from '../components/HeadingFlow.vue'

const aboutParagraphs = [
  "Hi, I'm Chad, a software development student at Life Choices Academy in Cape Town. I've always loved coding, and I loved it even more when I learned how to build a full page and view it in the browser.",
  'I learn by building, and I build with others. My team and I created a web-scraping dashboard with a Flask API and a Vue frontend, as well as a multi-vendor marketplace with a cart, checkout, and order tracking. I plan to learn more about the backend, as I already know the basics.',
  "Each project taught me something I didn't know when I started, and working as a team taught me how to plan, share the work, and solve problems together.",
  'Currently, I am learning how to use WordPress. Others have told me that one of my strengths is taking the lead when no one else wants to, guiding the team as we solve problems and meet deadlines. I am always open to new challenges and learning from them.',
  'I am looking for an internship or junior frontend role where I can contribute to real products and learn from experienced developers.',
  "Outside of coding, you'll find me playing football and even the piano. I enjoy gaming as well.",
]
</script>

<template>
  <section id="about" class="inner-page page-wrap">
    <p class="eyebrow">About</p>
    <div v-reveal class="inner-heading"><HeadingFlow><h1>My Journey</h1></HeadingFlow>
      <p class="lead">Building real products, one project at a time.</p></div>
    <div class="about-grid">
      <div class="about-art"><div class="about-image"><img v-reveal="{ clipPath: true }" :src="portrait" alt="Portrait of Chad Gys" /></div></div>
      <div class="about-copy">
        <p v-for="(paragraph, index) in aboutParagraphs" :key="paragraph" v-reveal="index">{{ paragraph }}</p>
        <p v-reveal="6" class="quick-facts-title">Quick facts:</p>
        <p v-reveal="7">Based in Cape Town, studying software development, and open to internships.</p>
        <a v-magnetic class="text-link" href="#contact">Let's Connect and Collaborate <span>→</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 11%;
  align-items: start;
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
