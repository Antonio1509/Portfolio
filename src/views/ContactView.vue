<script setup>
import { reactive, ref } from 'vue'
import HeadingFlow from '../components/HeadingFlow.vue'
const form = reactive({ name: '', email: '', message: '' })
const status = ref('')
const sending = ref(false)
async function submitForm(event) {
  sending.value = true
  status.value = ''
  try {
    const formData = new FormData(event.currentTarget)
    formData.set('_subject', `New portfolio message from ${form.name}`)
    const response = await fetch('https://formspree.io/f/mjgznprl', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      const result = await response.json().catch(() => null)
      const errors = result?.errors?.map(({ message }) => message).join(' ')
      status.value = errors || 'Your message could not be sent. Please try again or email Chad directly.'
      return
    }
    status.value = 'Thanks — your message has been sent.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    if (!(error instanceof TypeError)) throw error
    status.value = 'A network error prevented your message from being sent. Please try again or email Chad directly.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="inner-page page-wrap contact-page">
    <p class="eyebrow">Contact</p>
    <div class="contact-layout">
      <div v-reveal class="contact-copy">
        <HeadingFlow><h1>Let's Connect and Collaborate</h1></HeadingFlow>
        <div class="contact-details">
          <div v-reveal class="contact-detail"><h2>Location</h2><span>Cape Town</span></div>
          <div v-reveal="1" class="contact-detail"><h2>Phone</h2><a href="tel:06835863">06835863</a></div>
          <div v-reveal="2" class="contact-detail"><h2>Email</h2><a v-magnetic class="contact-email" href="mailto:gyschad206@email.com">gyschad206@email.com <span>↗</span></a></div>
        </div>
      </div>
      <form v-reveal class="contact-form" action="https://formspree.io/f/mjgznprl" method="POST" @submit.prevent="submitForm">
        <label for="name">Full Name *</label>
        <input id="name" v-model="form.name" name="name" placeholder="Full Name" autocomplete="name" required />
        <label for="email">Email *</label>
        <input id="email" v-model="form.email" name="email" type="email" placeholder="Email" autocomplete="email" required />
        <input type="hidden" name="_replyto" :value="form.email" />
        <label for="message">Message *</label>
        <textarea id="message" v-model="form.message" name="message" rows="4" placeholder="Message" required></textarea>
        <button v-magnetic class="button button-gold" type="submit" :disabled="sending">{{ sending ? 'Sending…' : 'Submit' }}</button>
        <p class="form-note" role="status" aria-live="polite">{{ status || 'Your message will be sent directly to Chad.' }}</p>
      </form>
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
  gap: 20px;
  margin-top: 35px;
  font-size: 11px;
  color: #88867f;
}

.contact-detail h2 {
  margin: 0 0 3px;
  color: var(--text);
  font: 500 14px var(--display);
}

.contact-detail > span, .contact-detail > a:not(.contact-email) {
  color: #88867f;
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

.contact-form .button {
  transition: background .2s, transform .28s cubic-bezier(.2,.7,.2,1);
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
