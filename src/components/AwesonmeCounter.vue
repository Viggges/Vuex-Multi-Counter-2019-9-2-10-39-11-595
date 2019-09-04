<template>
    <div class="" v-if="counterSum>8">
        真棒！
    </div>
</template>
<script>
    export default {
        name: 'awsonme-counter',
        
        computed:{
            counterSum: function () {
                return this.$store.getters.counterSum;
            }
        }
    }
</script>