<template>
  <div>
    <HaAssetsTable :assets="assets" />
  </div>
</template>
<script>
import Api from "@/Services/Api";
import HaAssetsTable from "@/components/HaAssetsTable";
export default {
  name: "Home",
  components: {
    HaAssetsTable,
  },
  data() {
    return {
      assets: {},
    };
  },
  created() {
    Api.getAssets().then((assets) => (this.assets = assets));
    console.log(this.assets);
  },
};
</script>
