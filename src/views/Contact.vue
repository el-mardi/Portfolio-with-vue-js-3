<template>
    <div class="contact container">
        <h2>Contact me here for more informations </h2>
    <form  ref="form" @submit.prevent="sendEmail">
        <Input name="email" type="email" placeholder="Your Email" v-model="email"/>
        <Input name="subject" type="text" placeholder="Subject" v-model="subject"/>
        <textarea name="message" placeholder="Your message" v-model="message"></textarea>
        <button class="btn btn-submit" @click.prevent="sendEmail" type="submit">submit</button>
    </form>
    </div>
</template>

<script>
import Input from '@/components/input.vue'
import emailjs from '@emailjs/browser'

export default {
  data () {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  components: {
    Input
  },
  methods: {
    sendEmail () {
      // console.log(this.message, this.email, this.subject)
      emailjs.sendForm('service_9aq690q', 'template_mr56an9', this.$refs.form, 'VrbZFy8PUO1oDa3_O')
        .then((result) => {
          console.log('SUCCESS!', result.text)
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    }
  }
}
</script>

<style scoped src='../assets/contact.css'>

</style>
