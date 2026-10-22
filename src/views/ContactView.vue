<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import HeadingFlow from '../components/HeadingFlow.vue'
const formspreeEndpoint = 'https://formspree.io/f/mgobdenv'
const form = reactive({ name: '', email: '', message: '' })
const status = ref('')
const formState = ref('idle')
const toastMessage = ref('')
let toastTimer

async function submitForm(event) {
  if (formState.value === 'loading') return
  formState.value = 'loading'
  status.value = ''
  try {
    const formData = new FormData(event.currentTarget)
    formData.set('_subject', `New portfolio message from ${form.name}`)
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      const result = await response.json().catch(() => null)
      const errors = result?.errors?.map(({ message }) => message).join(' ')
      formState.value = 'error'
      status.value = errors || 'Your message could not be sent. Please try again or email Chad directly.'
      return
    }
    formState.value = 'success'
    status.value = 'Thanks — your message has been sent.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    formState.value = 'error'
    if (!(error instanceof TypeError)) {
      status.value = 'An unexpected error occurred. Please try again or email Chad directly.'
      throw error
    }
    status.value = 'A network error prevented your message from being sent. Please try again or email Chad directly.'
  }
}

async function copyEmail(event) {
  event.preventDefault()
  try {
    await navigator.clipboard.writeText('gyschad206@email.com')
    toastMessage.value = 'Copied'
    window.clearTimeout(toastTimer)
    toastTimer = window.setTimeout(() => { toastMessage.value = '' }, 1800)
  } catch (error) {
    if (!(error instanceof DOMException) && !(error instanceof TypeError)) throw error
    toastMessage.value = 'Copy unavailable — opening email instead.'
    window.location.href = 'mailto:gyschad206@email.com'
    window.clearTimeout(toastTimer)
    toastTimer = window.setTimeout(() => { toastMessage.value = '' }, 3000)
  }
}

onBeforeUnmount(() => window.clearTimeout(toastTimer))
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
          <div v-reveal="2" class="contact-detail">
            <h2>Email</h2>
            <a v-magnetic class="contact-email" href="mailto:gyschad206@email.com" @click="copyEmail">
              gyschad206@email.com <span>↗</span>
            </a>
            <span v-if="toastMessage" class="copy-toast" role="status" aria-live="polite">{{ toastMessage }}</span>
          </div>
        </div>
      </div>
      <form v-reveal class="contact-form" :action="formspreeEndpoint" method="POST" @submit.prevent="submitForm">
        <div class="form-field">
          <label for="name">Full Name *</label>
          <input id="name" v-model="form.name" name="name" placeholder="Full Name" autocomplete="name" required />
        </div>
        <div class="form-field">
          <label for="email">Email *</label>
          <input id="email" v-model="form.email" name="email" type="email" placeholder="Email" autocomplete="email" required />
        </div>
        <input type="hidden" name="_replyto" :value="form.email" />
        <div class="form-field">
          <label for="message">Message *</label>
          <textarea id="message" v-model="form.message" name="message" rows="4" placeholder="Message" required></textarea>
        </div>
        <button v-magnetic class="button button-gold" :class="`is-${formState}`" type="submit" :disabled="formState === 'loading'">
          <span v-if="formState === 'loading'" class="submit-spinner" aria-hidden="true"></span>
          <svg v-else-if="formState === 'success'" class="submit-check" viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3.2 3.2L13 4.5" /></svg>
          <span>{{ formState === 'loading' ? 'Sending' : formState === 'success' ? 'Sent' : formState === 'error' ? 'Try again' : 'Submit' }}</span>
        </button>
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
  display: inline-block;
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}

.copy-toast {
  display: block;
  margin-top: 5px;
  color: var(--gold-bright);
  font: 10px var(--mono);
  animation: toast-enter .35s cubic-bezier(.22,1,.36,1) both;
}

@keyframes toast-enter {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
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

.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.form-field::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .45s cubic-bezier(.22,1,.36,1);
}

.form-field:focus-within::after { transform: scaleX(1); }
.form-field:focus-within label { color: var(--gold-bright); }

.contact-form input, .contact-form textarea {
  border: 0;
  border-bottom: 1px solid #393936;
  background: transparent;
  color: var(--text);
  border-radius: 0;
  padding: 10px 0 14px;
  margin-bottom: 0;
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

.submit-spinner {
  width: 12px;
  height: 12px;
  border: 1px solid rgba(23,22,19,.35);
  border-top-color: #171613;
  border-radius: 50%;
  animation: submit-spin .7s linear infinite;
}

@keyframes submit-spin {
  to { transform: rotate(360deg); }
}

.submit-check {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: check-enter .35s cubic-bezier(.22,1,.36,1) both;
}

@keyframes check-enter {
  from { opacity: 0; transform: scale(.65); }
  to { opacity: 1; transform: scale(1); }
}

.contact-form .button.is-success { background: #b9c2a5; }
.contact-form .button.is-error { background: #d8a69d; }

@media (hover: hover) and (pointer: fine) {
  .contact-details a:hover { color: var(--gold); }
  .contact-email:hover span { transform: translate(3px, -3px); }
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

@media (prefers-reduced-motion: reduce) {
  .form-field::after, .contact-email span {
    transition: none;
  }
  .submit-spinner { animation: none; }
  .submit-check, .copy-toast { animation: none; }
  .contact-email:hover span { transform: none; }
}
</style>
