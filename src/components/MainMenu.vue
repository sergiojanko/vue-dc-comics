<template>
  <section id="main-menu-section">
    <ul>
      <li v-for="item in items" :key="item.text">
        <a href="#">
          <img :src="getImageUrl(item.image)" :alt="item.text">
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    name: "MainMenu",
    data(){
      return {
        items: [
          {
            image: "../assets/img/buy-comics-digital-comics.png",
            text: "digital comics"
          },
          {
            image: "../assets/img/buy-comics-digital-merchandise.png",
            text: "dc merchandise"
          },
          {
            image: "../assets/img/buy-comics-digital-shop-locator.png",
            text: "subscription"
          },
          {
            image: "../assets/img/buy-comics-digital-subscriptions.png",
            text: "comic shop locator"
          },
          {
            image: "../assets/img/buy-dc-power-visa.svg",
            text: "dc power visa"
          },
        ],
      }
    },
    methods: {
      getImageUrl(img){
        return require(img)
      }
    }
};
</script>

<style scoped>
  #main-menu-section
  {
    background-color: dodgerblue;
  }
</style>