<script setup>
const aboutParagraphs = [
  'I’m an emerging front-end developer and software development trainee at Life Choices Academy. I’m in an exciting, hands-on stage of my journey, learning by turning technical fundamentals into real projects.',
  'I care about the details that make a site feel considered: semantic markup, robust functionality, clear visual hierarchy, and responsive layouts. I bring a mix of logical problem-solving and creative thinking to every build.',
  'Outside of code, you’ll find me gaming, playing piano, or taking a well-earned break. I’m always glad to connect with mentors, fellow learners, and people building interesting things.',
]
</script>

<template>
  <section class="inner-page page-wrap">
    <p class="eyebrow"><span>01</span> / ABOUT</p>
    <div class="inner-heading"><h1>Learning by<br /><em>making.</em></h1>
      <p class="lead">A developer in the making, grounded in curiosity and focused on creating work that feels as good as it functions.</p></div>
    <div class="about-grid"><div class="about-art"><div class="about-image"><img src="https://i.ibb.co/392MSHtk/IMG-1217.jpg" alt="Portrait of Chad Gys" />
      <span class="image-outline"></span><span class="image-label">CHAD GYS · CAPE TOWN</span></div>
      <span class="art-spark">✳</span></div><div class="about-copy"><p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
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

.image-outline {
  position: absolute;
  inset: 12px;
  border: 1px solid #ddbd8066;
}

.image-label {
  position: absolute;
  bottom: 23px;
  left: 24px;
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #eee7d9;
}

.art-spark {
  position: absolute;
  right: -28px;
  top: -31px;
  color: var(--gold);
  font-size: 45px;
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
