<template>
    <div class="row">
        <div class="col-sm-12">
            <h1 class="fs-1">Ingredients</h1>
        </div>
    </div>
    <div class="row">
        <div class="com-sm-12 my-3">
            <input 
                type="text" 
                class="form-control form-control-lg" 
                placeholder="Search For Ingredients"
                v-model="ingKeyword"
            >
        </div>
    </div>
    <div class="row" v-if="totalIngredients > 0">
        <IngredientCard 
            v-for="ingredient in IngredientsList"
            :key="ingredient.idIngredient"
            :ingredient="ingredient"
        />
    </div>
    <div class="row" v-else >
        <NoMeals />
    </div>
</template>


<script setup>
    import { computed, onMounted, ref } from 'vue'
    import store from '../store'
    import NoMeals from '../components/NoMeals.vue';
    import IngredientCard from '../components/IngredientCard.vue';

    const ingKeyword = ref('')


    const IngredientsList = computed(() => {
        if ( ingKeyword.value == '' ) {
            return store.state.ingredients
        }

        return store.state.ingredients.filter((ingredient) => {
            if ( ingredient.strIngredient ) {
                let ingredientTitle = ingredient.strIngredient.toLowerCase();
                let keyword = ingKeyword.value.toLowerCase();
                if ( ingredientTitle.indexOf(keyword) > -1 ) {
                    return ingredient
                }
            }
        })
    });
    const totalIngredients = computed(() => store.getters.totalIngredients);

    onMounted(() => {
        store.dispatch('getAllIngredients');
    })
</script>