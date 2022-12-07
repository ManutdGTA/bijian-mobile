<template>
  <div class="indicator">
    <BackBox></BackBox>
    <div class="indicator_box">
      <div class="indicator_title">比特币投资者工具：两年MA乘数指标</div>
      <div class="indicator_tips">
        价格跌至2年均线（绿色）买入，超过2年均线x5（红色）卖出
      </div>
      <div class="echarts">
        <div>
          <div
            id="echarts"
            style="
              user-select: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              position: relative;
            "
            _echarts_instance_="ec_1670390387935"
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
      <div class="indicator_line"></div>
      <div class="indicator_introduce">
        <div class="indicator_title">比特币逃顶指标·抄底买入信号解读</div>
        <div class="introduce_box">
          <p>
            两年MA乘数指标旨在用作长期投资工具，它突出显示了在哪些时期买卖比特币会产生巨大回报。
          </p>
          <p>
            为此，它使用了2年移动平均值线2 Year Moving
            Average（等价730日线，绿色线），以及该移动平均值线的5倍乘积（红色线）。
          </p>
          <br />
          <p>历史上：</p>
          <p>
            当价格跌至2年均线（绿线）以下时，是一个抄底买入信号，购买比特币会产生超额收益。
          </p>
          <p>
            当价格超过2年均线x5（红线）上时，是一个逃顶卖出信号，出售比特币会获得较大收益。
          </p>
          <br />
          <p>为什么会这样？</p>
          <p>
            随着比特币的采用，它会经历牛熊周期，由于市场参与者过度兴奋导致价格过度上涨；同样的，由于市场参与者过度悲观导致价格过度回落。识别和理解这些时期可能对长期投资者有利。该工具是突出显示这些时期的一种简单有效的方法。
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
  name: "indicator",
};
</script>

<style lang="less">
.indicator {
  padding: 0 0 0.53333rem 0;
  background: #fff;
  font-size: 14px;
}
.indicator .indicator_box {
  padding-top: 0.53333rem;
  padding-bottom: 1.6rem;
}
.indicator .indicator_title {
  position: relative;
  margin: 0 0.4rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.indicator .indicator_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.indicator .indicator_tips {
  margin: 0.05333rem 0.4rem 0.4rem;
  font-size: 0.32rem;
  color: #767983;
  line-height: 0.53333rem;
}
.indicator .echarts {
  padding: 0 0.4rem 0.53333rem;
}
.indicator .indicator_line {
  height: 0.26667rem;
  background: #f8f9f9;
}
.indicator .indicator_introduce {
  padding: 0.4rem;
}
.indicator .indicator_introduce .indicator_title {
  margin: 0;
}

.indicator .indicator_title {
  position: relative;
  margin: 0 0.4rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.indicator .indicator_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.indicator .indicator_introduce .introduce_box {
  margin-top: 0.26667rem;
  font-size: 0.37333rem;
  color: #2d3240;
  line-height: 0.58667rem;
}
</style>
