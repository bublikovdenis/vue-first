<template>
  <nav class="navbar">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link active">Главная</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'gallery-portraits'}" class="nav-link active">Галерея</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
  .navbar {
    background: var(--nav-color);
    padding: 0;
    height: 55px;
    display: flex;
    box-shadow: 0px 0px 35px 20px var(--nav-color);
    /* align-items: center; */
  }
  .nav-item .nav-link{
    padding: 15px;
    /* padding-bottom: 15px; */
    height: 55px;
  }
  .nav-item:hover {
    background-color: #29D9C2;
    box-shadow: 0px 0px 50px 7px #29D9C2;
  }
  a {
    font-size: 14px;
    color: var(--nav-text-color);
  }
</style>
