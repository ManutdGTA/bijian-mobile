<template>
  <div class="premium">
    <BackBox></BackBox>
    <div class="premium_box">
      <div class="premium_price">
        <div class="price_item">
          <div class="price_title">USDT场外价格</div>
          <div class="price_num"><span>OKEx</span>7.05</div>
        </div>
        <div class="price_item">
          <div class="price_title">美元当前汇率</div>
          <div class="price_num">6.9783</div>
        </div>
        <div class="price_item">
          <div class="price_title">USDT溢价率</div>
          <div class="price_num">1.03%</div>
        </div>
      </div>
      <div class="premium_title">USDT场外价格和美元汇率走势图</div>
      <div class="echarts">
        <div>
          <div
            id="echarts"
            style="
              user-select: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              position: relative;
            "
            _echarts_instance_="ec_1670390387928"
          >
            <div
              style="
                position: relative;
                width: 368px;
                height: 213px;
                padding: 0px;
                margin: 0px;
                border-width: 0px;
              "
            >
              <canvas
                data-zr-dom-id="zr_0"
                width="736"
                height="426"
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 368px;
                  height: 213px;
                  user-select: none;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                "
              ></canvas
              ><canvas
                data-zr-dom-id="zr_1"
                width="736"
                height="426"
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 368px;
                  height: 213px;
                  user-select: none;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                "
              ></canvas>
            </div>
            <div class=""></div>
          </div>
        </div>
      </div>
      <div class="premium_line"></div>
      <div class="premium_introduce">
        <div class="premium_title">USDT溢价意味着什么意思？</div>
        <div class="introduce_box">
          <p>
            USDT溢价分为正溢价和负溢价，指的是场外买USDT的价格超过（或低于）人民币对美元的汇率。对市场的影响：
          </p>
          <p>
            1、USDT正溢价说明购买USDT的人多了，场外资金正在入场，一般对市场利好。
          </p>
          <p>
            2、USDT负溢价说明抛售USDT的人多了，场内资金正在流失，一般对市场不利。
          </p>
          <p>
            总而言之，USDT溢价可以作为短期市场资金量和活跃度的一个参考点，无论做现货还是合约都可以参考一下，但同时也要综合其他因素，比如基本面、技术指标、经济形式、局部战争等。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackBox from "@/components/BackBox.vue";
export default {
  components: { BackBox },
  name: "Premium",
};
</script>

<style lang="less">
.page {
  font-size: 14px;
}
.premium .premium_box {
  padding-top: 0.53333rem;
  padding-bottom: 1.6rem;
}
.premium .premium_price {
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
}
.premium .price_item:first-child {
  border: 0.02667rem solid #1069fb;
}
.premium .price_item {
  width: 2.96rem;
  background: #fff;
  border-radius: 0.10667rem;
}
.premium .price_item:first-child .price_title {
  background: #1069fb;
}
.premium .price_item .price_title {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #fff;
  text-align: center;
}
.premium .price_item .price_num {
  height: 1.17333rem;
  line-height: 1.17333rem;
  text-align: center;
  font-size: 0.48rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #070d1e;
}
.price_num span {
  margin-right: 0.10667rem;
  font-size: 0.37333rem;
  color: #767983;
}
.premium .price_item:nth-child(2) {
  border: 0.02667rem solid #f87211;
}
.premium .price_item:nth-child(3) .price_title {
  background: #ee0a24;
}
.premium .premium_title {
  position: relative;
  margin: 0.53333rem 0.4rem 0.4rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.premium .premium_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.premium .premium_line {
  height: 0.26667rem;
  background: #f8f9f9;
}
.premium .premium_introduce {
  padding: 0.4rem;
}
.premium .premium_title {
  position: relative;
  margin: 0.53333rem 0.4rem 0.4rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.premium .premium_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.premium .premium_introduce .introduce_box {
  margin-top: 0.26667rem;
  font-size: 0.37333rem;
  color: #2d3240;
  line-height: 0.58667rem;
}
.premium .price_item:nth-child(2) .price_title {
  background: #f87211;
}
.premium .price_item:nth-child(3) {
  border: 0.02667rem solid #ee0a24;
}
</style>
