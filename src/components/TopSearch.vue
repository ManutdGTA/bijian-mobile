<template>
  <div class="home_page">
    <div class="home_top">
      <div>
        <div class="top_search">
          <img
            src="data:image/png;base64,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"
            alt=""
            class="logo"
          />
          <div class="search" @click="handleGoSearch">
            <div class="search_left">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA15JREFUWEftl99LFFEUx79n1lUhZ38YW7uamUFU9lREilAhZYYP9RcE9RIlJGFS9gMiKDGyiIKKXgp68y0fhLASC6IiCoJ+EWSpuWtb7rhjkK57T8zMzrKt7s6stfXSvs2ec8/5nB/33Hupu7vbgX/4IzsAkUhEqqxcWQtJ2sigVQAvNJjpG4HfQoiHnz69e+z1ekWusVgBFMpu/z6AWkFYktU4YwTgC+pE6BqAabsgGQFcrkA9S3wdoCq7xgw9HiRBe6PRYL+ddXMCuLxl+7VomOFMpFoA3M/Et4kczxCbDur/OwsDzPH1xLQToHqAJb0whJiWtWhk9KoVxCwAzTkzX05ZOCAw0/ZdCb/IZmyBx7dWQkEXgM2mHhEdsIL4BUBLOxzo1SInImYhzg99fHPMbC6fz0dTU451gniF5kRiel9UFH8eDodZ+9aademy1R0kSYeYmfRMxNGUrRypAIWyx/8qWXPmLnUi1G5GI5eW7YbgkwAq0jIxDIlOqeOjN5O6bn8niNrMnlCV0JpMjZkEkN3+FhBdSBgZGBp83WBGLrv9h0HUkbWehKNqJHgumYmq6r5kOZhb1YnQpbnW6wBG6qo/GFuNhECsJrXmPp9P/jHj7CWglln0gXHXGAPYSiQ1MPC4uCDWFA6HVdOJ0RPOJ3pjMkaGPr5ePtec0AFcrkV1LDkeJBbfU5VgYzqtDhGT6lRl7E6qTPYsbix2ikepzpOl8AQ03S06q4hvika/PEq3awB4/EcYdEbfxcQtk5HQFavtY0de4vU3E5OeegIfjyqhs3MCyJ7ADQC7dKEk1anjn5/acWClI5eWb4AQZtS3VCW4JwNAWQ/ATbowPlOlquFhK+N25LLsq4CjYNDQpV5VGd2RAcDfA1CeAbhXVUKZAP5xCfLVhG5vebNgYd2EdrahnZqn68h2t6HVIJqP85wGkeYg2yjOFUAPKJdRnHCQ9TDKBUKez2GkObA6jq0g0o9jbaqQwHa7x7Fu/09eSIzRjhOTkWBnJvi8XMm0yAEkr/vZIPJ2KRUO1BDjtBl5Joi8XstLvIF2KwgrAD2A2Q8TSjxM2PJhMgsCaJtUghfNzNgCsOp+K3kSgvCVIbZNRsZe/lUAzVmJJ3AQJO6nOtcPaTtvQ6sIf0f+H+An/T8uX0fS2X4AAAAASUVORK5CYII="
                alt=""
              />
              <div>搜索币种、钱包、平台、资讯</div>
            </div>
          </div>
          <div class="meassage_box">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkhJREFUaEPtmL2LE1EUxc+dZGKZmS2MYGOnbqFWVhaC63+gjR9gpTuCYCtYBERsBWGzayW42Oh/sCtYWNnZrNrZCMZiM1Oaybwjs/nYZIyQ994MkuWlSoZ777vnnt8MkytY8o8sef9wAv63g84B54DlBP6JULDOU/TSKyBqlmfYpQsyUf77eFO+zys0X0CbXrOb/RDwhN3p5WQT8jNp1U6iLapYca6AZsRQMNgv5/hyqhD1laQjPW0BBL4AfF5OG7pV5KEAZ/MsYwEAduOOf1X36DLigyjdAbDmBDgHDHlyCI0G525iQ4LgEDqyCK3c+72qPG8bkBag+gSeJZ3Gywkql1kPV7NtEpcAigg/9vb8m/ggg3FMM+rfFeAR4DUAdj2lbu1vHdubxq0yhIIofQLg8fgwAb71Ov6Z8e8w4jli8HmGfcUL8VZjci2M0q8ETo9jKHiabPiTmvn1ygTMOoA+oZbLAdOnim5eZQ7oNmIa7wQc2ceoKRK6eQ4hh5AuM4V4h9Dwz7TGVoKg+P6n+IXMvkaMJhs84Hlm2UVQLbiTLWcroQUCISkEN5KN+rvpxOb9wTUQbwT0tQqOgrXWKrDczBVF2DevuZk7eBM02I0KvDWA14foDZ04GODM5OUtoXYXdsFoN7pw9UJgm17QzV4BvD0RAeAQG3kdt2p35u04TY9c8GbSKF8QcZhZfvN57fIF5FX/ElFN89UJGIkIf6n1/GvvuLdZJjbTPFTjgAZxtqFOgO0EbfOdA7YTtM13DthO0DZ/6R34A39W5kBsTkxaAAAAAElFTkSuQmCC"
              alt=""
              class="meassage"
            />
            <div class="reddot"></div>
          </div>
          <div>
            <div class="van-overlay" style="z-index: 2022; display: none">
              <div class="openApp_box">
                <img src="../assets/blackImg.7cd79bc9.png" alt="" />
                <div class="open_text">请点击右上角按钮，选择在浏览器打开</div>
                <i class="van-icon van-icon-close" style="font-size: 38px"
                  ><!----></i
                >
              </div>
            </div>
          </div>
        </div>
        <div class="top_tab_box">
          <div class="top_nav">
            <div>
              <div class="top_item">自选</div>
            </div>
            <div>
              <div class="top_item active_nav">市场</div>
            </div>
          </div>
        </div>
        <div>
          <div class="van-overlay" style="z-index: 2022; display: none">
            <div class="openApp_box">
              <img src="../assets/blackImg.7cd79bc9.png" alt="" />
              <div class="open_text">请点击右上角按钮，选择在浏览器打开</div>
              <i class="van-icon van-icon-close" style="font-size: 38px"
                ><!----></i
              >
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
  computed: {
    isShowSearch() {},
  },
  methods: {
    handleGoSearch() {
      this.$router.push({ name: "search" });
    },
  },
};
</script>

