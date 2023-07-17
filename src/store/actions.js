import axiosClient from '../axiosClient';

const actions = {
    getSearchedMeals({ commit }, keyword) {
        axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
        .catch(error => console.log( error ))
    },

    getSearchedMealsByLetters({ commit }, keyword) {
        axiosClient.get(`search.php?f=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
        .catch(error => console.log( error ))
    },

    getMealsByIngredients({commit}, keyword) {
        axiosClient.get(`filter.php?i=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
        .catch(error => console.log( error )) 
    },

    getAllIngredients({commit}) {
        axiosClient.get(`list.php?i=list`)
        .then(({data}) => {
            commit('setIngredients', data.meals)
        })
        .catch(error => console.log( error ))
    }
}

export default actions