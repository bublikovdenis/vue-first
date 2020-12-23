<template>
    <div class="wrapper" ref="container">
        <router-link
        :to="{name: 'gallery-portraits'}"
        class="gallery-nav-link"
        >
            Портреты
        </router-link>
         |
        <router-link
        :to="{name: 'gallery-other'}"
        class="gallery-nav-link"
        >
            Другое
        </router-link>
        <router-view />
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import { useWindowScroll, useElementBounding } from '@vueuse/core';

export default defineComponent({
  setup() {
    const container = ref(null);
    const { tilt, roll, source } = useElementBounding(container, {

    });

    return {
      container,
    };
  },
});
</script>
<style scoped>
.gallery-nav-link {
    font-size: 20px;
    text-decoration: none;
    color: var(--main-text-color);
    text-shadow: var(--main-text-shadow) 1px 0 10px;
}
.wrapper {
    background-image: url("./../assets/back.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    width: 100%;
    /* min-height: 2800px; */
  }
</style>
