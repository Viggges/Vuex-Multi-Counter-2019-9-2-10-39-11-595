<template>
  <div id="FirstPage">
      <input type="text" v-model="username">
      <button @click="gotoWelcome">Start</button>
  </div>
</template>

<script>


export default {
  name: "FirstPage",
  components: {
    
  },
  data: function() {
    return {
      username:""
    };
  },
  methods:{
      gotoWelcome:function(){
          this.$router.push('/welcome/'+this.username);
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
