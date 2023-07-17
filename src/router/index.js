import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeMeal from '../views/HomeMeal.vue'
import MealDetails from '../views/MealDetails.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import Ingredients from '../views/Ingredients.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeMeal
            },
            {
                path: '/home-meal',
                name: 'home_meal',
                component: HomeMeal
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients,
            },
            {
                path: '/by-ingredients/:ingredient?',
                name: 'byIngredients',
                component: MealsByIngredients
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router