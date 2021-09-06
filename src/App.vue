<template>
  <div id="app">
    <Header/>
    <Content/>
    <MainMenu/>
    <FooterTop/>
    <FooterBottom/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import MainMenu from './components/MainMenu.vue'
import FooterTop from './components/FooterTop.vue'
import FooterBottom from './components/FooterBottom.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    MainMenu,
    FooterTop,
    FooterBottom
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
