<template>
    <div class="col-sm-4 mb-4">
        <div class="card">
            <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                <img 
                    :src="meal.strMealThumb" 
                    class="card-img-top"
                    :alt="meal.strMeal"
                >
            </RouterLink>
            <div class="card-body">
                <h5 class="card-title">{{ meal.strMeal }}</h5>
                <p class="card-text">{{ truncatedInstructions }}</p>
                <a :href="meal.strYoutube" target="_blank" class="btn btn-danger">Youtube</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { RouterLink  } from 'vue-router';
    const props = defineProps({
        meal: {
            type: Object,
            required: true
        }
    });

    const truncatedInstructions = computed(() => {
        if ( ! props.meal.strInstructions ) {
            return ''
        }
        return props.meal.strInstructions.split(" ").slice(0, 20).join(" ") + "..."
    })
</script>

<style scoped>
    div.card {
        transition: all 0.3s ease-in-out;
    }

    div.card:hover {
        transform: scale(1.05, 1.05);
    }
</style>