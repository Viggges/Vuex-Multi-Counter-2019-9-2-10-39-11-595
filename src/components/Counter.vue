<template>
  <div class="counter">
    <button class="plus" @click="plus">+</button>
    <span class="value">{{value}}</span>
    <button class="minus" @click="minus">-</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  props: {
    index: Number,
    value: Number
  },
  methods: {
    minus: function() {
      var element = this.$store.state.counters[this.index];

      this.$store.commit("minuValue", this.index, element.value);
    },
    plus: function() {
      var element = this.$store.state.counters[this.index];
      if (this.value > 9 || this.$store.getters.counterSum >= 10) {
        this.$router.push("/");
      }
      this.$store.commit("plusValue", this.index, element.value);
    }
  }
};
</script>
<style scoped>
</style>
