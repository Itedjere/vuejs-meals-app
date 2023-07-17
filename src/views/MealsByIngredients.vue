<template>
    <div class="row">
        <div class="col-sm-12">
            <h1 class="fs-1">Meals For {{ keyword }}</h1>
        </div>
    </div>
    <div class="row" v-if="totalMeals > 0">
        <MealCard 
            v-for="meal in meals" 
            :key="meal.idMeal" 
            :meal="meal"
        />
    </div>
    <div class="row" v-else>
        <NoMeals />
    </div>
</template>


<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import MealCard from '../components/MealCard.vue';
    import NoMeals from '../components/NoMeals.vue';


    import store from '../store'

    const route = useRoute();
    const keyword = ref('');
    const meals = computed( () => store.state.meals )

    const totalMeals = computed( () => store.getters.totalMeals )

    function searchMeals() {
        store.dispatch('getMealsByIngredients', keyword.value);
    }

    onMounted(() => {
        if ( route.params.ingredient ) {
            keyword.value = route.params.ingredient
            searchMeals();
        }
    })
</script>