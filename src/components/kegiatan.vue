<template>
  <div class="kegiatan blue mt-0 white--text">
    <h1 class="text-center mt-10">Selamat Datang {{$route.params.id}}</h1>

    <div class="input ml-6 mt-10">
      <input
        class="rounded-lg pa-2 mb-1"
        @keyup.enter="add"
        v-model="kegiatan"
        placeholder="Masukkan kegiatan..."
      />
      <v-btn @click="add" class="font-weight-bold">Masukkan</v-btn>
    </div>
    <v-row class="mx-2">
      <v-col cols="12" sm="6" md="6" xm="6">
        <v-card min-height="200px">
          <h3 class="text-center red--text pt-2">Belum</h3>
          <v-alert
            v-if="aktivitas.length>0"
            type="error"
            class="mt-4 mx-7 py-1"
            dense
            outlined
          >{{KegiatanBlm}} kegiatan belum dilaksanakan</v-alert>
          <div class="div" v-for="(aktif,i) in aktivitas" :key="i">
            <v-row class="text-center mt-3 d-flex" v-if="aktif.belum">
              <v-col cols="9" v-if="!aktif.edit" class="py-1">
                <p
                  class="py-3 px-1 white--text blue rounded-pill mb-1 ml-2 font-weight-bold"
                >{{aktif.nama}}</p>
              </v-col>
              <v-col cols="3" class="d-flex flex-wrap justify-start pa-0" v-if="!aktif.edit">
                <v-icon
                  size="30px"
                  @click="aktif.sudah=!aktif.sudah ; aktif.belum=!aktif.belum"
                  color="green"
                >mdi-check-circle</v-icon>

                <v-icon size="30px" color="orange" @click="aktif.edit=!aktif.edit">mdi-pencil-circle</v-icon>
                <v-icon size="30px" color="red" @click="hapus(i)">mdi-delete-circle</v-icon>
              </v-col>
            </v-row>

            <div v-if="aktif.edit && aktif.belum" class="mb-1">
              <input
                outlined
                class="rounded-pill mx-2 edit mb-2 border py-2 px-3"
                v-model="aktif.nama"
              />
              <v-chip class="white--text green" @click="perbaiki(aktif.nama,i)">edit</v-chip>
              <v-chip class="white--text red" @click="aktif.edit=!aktif.edit">Batal</v-chip>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6" xm="6">
        <v-card min-height="200px">
          <h3 class="text-center green--text pt-2">Selesai</h3>
          <v-alert
            v-if="aktivitas.length>0"
            type="success"
            class="mt-4 mx-7 py-1"
            dense
            outlined
          >{{KegiatanSls}} kegiatan sudah dilaksanakan</v-alert>
          <div class="div" v-for="(aktif,i) in aktivitas" :key="i">
            <v-row class="text-center mt-3 d-flex" v-if="aktif.sudah">
              <v-col cols="9" v-if="!aktif.edit && aktif.sudah" class="py-1">
                <p
                  class="py-3 px-1 white--text blue rounded-pill mb-1 ml-2 font-weight-bold"
                >{{aktif.nama}}</p>
              </v-col>
              <v-col cols="3" class="d-flex justify-start pa-0" v-if="!aktif.edit">
                <v-icon
                  size="30px"
                  @click="aktif.sudah=!aktif.sudah ; aktif.belum=!aktif.belum"
                  color="red"
                >mdi-alert</v-icon>

                <v-icon size="30px" color="orange" @click="aktif.edit=!aktif.edit">mdi-pencil-circle</v-icon>
                <v-icon size="30px" color="red" @click="hapus(i)">mdi-delete-circle</v-icon>
              </v-col>
            </v-row>

            <div v-if="aktif.edit && aktif.sudah" class="mb-1">
              <input
                outlined
                class="rounded-pill mx-2 edit mb-2 border py-2 px-3"
                v-model="aktif.nama"
              />
              <v-chip class="white--text green" @click="perbaiki(aktif.nama,i)">edit</v-chip>
              <v-chip class="white--text red" @click="aktif.edit=!aktif.edit">Batal</v-chip>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "kegiatan",
  data() {
    return {
      kegiatan: "",
      aktivitas: []
    };
  },
  computed: {
    KegiatanBlm() {
      const x = this.aktivitas;
      let y = x.filter(data => data.belum === true);
      return y.length;
    },
    KegiatanSls() {
      const x = this.aktivitas;
      let y = x.filter(data => data.sudah === true);
      return y.length;
    }
  },
  methods: {
    //Masukkan Kegiatan
    add() {
      const x = {
        nama: this.kegiatan,
        belum: true,
        sudah: false,
        edit: false
      };
      this.aktivitas.push(x);
      this.kegiatan = "";
    },
    hapus(i) {
      this.aktivitas.splice(i, 1);
    },
    perbaiki(x, y) {
      console.log(x);
      console.log(y);
      const z = this.aktivitas;
      z[y].nama = x;
      z[y].edit = false;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: 2px solid grey;
  background-color: white;
}
input:focus {
  border: 2px solid green;
}
.kegiatan {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
