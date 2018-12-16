<template>
  <nav class="c-main-menu">
    <ul class="c-main-menu__nav">
      <li class="c-main-menu__item">
        <router-link :to="{ name: 'Home' }" class="c-main-menu__link">
          <img class="c-main-menu__link-icon" :src="require('Assets/icons/home.svg')">
        </router-link>
      </li>
      <li class="c-main-menu__item">
        <router-link :to="{ name: 'Schedule' }" class="c-main-menu__link">
          <img class="c-main-menu__link-icon" :src="require('Assets/icons/schedule.svg')">
        </router-link>
      </li>
      <li class="c-main-menu__item">
        <router-link :to="{ name: 'Stats' }" class="c-main-menu__link">
          <img class="c-main-menu__link-icon" :src="require('Assets/icons/stats.svg')">
        </router-link>
      </li>
      <li class="c-main-menu__item">
        <router-link :to="{ name: 'Settings' }" class="c-main-menu__link">
          <img class="c-main-menu__link-icon" :src="require('Assets/icons/settings.svg')">
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

    name: 'TheMainMenu'

  }
</script>

<style lang="sass">
  @import 'Style/utils.sass'

  .c-main-menu
    width: 100%
    height: 50px
    border-top: 1px solid $c-third
    margin: 0
    padding: 0

    &__nav
      display: flex
      justify-content: space-between
      width: 100%
      height: 100%
      padding: 0
      margin: 0

    &__item
      display: block
      width: 100%
      border-right: 1px solid $c-third
      height: 100%

      &:last-of-type
        border: 0

    &__link
      display: flex
      justify-content: center
      align-items: center
      background-color: $c-primary
      height: 100%
      
      &.router-link-active
        background-color: $c-third

      &-icon
        width: 24px
        height: 24px
  
</style>
