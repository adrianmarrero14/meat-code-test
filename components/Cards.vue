<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374" @click="redirect(url)">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="image"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>

      <div>
        {{content}}
      </div>
    </v-card-text>



  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  props: {
    title: String,
    image: String,
    content: String,
    url: String
  },

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    redirect(url){
      window.open(url, "_blank")
    }
  },
};
</script>