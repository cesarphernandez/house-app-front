<template>
  <main>
    <HaHeader />
    <router-view class="container px-5 sm:px-20 py-20 flex justify center" />
  </main>
</template>

<script>
import HaHeader from "@/components/HaHeader";
export default {
  name: "App",
  components: {
    HaHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
