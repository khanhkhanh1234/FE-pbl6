<script setup>
import { ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import HeaderPage from "./components/HeaderPage.vue";
const route = useRoute()
const url = ref(route.path)
watch(() => route.path, (newURL, oldURL) => {
  url.value = newURL;
  console.log('url', url.value);
}
);
</script>

<template>
  <Notifications />
  <div class="app-container" :class="{'login-page': url === '/login'}">
    <div class="max-w-[900px] mx-auto content">
      <HeaderPage v-if="url !== '/login' && url !== '/register'" />
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.app-container {
  min-height: 100vh;
  padding: 20px;
  background-color: rgb(241, 240, 240);
}

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: #ffff;
  padding: 20px 40px;
  border-radius: 20px;
}
</style>
