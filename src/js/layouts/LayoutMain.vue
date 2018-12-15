<template>
  <div class="l-main">
    <header class="l main__header">
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
  
</style>
