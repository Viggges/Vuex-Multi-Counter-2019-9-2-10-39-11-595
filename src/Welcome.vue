<template>
    <div class="Welcome">
        <h1>Welcome to The International 9! {{username}}</h1>
        <router-link :to="'/welcome/'+username">Welcome</router-link>
        <br>
        <router-link :to="{name:'counter'}">Go to Counter</router-link>
        <br>
        <router-link :to="{name:'todoList'}">Go to todoList</router-link>
        <br>
        <router-view></router-view>
    </div>
</template>
<script>


export default {
  name: "Welcome",
  components: {
    
  },
  data: function() {
    return {
      username:""
    };
  },
  props:['username'],
  methods:{
      
  }
};
</script>
