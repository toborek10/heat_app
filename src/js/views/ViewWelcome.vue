<template>
  <div class="v-welcome">
    <div class="v-welcome__logo">
      <img class="v-welcome__logo-img" :src="require('Assets/imgs/heat-logo.svg')">
    </div>
    <div class="v-welcome__details">
      <p class="v-welcome__details-status">Connecting to server</p>
      <p class="v-welcome__details-error">No connection</p>
    </div>
    <div class="v-welcome__author">
      <p class="v-welcome__author-by">by</p>
      <img class="v-welcome__author-img" :src="require('Assets/imgs/toborek-logo.svg')">
    </div>
  </div>
</template>

<script>
  export default {

    name: 'ViewWelcome',

    mounted () {
      setTimeout(() => {
        this.$router.push({ name: 'Home' })
      }, 2000)
    }
  }
</script>

<style lang="sass">
  @import 'Style/utils.sass'

  .v-welcome
    height: 100%
    padding: 15vh 30px 30px 30px
    text-align: center

    &__logo

      &-img
        width: 150px
    
    &__details
      margin-top: 10vh
      &-status
        color: $c-secondary

      &-error
        color: $c-danger

    &__author
      position: absolute
      left: 0
      bottom: 0
      margin-bottom: 30px
      width: 100%
      
      &-by
        margin: 0 0 .5em 0
        color: #E5E5E5
        font-size: 0.75em

      &-img
        width: 150px
        transform: translateX(3.5%)
  
</style>
