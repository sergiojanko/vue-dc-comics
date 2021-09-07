<template>
  <section id="main-menu-section">
    <ul>
      <li v-for="item in items" :key="item.text">
        <a href="#">
          <img :src="getImageUrl(item.image)" alt="">
          <p>{{icon.text}}</p>
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
            image: "buy-comics-digital-comics.png",
            text: "digital comics"
          },
          {
            image: "buy-comics-digital-merchandise.png",
            text: "dc merchandise"
          },
          {
            image: "buy-comics-digital-shop-locator.png",
            text: "subscription"
          },
          {
            image: "buy-comics-digital-subscriptions.png",
            text: "comic shop locator"
          },
          {
            image: "buy-dc-power-visa.svg",
            text: "dc power visa"
          },
        ],
      }
    },
    methods: {
      getImageUrl(img){
        return require("@/assets/img/" + img);
      },
    }
};
</script>

<style scoped>
  #main-menu-section
  {
    background-color: dodgerblue;
  }
</style>