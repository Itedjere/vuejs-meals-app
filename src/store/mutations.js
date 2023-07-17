const mutations = {
    setSearchedMeals(state, searchedMeals) {
        state.meals = searchedMeals
    },

    setIngredients(state, Ingredients) {
        state.ingredients = Ingredients
    }
}

export default mutations