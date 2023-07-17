import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./state";

const store = createStore({
    state,
    mutations,
    actions,
    getters,
})

export default store;