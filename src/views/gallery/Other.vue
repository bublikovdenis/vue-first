<template>
    <div class="other">
        other
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
        require.context('@/assets/gallery/other', true, /\.jpg$/),
      ),
    );

    return { imageUrls };
  },
});
</script>
