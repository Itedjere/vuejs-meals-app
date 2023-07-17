<template>
    <div class="col-sm-6 my-2">
        <div class="card">
            <div class="card-body ingredient-card">
                <RouterLink 
                    :to="{ name: 'byIngredients', params: { 'ingredient': ingredient.strIngredient } }" 
                    class="d-block py-2 text-decoration-none"
                >{{ ingredient.strIngredient }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        ingredient: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
    .ingredient-card a {
        color: #000;
        font-weight: 600;
        font-size: 1em;
    }
</style>