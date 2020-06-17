import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    deposit: [0, 0, 0, 0, 0, 0],
    sumMoney: 1000,
    dice: [0, 1, 2],
  },
  getters: {},
  mutations: {
    SET_DEPOSIT(state, id) {
      var a = state.deposit[0];
      var b = state.deposit[1];
      var c = state.deposit[2];
      var d = state.deposit[3];
      var e = state.deposit[4];
      var f = state.deposit[5];
      if (id === 0) {
        a = state.deposit[0] + 1;
      }
      if (id === 1) {
        b = state.deposit[1] + 1;
      }
      if (id === 2) {
        c = state.deposit[2] + 1;
      }
      if (id === 3) {
        d = state.deposit[3] + 1;
      }
      if (id === 4) {
        e = state.deposit[4] + 1;
      }
      if (id === 5) {
        f = state.deposit[5] + 1;
      }
      return (state.deposit = [a, b, c, d, e, f]);
    },
    ROLL_PLATE(state, diceArr) {
      return (state.dice = diceArr);
    },
    OPEN_PLATE(state) {
      var sum = 0;
      for (let i = 0; i < state.deposit.length; i++) {
        if (state.deposit[i] > 0) {
          var index = state.dice.indexOf(i);
          if (index < 0) {
            sum -= state.deposit[i];
          } else {
            for (let j = 0; j < state.dice.length; j++) {
              if (i === state.dice[j]) {
                sum += state.deposit[i];
              }
            }
          }
        }
      }
      state.deposit = [0, 0, 0, 0, 0, 0];
      state.sumMoney += sum;
      return  state
    },
    RESET_MONEY(state){
        state.deposit=[0,0,0,0,0,0]
        state.sumMoney=1000
        return state
    }
  },
  actions: {
    setDeposit({ commit }, id) {
      commit("SET_DEPOSIT", id);
    },
    setRollPlate({ commit }, diceArr) {
      commit("ROLL_PLATE", diceArr);
    },
    setOpenPlate({ commit }) {
      commit("OPEN_PLATE");
    },
    setReset({commit}){
        commit("RESET_MONEY")
    }
  },
});
export default store;
