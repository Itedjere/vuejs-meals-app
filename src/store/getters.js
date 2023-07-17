const getters = {
    totalMeals(state) {
        return state.meals ? state.meals.length : 0;
    },

    totalIngredients(state) {
        return state.ingredients ? state.ingredients.length : 0;
    }
}

export default getters