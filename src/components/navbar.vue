<template>
  <v-app-bar tag="nav" color="blue darken-2" class="white--text font-weight-bold">
    <h3>ToDoList</h3>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      menus: ["Beranda", "About us"],
      collapseOnScroll: true
    };
  }
};
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css2?family=Galada&display=swap");

nav {
  h3 {
    font-family: "Galada", cursive;
    font-size: 30px;
  }
}
</style>
