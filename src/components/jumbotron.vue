<template>
  <v-main class="coba blue darken-2">
    <v-container>
      <v-row
        class="white--text mt-md-0 mt-sm-10"
        justify="center"
        justify-lg="space-around"
        justify-md="space-between"
      >
        <v-col
          cols="10"
          sm="10"
          md="6"
          xl="6"
          class="ma-auto text-left"
          :class="{'text-center':$vuetify.breakpoint.xs}"
        >
          <h1>ToDoList merupakan platform yang membantu mengatur agenda anda</h1>
          <v-form class="mt-5">
            <div class="inputname d-block d-sm-flex justify-center">
              <div class="input mr-1" :class="{'max':$vuetify.breakpoint.xs}">
                <input
                  v-model="nama"
                  type="text"
                  class="pa-2"
                  @keydown.enter="submit"
                  :class="{'max':$vuetify.breakpoint.xs}"
                  placeholder="Masukkan nama"
                />
                <p
                  class="white--text text-left"
                  :class="{'coba':$vuetify.breakpoint.xs}"
                  v-if="ceknama"
                >Nama harus dimasukkan</p>
              </div>
              <v-btn
                @click="submit"
                class="blue white--text my-auto"
                :class="{'max mt-1':$vuetify.breakpoint.xs}"
              >Mulai Sekarang</v-btn>
            </div>
          </v-form>
        </v-col>
        <v-col cols="10" sm="10" md="6" xl="6">
          <v-img :src="image" width="650" class="mx-auto mt-15"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "jumbotron",
  data() {
    return {
      nama: "",
      ceknama: false,
      image: require("@/assets/todo.svg")
    };
  },
  methods: {
    submit() {
      if (this.nama === "") {
        return (this.ceknama = true);
      } else {
        this.$router.push(`Todo/${this.nama}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.coba {
  height: 100%;
  h1 {
    letter-spacing: 1px;
    line-height: 40px;
    font-family: Arial, Helvetica, sans-serif;
  }
  input {
    border-radius: 4px;
    background-color: white;
  }
  p {
    position: absolute;
  }
  .coba {
    position: relative;
  }
  .max {
    width: 100%;
  }
}
</style>>
