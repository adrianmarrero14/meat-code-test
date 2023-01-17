<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");

h1 {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 700;
  font-size: 8vw;
  line-height: 100px;
  color: #3F454A;
}

h2 {
  font-family: "Caveat";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 38px;
  text-align: center;
  color: #3F454A;
}

p {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
}

ul li {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 70px;
    line-height: 60px;
  }
}

@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 100px;
    line-height: 60px;
  }
}
</style>
