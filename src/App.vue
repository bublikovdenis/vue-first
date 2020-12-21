<template>
  <div>
    <TheNavigation></TheNavigation>
    <router-view />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  components: {
    TheNavigation,
  },
});
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  :root {
    --nav-text-color: white;
    --nav-text-hover-color: #02498c;
    --nav-color: #038cae;
    --nav-hover-color: #29D9C2;
  }
</style>
