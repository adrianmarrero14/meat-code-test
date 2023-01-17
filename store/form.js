export const state = () => ({});

export const actions = {
  formAction({ commit }, infoUser) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          `https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter`,
          infoUser
        )
        .then((response) => {
          resolve(response);
          console.log(response);
        })
        .catch((err) => console.log(err));
    });
  },
};

export const mutations = {};

export const getters = {};
