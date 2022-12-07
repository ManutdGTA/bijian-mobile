<template>
  <div class="proportion">
    <BackBox></BackBox>
    <div class="proportion_box">
      <div class="proportion_select">
        <div class="proportion_item select">5分钟</div>
        <div class="proportion_item">1小时</div>
        <div class="proportion_item">4小时</div>
        <div class="proportion_item">12小时</div>
        <div class="proportion_item">24小时</div>
      </div>
      <div class="proportion_list">
        <div>
          <div class="list_type">
            <div style="width: 15%">交易所</div>
            <div class="list_type_cent" style="width: 21%">
              多单持仓
              <!---->
            </div>
            <div class="list_type_cent" style="width: 44%">
              <!---->
            </div>
            <div class="list_type_cent" style="width: 16%">
              空单持仓
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">全网</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                61.18%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 99.1116px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                38.82%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Binance</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                65.68%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 106.402px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                34.32%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Okex</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                78.18%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 126.652px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                21.82%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Bitget</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                44.61%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 72.2682px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                55.39%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">CoinEx</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                48.09%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 77.9058px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                51.91%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Deribit</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                75.87%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 122.909px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                24.13%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Bitfinex</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                93.1%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 150.822px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                6.9%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">dYdX</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                73.9%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 119.718px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                26.1%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Bitmex</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                89.68%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 145.282px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                10.32%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Bybit</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                64.89%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 105.122px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                35.11%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Huobi</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                69.5%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 112.59px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                30.5%
              </div>
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 15%">
              <div class="list_cont_platform">Kraken</div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 21%">
              <div class="list_cont_platform" style="color: rgb(22, 176, 86)">
                93.15%
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 44%">
              <div
                class="van-progress"
                style="background: rgb(238, 10, 36); height: 10px"
              >
                <span
                  class="van-progress__portion"
                  style="background: rgb(22, 176, 86); width: 150.903px"
                ></span>
              </div>
              <!---->
            </div>
            <div class="list_cout_cent" style="width: 16%">
              <div class="list_cont_platform" style="color: rgb(238, 10, 36)">
                6.85%
              </div>
              <!---->
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import BackBox from "@/components/BackBox.vue";
export default {
  components: { BackBox },
  name: "proportion",
};
</script>

<style lang="less">
.proportion {
  padding: 0 0 0.53333rem 0;
  background: #fff;
  font-size: 14px;
}
.proportion .proportion_box {
  padding: 0.53333rem 0.4rem 1.6rem;
}
.proportion .proportion_select {
  display: flex;
  align-items: center;
  padding: 0.05333rem;
  background: #f3f3f5;
  border-radius: 0.4rem;
}
.proportion .proportion_select .proportion_item.select {
  color: #070d1e;
  background: #fff;
}
.proportion .proportion_select .proportion_item {
  width: 1.81333rem;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 0.26667rem;
  color: #767983;
}
.proportion .proportion_list {
  margin-top: 0.4rem;
}
.list_type {
  padding: 0.26667rem 0;
  display: flex;
  color: #7c8291;
  position: sticky;
  top: 1.17333rem;
  background: #fff;
  z-index: 9;
}
.list_type .list_type_cent {
  text-align: center;
}
.list_cont .list_cont_left,
.list_cont {
  display: flex;
  align-items: center;
}
.list_cont .list_cont_platform {
  font-size: 0.37333rem;
  color: #070d1e;
  line-height: 0.58667rem;
}
.list_cont .list_cont_platform {
  font-size: 0.37333rem;
  color: #070d1e;
  line-height: 0.58667rem;
}
.list_cont {
  padding: 0.26667rem 0;
}
</style>
