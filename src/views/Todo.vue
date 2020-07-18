<template>
  <div class="Todo">
    <navbar />
    <kegiatan />
  </div>
</template>

<script>
// @ is an alias to /src
import kegiatan from "@/components/kegiatan.vue";
import navbar from "@/components/navbar.vue";
export default {
  name: "Todo",
  components: {
    kegiatan,
    navbar
  }
};
</script>
<style>
.Todo {
  height: 100%;
}
</style>
