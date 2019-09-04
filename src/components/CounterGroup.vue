<template>
    <div class="counter-group">
        <h2>
            Counter Number:
            <span>{{counterNumber}}</span>
        </h2>
        <div class="counters">
            <Counter
                    v-for="(counter,index) in this.$store.state.counters"
                    :index="index"
                    :value="counter.value"
                    :key="index"
                    @update="handleValueChange"
            />
        </div>
        <CounterSum :counterSum="counterSum"></CounterSum>
        <AweSonmeCounter/>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import CounterSum from './CounterSum.vue'
    import AweSonmeCounter from './AwesonmeCounter'
    export default {
        name: 'counter-group',
        components: {
            Counter,
            CounterSum,
            AweSonmeCounter
        },
        props: {
            counterNumber: Number
        },
        computed: {
            
        },
        created: function () {
            
            // 根据 counterNumber 生成 counter 数据和组件
            // for (let i = 0; i < this.counterNumber; i++) {
            //     this.$store.state.counters.push({
            //         value: 0
            //     });
            // }
        },
        methods: {
            handleValueChange: function (index, value,) {
                this.$store.state.counters[index].value = value;
            }
        },
        data: function () {
            return {
               
            }
        }
    }
</script>
