<template>
  <div class="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
  import LayoutMain from 'Layouts/LayoutMain'
  import LayoutNoMenu from 'Layouts/LayoutNoMenu'

  const defaultLayout = 'Main'

  export default {

    name: 'App',

    computed: {
      layout () {
        return 'Layout' + (this.$route.meta.layout || defaultLayout)
      }
    },

    components: {
      LayoutMain,
      LayoutNoMenu
    }

  }
</script>

<style lang="sass">
  .app
    width: 100%
    height: 100%

</style>
