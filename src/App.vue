<template>
  <div class="home">
    <van-swipe :autoplay="3000" height="100" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="bar-chart-o">行情</van-tabbar-item>
      <van-tabbar-item replace to="/platform" icon="exchange"
        >平台</van-tabbar-item
      >
      <van-tabbar-item replace to="/news" icon="newspaper-o"
        >新闻</van-tabbar-item
      >
      <van-tabbar-item replace to="/guide" icon="guide-o">助手</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-circle-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import download from "@/assets/download.png";
import MainValueVue from "./components/MainValue.vue";
import TopSearch from "./components/TopSearch.vue";

export default {
  name: "HomeView",
  data() {
    return {
      active: 0,
      images: [download, download],
    };
  },
  components: {
    // HelloWorld,
    TopSearch,
  },
};
</script>
<style lang="less">
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.home img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
html {
  font-size: 40px;
}
</style>
