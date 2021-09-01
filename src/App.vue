<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <MoneyButton
        to="74"
        :amount="amount"
        :label="label"
        client-id="123"
        success-message="Yehah!"

        @payment="onPayment"
        @error="onError"
      />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { MoneyButton } from 'vue-money-button'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MoneyButton
  },
  data() {
    return {
      amount: '0.50',
      label: 'Send some loot',
      payment: null
    }
  },
  methods: {
    onPayment(payment) {
      console.log('onPayment event:', payment)
      this.payment = payment;
    },
    onError(error) {
      console.log('onError event:', error)
    }
  },
  mounted() {
    console.log(MoneyButton)
  }
}
</script>
