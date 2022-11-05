<template>
  <router-view />
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
if (route.path === "/") {
  router.replace({ name: "home" });
}
</script>
