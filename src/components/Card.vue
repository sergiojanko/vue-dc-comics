<template>
  <li>
      <img :src="url" :alt="series">
      <p>{{series}}</p>
  </li>
</template>

<script>
export default {
name: "Card",
props: ["url","series"],
}
</script>

<style scoped>

li img 
{
    height: 100px;
    width: 100px;
    object-fit: cover;
}
</style>

