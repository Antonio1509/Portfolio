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
