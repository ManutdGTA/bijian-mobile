<template>
  <div class="home_page">
    <div class="home_top">
      <div>
        <div class="top_tab_box">
          <div class="top_nav">
            <div>
              <div class="top_item">自选</div>
            </div>
            <div>
              <div class="top_item active_nav">市场</div>
            </div>
          </div>
          <div class="top_tab_right">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABSRJREFUaEPtmWnolVUQxn9PmS1qG1FZtIGlEZUVhJWUWkhFIi1QtEBRUtnyIaJ9wxYJMopos1URpNXICgtKjfbFtg+VVLZQWhEttm8Tj5wbx9d777v8vZTwH7hf3jNnZp4zc84sV6zhpDXcfvoB/NceXK0eiIhtgJ2ATYF1gZ+AZcB7kr7tBdg+AYiIAcAhwDHAgcAWHYwM4F1gHjBL0hurC0wjABGxNnAKcAGwfQNjFgKXSXq2wd6VttQGEBG7AjOAPToob4XNb8BgYCvAniqSvTILOFPSD02B1AIQEccBdwDrZwptyNPAfcAzwBJJ/raCImIgsBtwMHA8MLxg7IfABEkOsdpUGUBEnAXcCCs9vQuA8yS9WkVzRKwF+BCuBLbL9nwDjJe0qIqcnKcSgHTyMwEbYHJ4nC7pnroKk1fWA24BTsr2fwXsK8keqUylAFLMvwRskKR+DUyU9GI7LRGxYbrYGwFfppD6owPvOcB1mVffBEZJ8gFVoq4A0mvzCrBndvLjJL1QlB4RRwFnAKMLl/Z74AlgqqR32uy7HLgi+361pEsqWV+I51X2RMQkYHq2cLKku3PGiNgcuB84oETpX8D1fnol/d3ijQgf4oPAEdkhjZD0cRUQHT2QktRiYIckaKGkMW1O0KfnU8zJBv6ahV1r7XdgTDH8ImJL4ANgUGK8VdLkvgI4FHg8CfGzuI+kl9sA8CHc7EsNOEFNBRY4jiNiM+Bw4NKUpY+W9EiH+zAl8Xl5OTBUknNKV+rmAb86J6Td8yWN6yQphYENnZPngCxMXBuNlOQ80ZYiYhNgaaqhzGOwDs3GAD5PWdQCTpN0e5mwvq5HxFzgsCRnuqRTy2S29UBEOP0bQIuGS/J96ClFhJ/VaUnJIkl7lSnsBMAvirOsyZdxUP5ylAltuh4R44En0/7lkpxT6odQRDieH047P5WUp/0ymY3XU9J8OxMwUFLbJNji6eQB1/ezE9NiScUCrLGR3TZGhJuh9zOeIZJ+7LanEwBfJF8o01JJvhM9p4hwzL+WFPnpHlAWup0A5IKclAZL+qXXCCLiyJSVrWqZpKFlOjsBGAJ8l1Wf+7Wrf8qE112PiGuAC9M+J8OxZTK6JTJXhrsnAVMkFcuFMtm11yPi9axwvEqSM3hX6gbAJYF7XtNHnjZIckHWE4oId21vZcJHS3q+TFk3ALsALn9bPJMk3VkmsOl6RLhGmpgd2LB2ZUlRflk/4KTi5GL6AthR0s9Njey0LyLcQ3hC0bLnbEk3VdFTBmAUYDe2WsnZko6tIrgqT6pY3TS1yvZPgJ2rvnpVWko3NG5sWnSxJL8WfaY0sXiq0Ay5XX20qvAqANxkOLmMSEKdYK4FDOTfzqqqwhZfOvmHgP2zvZUq0FxXKQAzR8Qw4LnC6PAxYLKkzxoYb6PvzcKmJcL9gmdEle9ZJQAJhCdynm3mZYWzsy/bNEkei3SliBgJuPOa0IWxFojKABKIbYEHgL0LBrhinJ9+fnrdWbVGi56deqrhyZzf+iLdlsYwXq/tiVoAEoh1gPOBiwojxjIHFNc9dfBzOTciPIqfkybdtUDUBpBdwq2Bc4ETgY1rWO/pww3AXZLcLK2gpiAaA8gUe0xo9x8EuIp1TW9Azh1/tv7gSPlkniRP+dpSExB9BtDOkjSlcDdVeURY4okZkuzpVagnAGqEUxVPLAHGSnKGXjMAZHfCT7RnpW2NN9//0gN1PNgPoM5p9YK33wO9ONU6Mvs9UOe0esH7D476ukDFK4UxAAAAAElFTkSuQmCC"
              alt=""
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAe9JREFUaEPtmb1KHVEUhb+VIoEQCRrQJgg2Ir6CTRAt9AViqohWYmWVZ0hlJVaGpIq+gBYRsckrBLERQpoIGoIhoIVbjpwbhuFeuXN+TIac6WbOWXvvtdc6d4Z9Rcsvtbx+CoG/rWBRoCgQ2YGuFjKzCWAtMnZq+Lqko3rQXgRmgE+pK4iMNytp/78kcAl8iOxeKPw18MiDgxX4IWkotIIYnJmdA4OFQFEg0EfFQr5x5RAHOohiobssZGaPgafAlaSzepfN7AEw7J+fSrrusucZ8BD4Kel3l/U87wEzewW898ld3h1JC50CzOw58BkY9c++AlOSvlX2bAMv/f0VsCjpY5VENguZ2S4wV+vYgKRf7pmZLQFbtfVlSe/8+hPgora+J2n+vgi0WwHfxfaegdCfxaa4bGegaSGh+wuB8ikR6h2PKxYqFvpHLNR0KnECvJVktc8CN4N6A4w14JVkKtEg35+tm8Bqh4SZueI3gJWQYB4TPFYJzXlLwoNji3dhGhEInY2+AMYrjB0Jd1U7fwwcBnSl/9loQPBbiJmNAAfAZI8YX4BpSd9Dc9Rxyf/guINE8uIdmeQEeiiRpfhsBGok3G1S21RtlEWBTgJvJ1J6PvsZSHU4+42TVYF+i4jZVwjEdC8FtiiQoosxMVqvwA20mHlAW/X4iQAAAABJRU5ErkJggg=="
              alt=""
              @click="handleShowDownload"
            />
            <span class="badge">5</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky">
      <div class="tabNav"></div>
      <div class="list_type">
        <span class="first">#</span>
        <span class="second">币种</span>
        <span class="third">市值($)</span>
        <span class="fourth">最新价</span>
        <span class="fifth">24H涨幅</span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  name: "HomeView",
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    handleShowDownload() {
      console.log("11");
      Dialog.confirm({
        message: "浏览器暂不支持评论，请到APP内进行操作。",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>
<style lang="less" scoped>
.home_page {
  background: #f9f9fa;
  min-height: 100%;
  padding-bottom: 2.93333rem;
  box-sizing: border-box;
  font-size: 12.8px;
}
.home_page .home_top {
  height: 5.46667rem;
  padding-top: 0.53333rem;
  background: linear-gradient(1turn, #f9f9fa, #1069fb 50%);
}
.sticky {
  // position: relative;
  // top: 1rem;
}
.top_tab_box {
  padding: 0 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_tab_box .top_nav {
  display: flex;
  align-items: center;
  font-size: 0.42667rem;
  color: #fff;
}
.top_tab_box .top_nav .top_item {
  margin-right: 0.4rem;
}
.top_tab_box .top_tab_right {
  display: flex;
  align-items: center;
}
.top_tab_box .top_tab_right img {
  width: 0.64rem;
  margin-left: 0.26667rem;
}
.top_tab_box .top_nav .active_nav {
  font-weight: 700;
  font-size: 0.53333rem;
}
.home_page .van-badge {
  border: none !important;
}
.van-badge .van-badge--fixed {
  top: 5px !important;
}
.badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: 0.42667rem;
  padding: 0 0.08rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.32rem;
  line-height: 1.2;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100%;
  border: none;
  transform: scale(0.9) translate(-49%, -90%);
}
.list_type {
  display: flex;
  color: #7c8291;
  top: 1.22667rem;
  background: #fff;
  z-index: 9;
  position: relative;
  top: -4rem;
  padding: 0.2rem;
  border-radius: 0.26667rem;
  min-height: 1rem;
  align-items: center;
  justify-content: space-around;
  .first {
    width: 20%;
  }
  .second {
    width: 20%;
  }
  .third {
    width: 20%;
  }
  .fourth {
    width: 20%;
  }
}
</style>
