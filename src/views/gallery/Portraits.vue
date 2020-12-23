<template>
    <div class="portraits">
        portraits
        <img
            v-for="imageUrl in imageUrls"
            :key="imageUrl"
            :src="imageUrl"
            class="image"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

function importAll(r) {
  const imports = {};

  r.keys().forEach((key) => {
    imports[key] = r(key);
  });

  return imports;
}

export default defineComponent({
  setup() {
    const imageUrls = Object.values(
      importAll(
        require.context('@/assets/gallery/portraits', true, /\.jpg$/),
      ),
    );

    return { imageUrls };
  },
});
</script>
