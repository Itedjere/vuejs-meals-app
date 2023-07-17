<template>
    <div class="row">
        <div class="col-sm-12">
            <h1 class="fs-1">Meals By Letter</h1>
        </div>
    </div>
    <div class="row">
        <div class="com-sm-12 my-3 text-center">
            <RouterLink 
                :to="{ name: 'byLetter', params: { letter } }" 
                v-for="letter in letters" 
                :key="letter"
                class="text-decoration-none fs-5 px-2 letters"
            >
                {{ letter }}
            </RouterLink>
        </div>
    </div>
    <div class="row" v-if="totalMeals > 0">
        <MealCard 
            v-for="meal in meals"
            :meal="meal" 
            :key="meal.idMeal"    
        />
    </div>
    <div class="row" v-else>
        <NoMeals />
    </div>
</template>


<script setup>
    import MealCard from '../components/MealCard.vue';
    import NoMeals from '../components/NoMeals.vue';
    import { computed, onMounted, watch } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import store from '../store';

    const letters = computed(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    const meals = computed( () => store.state.meals || [] )
    const totalMeals = computed( () => store.getters.totalMeals )

    const route = useRoute()

    onMounted(() => {
        let letter = route.params.letter;
        if ( letter ) {
            store.dispatch('getSearchedMealsByLetters', letter)
        }
    })

    watch(() => route.params.letter, (newLetter) => {
        store.dispatch('getSearchedMealsByLetters', newLetter)
    })
    
</script>

<style scoped>
    a.letters {
        transition: all 0.3s ease-in-out;
        color: #000;
    }

    a.letters:hover {
        font-size: 1.5em !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
</style>0