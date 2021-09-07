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
*
{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container
{
  margin: 0 auto;
  max-width: 1500px;
}
.container .row
{
  display: flex;
  height: 100%;
}

.container .row .col
{
  height: 100%;
}

ul
{
    display: flex;
    align-items: center;
    height: 100%;

}
ul li
{
    list-style-type: none;
}

ul li a 
{
    text-decoration: none;
}
</style>
