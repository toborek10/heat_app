<template>
  <div class="c-main-heading">
    <h1 class="c-main-heading__title">HEAT <span>{{ $route.name }}</span></h1>
    <div class="c-main-heading__notif">
      <img class="c-main-heading__notif-icon" :src="require('Assets/icons/no-connection.svg')">
    </div>
  </div>
</template>

<script>
  export default {

    name: 'TheMainHeading'

  }
</script>

<style lang="sass">
  .c-main-heading
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px

    &__title
      margin: 0

    &__notif
      height: 1.1em

      &-icon
        height: 100%
  
</style>
