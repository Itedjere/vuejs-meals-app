<template>
    <div class="col-sm-12">
        <h1 class="fs-1">Random Meals</h1>
    </div>
    <div class="row">
        <MealCard
            v-for="meal in meals" 
            :key="meal.idMeal" 
            :meal="meal" 
        />
    </div>
</template>


<script setup>
    import { onMounted, ref } from 'vue';
    import MealCard from '../components/MealCard.vue';
    import axiosClient from '../axiosClient.js';

    const meals = ref([])

    onMounted(() => {
        let i = 0;
        while( i < 10 ) {
            axiosClient.get('random.php')
            .then(({data}) => {
                meals.value.push(data.meals[0])
            })
            .catch(error => console.log( error ))

            i++;
        }
    })
</script>