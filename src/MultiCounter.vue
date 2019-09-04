        
<template>
  <div id="MultiCounter">
    <CounterGroup :counterNumber="counterNumbers" />
  
  </div>
  
</template>
<script>
    import CounterGroup from './components/CounterGroup.vue'
   
    export default {
        name: 'MultiCounter',
        components: {
            CounterGroup
        },
        data:function(){
            return {
                counterNumbers:3
            }
        }
    }
</script>