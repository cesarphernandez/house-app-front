<template>
  <div>
    <loading
      v-model:active="isLoading"
      color="red"
      loader="dots"
      background-color="#c2c2c2"
      :is-full-page="true"
      transition="bounce"
    />
    <ring-loader :loading="isLoading" :color="'#501c94'"></ring-loader>
    <HaAssetsTable v-if="!isLoading" :assets="assets" />
  </div>
</template>
<script>
import Api from "@/Services/Api";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import HaAssetsTable from "@/components/HaAssetsTable";
export default {
  name: "Home",
  components: {
    HaAssetsTable,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      assets: {},
    };
  },
  created() {
    this.isLoading = true;
    Api.getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
