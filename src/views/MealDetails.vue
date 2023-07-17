<template>
    <div class="col-sm-8 mx-auto">
        <div class="row">
            <div class="col-sm-12">
                <h1>{{ meal.strMeal }}</h1>
            </div>
            <div class="col-sm-12">
                <img 
                    :src="meal.strMealThumb" 
                    :alt="meal.strMeal"
                >
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-3">
                <span class="title">Category: </span>
                <span>{{ meal.strCategory }}</span>
            </div>
            <div class="col-sm-3">
                <span class="title">Area: </span>
                <span>{{ meal.strArea }}</span>
            </div>
            <div class="col-sm-3">
                <span class="title">Tags: </span>
                <span>{{ meal.strTags }}</span>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <p>{{ meal.strInstructions }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h3>Ingredients</h3>
                <ul class="list-group list-group-flush">
                    <li 
                        class="list-group-item" 
                        v-for="(ingredient, index) in IngredientsList"
                        :key="ingredient"
                    >{{ index + 1}}. {{ ingredient }}</li>
                </ul>
            </div>
            <div class="col-sm-6">
                <h3>Measures</h3>
                <ul class="list-group list-group-flush">
                    <li 
                        class="list-group-item"
                        v-for="(measure, index) in measuresList"
                        :key="measure"
                    >{{ index + 1 }}. {{ measure }}</li>
                </ul>
            </div>
        </div>
    
        <div class="row mt-3">
            <div class="col">
                <a :href="meal.strYoutube" class="btn btn-danger" target="_blank">Youtube</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import axiosClient from '../axiosClient';

    const meal = ref({})
    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
        let mealId = route.params.id 
        if ( ! mealId ) {
            router.push({ name: 'home_meal' });
        }

        axiosClient.get(`lookup.php?i=${mealId}`)
        .then(({data}) => {
            meal.value = data.meals[0]
        })
        .catch(error => console.log( error ))
    })

    function helperLooper( string ) {
        const Ingredients = []
        if ( ! Object.keys(meal.value).length ) {
            return Ingredients
        }
        for (let index = 1; index <= 20; index++) {
            const ingredient = meal.value[string + index];
            if ( ingredient ) {
                Ingredients.push( ingredient );
            }
        }

        return Ingredients;
    }

    const IngredientsList = computed(() => {
        return helperLooper('strIngredient')
    })

    const measuresList = computed(() => {
        return helperLooper('strMeasure')
    })
</script>

<style scoped>
    .title {
        font-family: 'Montserrat', sans-serif;
    }
</style>