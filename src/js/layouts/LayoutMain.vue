<template>
  <div class="l-main">
    <header class="l-main__header">
      <main-heading />
    </header>
    <main class="l-main__main">
      <slot/>
    </main>
    <menu class="l-main__menu">
      <main-menu />
    </menu>
  </div>
</template>

<script>
  import MainHeading from 'Components/TheMainHeading'
  import MainMenu from 'Components/TheMainMenu'

  export default {

    name: 'LayoutMain',

    components: {
      MainHeading,
      MainMenu
    }
  }
</script>

<style lang="sass">
  .l-main
    position: relative
    flex-direction: column
    display: flex
    width: 100%
    height: 100%
    overflow: hidden

    &__header
      flex-grow: 0
      flex-shrink: 0
      width: 100%

    &__main
      width: 100%
      height: 100%
      overflow: auto

    &__menu
      flex-grow: 0
      flex-shrink: 0
      height: 50px
      width: 100%
      padding: 0
      margin: 0

  
</style>
