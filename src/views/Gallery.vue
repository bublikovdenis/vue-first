<template>
    <div>
        <router-link :to="{name: 'gallery-portraits'}">Портреты</router-link> |
        <router-link :to="{name: 'gallery-other'}">Другое</router-link>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
