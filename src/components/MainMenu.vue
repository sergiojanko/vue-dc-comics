<template>
  <section id="main-menu-section">
    <ul class="container">
      <li v-for="item in items" :key="item.text">
        <a href="#">
          <img :src="getImageUrl(item.image)" alt="">
          <p>{{item.text}}</p>
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
            image: "buy-comics-merchandise.png",
            text: "dc merchandise"
          },
          {
            image: "buy-comics-subscriptions.png",
            text: "subscription"
          },
          {
            image: "buy-comics-shop-locator.png",
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
        console.log(img);
        return require("../assets/img/" + img);
      },
    }
};
</script>

<style scoped>
  #main-menu-section
  {
    background-color: dodgerblue;
  }
  ul
  {
    justify-content: center;
  }
  ul li
  {
    width: 25%;
    margin: 50px auto;
  }
  ul li a
  {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #fff;
  }
  ul li a img
  {
    max-width: 75px;
  }
</style>