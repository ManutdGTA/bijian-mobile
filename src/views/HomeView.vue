<template>
  <div class="home_page">
    <div data-v-6a9c87e9="" class="home_top">
      <div data-v-13aab065="" data-v-6a9c87e9="">
        <div data-v-13aab065="" class="top_tab_box">
          <div data-v-13aab065="" class="top_nav">
            <div data-v-6a9c87e9="" data-v-13aab065="">
              <div data-v-6a9c87e9="" data-v-13aab065="" class="top_item">
                自选
              </div>
            </div>
            <div data-v-6a9c87e9="" data-v-13aab065="">
              <div
                data-v-6a9c87e9=""
                data-v-13aab065=""
                class="top_item active_nav"
              >
                市场
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.home_page[data-v-6a9c87e9] {
  background: #f9f9fa;
  min-height: 100%;
  padding-bottom: 2.93333rem;
  box-sizing: border-box;
}
.home_page .home_top[data-v-6a9c87e9] {
  height: 5.46667rem;
  padding-top: 0.53333rem;
  background: linear-gradient(1turn, #f9f9fa, #1069fb 50%);
}
.top_tab_box[data-v-13aab065] {
  padding: 0 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_tab_box .top_nav[data-v-13aab065] {
  display: flex;
  align-items: center;
  font-size: 0.42667rem;
  color: #fff;
}
.top_tab_box .top_nav .top_item[data-v-13aab065] {
  margin-right: 0.4rem;
}
.top_tab_box .top_tab_right[data-v-13aab065] {
  display: flex;
  align-items: center;
}
.top_tab_box .top_tab_right img[data-v-13aab065] {
  width: 0.64rem;
  margin-left: 0.26667rem;
}
.top_tab_box .top_nav .active_nav[data-v-13aab065] {
  font-weight: 700;
  font-size: 0.53333rem;
}
</style>