<style lang="less">
.home_page {
  font-size: 14px;
}
.home_page .home_top {
  //   height: 5.46667rem;
  padding-top: 0.26667rem;
  background: linear-gradient(180deg, #eaf3fb, #fff);
}
.top_search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.4rem;
  height: 1.17333rem;
}
.top_search .logo {
  width: 0.90667rem;
  height: 0.53333rem;
}
.top_search .search {
  flex: 1;
  background: #fff;
  border-radius: 0.21333rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.8rem;
  padding: 0 0.26667rem;
  color: #b7bac3;
  margin-left: 0.64rem;
  margin-right: 0.4rem;
}
.top_search .search .search_left {
  display: flex;
  align-items: center;
}
.top_search .search img {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.13333rem;
}
.top_search .meassage_box {
  position: relative;
}
.top_search .meassage {
  width: 0.64rem;
  height: 0.64rem;
}
.top_search .meassage_box .reddot {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.16rem;
  height: 0.16rem;
  background: #f44448;
  border: 0.02667rem solid #fff;
  border-radius: 50%;
}
.top_tab_box {
  height: 1.22667rem;
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
  color: #2d3240;
}
.top_tab_box .top_nav .top_item {
  margin-right: 0.4rem;
}
.top_tab_box .top_nav .active_nav {
  font-family: HarmonyOS_Sans_SC_Bold;
  font-size: 0.53333rem;
  color: #1069fb;
}
</style>
