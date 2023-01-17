export const state = () => ({
  articles: [],
});

export const actions = {
  articlesFilterAction({ commit }, filter) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(
          `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${filter}`
        )
        .then((response) => {
          resolve(response);
          commit("SET_ARTICLES", response);
        })
        .catch((err) => console.log(err));
    });
  },
};

export const mutations = {
  SET_ARTICLES(state, resp) {
    state.articles = resp;
  },
};

export const getters = {};
