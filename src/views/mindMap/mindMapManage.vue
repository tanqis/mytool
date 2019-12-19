<template>
  <div class="minMapManage">
    <p>{{tempValue}}</p>
    <div class="options">
      <min-map-manage-com :arrDatas='minMapData'></min-map-manage-com>
    </div>
  </div>
</template>
<script >
import minMapManageCom from "@/components/minMapManageCom";
export default {
  name: "minMapManage",
  components: {
    minMapManageCom
  },
  data() {
    return {
      tempValue: "",
      minMapData: [
        {
          name: "A",
          children: [
            {
              name: "A-1",
              children: [
                {
                  name: "A-1-1"
                },
                {
                  name: "A-1-2"
                }
              ]
            },
            {
              name: "A-2"
            },
            {
              name: "A-3"
            },
            {
              name: "A-4"
            },
            {
              name: "A-5"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.minMapManage {
}
</style>