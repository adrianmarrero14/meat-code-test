<template>
  <div>
      <div>
        <header position="absolute" class="d-flex">
          <h2>Logo</h2>
          <v-spacer></v-spacer>
          <img :src="require('~/assets/social/facebook.png')">
          <img :src="require('~/assets/social/instagram.png')">
          <img :src="require('~/assets/social/youtube.png')">
        </header>
        <div class="bigTitle">
          <h1>El secreto <br> de tu cocina</h1>
        </div>
        
        <v-img
          max-width="100%"
          position="relative"
          :src="require('~/assets/backgroundIndex.png')"
        ></v-img>
      </div>
      <div>
        <v-row justify="center" align="center" class="mt-5">
          <h2>Nuestros artículos</h2>
        </v-row>
        <v-container class="d-flex">
          <articles-filter />
          <v-row align="center"  >
            <v-col v-for="(item, index) in articles" cols="12" md="4" sm="6" xs="1" :key="index" >
              <cards :title="item.title" :image="item.image" :content="item.content" :url="item.url"  />
            </v-col>
          </v-row>
        </v-container>
      </div>

    <div>
      <v-row justify="center" align="center" class="mt-5">
        <h2>Contáctanos</h2>
      </v-row>
      <div class="formContainer">
        <v-row justify="center" align="center" class="mt-5">
          <v-col v-for="(item, index) in formData" cols="6" :key="index">
            <div>
                <h3>{{ item.title }}</h3>
                <input type="text" v-model="item.value" >
            </div>
          </v-col>
          <v-col> 
            <div @click="sendData()">
              <button-form >Enviar</button-form>
            </div>
          </v-col>
        </v-row>
      </div>
      

    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  data(){
    return {
      formData: { firstname: { title: 'NOMBRE', value: '' }, 
                  lastname: { title: 'APELLIDO', value: '' }, 
                  mail: { title: 'MAIL', value: '' }, 
                  phoneNumber: { title: 'TELEFONO', value: '' }},
    }
  },
  methods: {
    ...mapActions("form", ["formAction"]),
    sendData(){
      let data = {
        firstname: this.formData.firstname.value,
        lastname: this.formData.lastname.value,
        email: this.formData.mail.value,
        phone: this.formData.phoneNumber.value
      }
      console.log(data)
      this.formAction(data)
    }
  },
  computed: {
    ...mapState("products", ["articles"]),
  },
};
</script>

<style scoped>
header {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 13vh;
  display: flex;
  align-items: center;
}
header h2 {
  margin-left: 3vw;
}
header img {
  width:100px;
  margin-right: 3vw;
}
.bigTitle {
  position: absolute;
  z-index: 2;
  top: 43vh;
  margin-left: 7vw;
}
.formContainer {
  margin-top: 40px;
  padding: 0 20%;
}
input {
    width: 100%;
    height: 60px;
    border: 1px solid #CFCFCF;
    padding-left: 20px;
}
</style>
