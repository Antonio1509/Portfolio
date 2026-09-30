<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const status = ref('')
const sending = ref(false)
async function submitForm(event) {
  sending.value = true
  status.value = ''
  try {
    const response = await fetch('https://formspree.io/f/mjgznprl', {
      method: 'POST',
      body: new FormData(event.currentTarget),
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) throw new Error('Message submission failed')
    status.value = 'Thanks — your message has been sent.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    status.value = 'Sorry, your message could not be sent. Please email gyschad206@email.com directly.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="inner-page page-wrap contact-page">
    <p class="eyebrow"><span>03</span> / CONTACT</p>
    <div class="contact-layout"><div class="contact-copy"><h1>Have a good<br /><em>one in mind?</em></h1><p class="lead">I’m open to new opportunities, collaborations, and conversations. Tell me what you’re working on.</p><a class="contact-email" href="mailto:gyschad206@email.com">gyschad206@email.com <span>↗</span></a><div class="contact-details"><span>CAPE TOWN, SOUTH AFRICA</span><div><a href="https://github.com/Antonio1509" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/chad-gys-421420410" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></div>
      <form class="contact-form" @submit.prevent="submitForm"><label for="name">YOUR NAME</label><input id="name" v-model="form.name" name="name" placeholder="Name" autocomplete="name" required /><label for="email">EMAIL ADDRESS</label><input id="email" v-model="form.email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required /><input type="hidden" name="_replyto" :value="form.email" /><label for="message">WHAT’S ON YOUR MIND?</label><textarea id="message" v-model="form.message" name="message" rows="4" placeholder="A few words about your project..." required></textarea><button class="button button-gold" type="submit" :disabled="sending">{{ sending ? 'Sending…' : 'Send an enquiry ↗' }}</button><p class="form-note" role="status" aria-live="polite">{{ status || 'Your message will be sent directly to Chad.' }}</p></form>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.05fr .85fr;
  gap: 12%;
  margin-top: 48px;
}

.contact-copy .lead {
  max-width: 390px;
}

.contact-email {
  display: inline-flex;
  gap: 25px;
  align-items: center;
  font: 500 17px var(--display);
  padding: 21px 0;
  margin-top: 20px;
  border-bottom: 1px solid #65583d;
}

.contact-email span {
  color: var(--gold);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 35px;
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #88867f;
}

.contact-details div {
  display: flex;
  gap: 24px;
}

.contact-details a {
  color: #d6d3cd;
}

.contact-details a:hover {
  color: var(--gold);
}

.contact-form {
  padding-top: 9px;
  display: flex;
  flex-direction: column;
}

.contact-form label {
  font: 9px var(--mono);
  letter-spacing: 1.2px;
  color: #aaa69b;
  margin: 0 0 9px;
}

.contact-form input, .contact-form textarea {
  border: 0;
  border-bottom: 1px solid #393936;
  background: transparent;
  color: var(--text);
  border-radius: 0;
  padding: 10px 0 14px;
  margin-bottom: 25px;
  outline: none;
  resize: vertical;
  font-size: 13px;
}

.contact-form input:focus, .contact-form textarea:focus {
  border-color: var(--gold);
}

.contact-form input::placeholder, .contact-form textarea::placeholder {
  color: #66645f;
}

.contact-form .button {
  align-self: flex-start;
  margin-top: 4px;
}

.form-note {
  color: #74736e;
  font-size: 10px;
  margin: 12px 0;
}

@media (max-width:800px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 50px;
    margin-top: 35px;
  }
}
</style>
