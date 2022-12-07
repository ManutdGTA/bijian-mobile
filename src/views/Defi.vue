<template>
  <div class="defi">
    <BackBox></BackBox>
    <div class="defi_box">
      <div class="defi_title">DeFi锁仓量及市值走势图</div>
      <div class="defi_select">
        <div class="defi_item select">30天</div>
        <div class="defi_item">90天</div>
        <div class="defi_item">一年</div>
        <div class="defi_item">所有</div>
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
            _echarts_instance_="ec_1670390387946"
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
              ></canvas>
            </div>
            <div class=""></div>
          </div>
        </div>
      </div>
      <div class="defi_line"></div>
      <div class="defi_list">
        <div>
          <div class="list_type">
            <div style="width: 25%">项目名称/类型</div>
            <div class="list_type_cent" style="width: 25%">
              锁仓量
              <!---->
            </div>
            <div class="list_type_cent" style="width: 25%">
              日变动
              <!---->
            </div>
            <div class="list_type_cent" style="width: 25%">
              周变动
              <!---->
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 25%">
              <!---->
              <div class="list_cont_platform">
                <p class="list_cont_symbol">Curve</p>
                <p class="list_cont_name">交易</p>
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi">$104.62亿</div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(238, 10, 36)">
                -1.59%
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(238, 10, 36)">
                -2.04%
              </div>
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 25%">
              <!---->
              <div class="list_cont_platform">
                <p class="list_cont_symbol">Maker</p>
                <p class="list_cont_name">借贷</p>
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi">$69.38亿</div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(238, 10, 36)">
                -3.35%
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(238, 10, 36)">
                -4.44%
              </div>
            </div>
          </div>
          <div class="list_cont">
            <div class="list_cont_left" style="width: 25%">
              <!---->
              <div class="list_cont_platform">
                <p class="list_cont_symbol">Lido</p>
                <p class="list_cont_name">Yield</p>
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi">$61.32亿</div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(22, 176, 86)">
                +0.25%
              </div>
            </div>
            <div class="list_cout_cent" style="width: 25%">
              <!---->
              <div class="list_cont_defi" style="color: rgb(238, 10, 36)">
                -0.09%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="defi_list_more" @click="handleJump('defiDetail')">
        查看更多
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div class="defi_line"></div>
      <div class="defi_introduce">
        <div class="defi_title">什么是DeFi？</div>
        <div class="introduce_box">
          <p>
            DeFi 是 Decentralized Finance
            的缩略词，国内一般翻译为去中心化金融。其实质是基于一套开放的账户体系，保证全球任何人都可以无门槛使用的一系列金融服务。这些金融服务主要由一些开源的智能合约来提供，整个服务的代码和账目都可以在区块链上进行公开审计。
          </p>
        </div>
        <div class="defi_title">如何计算总锁仓量？</div>
        <div class="introduce_box">
          <p>
            总锁仓量（TVL）是衡量一个DeFi项目使用规模时最重要的指标，通过计算所有锁定在该项目智能合约中的ETH及各类ERC-20代币的总价值（美元）之和而得到。
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
  name: "defi",
  methods: {
    handleJump(val) {
      console.log(val);
      this.$router.push({ name: val });
    },
  },
};
</script>

<style lang="less">
.defi {
  padding: 0 0 0.53333rem 0;
  background: #fff;
  font-size: 14px;
}
.defi .defi_box {
  padding-top: 0.53333rem;
  padding-bottom: 1.6rem;
}
.defi .defi_title {
  position: relative;
  margin: 0 0.4rem rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.defi .defi_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.defi .defi_select {
  margin: 0.4rem 0.4rem 0;
  display: flex;
  align-items: center;
  padding: 0.05333rem;
  background: #f3f3f5;
  border-radius: 0.4rem;
}
.defi .defi_select .defi_item.select {
  color: #070d1e;
  background: #fff;
}
.defi .defi_select .defi_item {
  width: 2.26667rem;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 0.26667rem;
  color: #767983;
}
.defi .defi_line {
  height: 0.26667rem;
  background: #f8f9f9;
}
.defi .defi_list {
  margin: 0.4rem 0.4rem 0;
}
.defi .list_type,
.defi .van-tabs__line {
  z-index: 0;
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
.list_cont {
  padding: 0.26667rem 0;
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
.list_cont .list_cont_platform .list_cont_symbol {
  font-size: 0.37333rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #070d1e;
  line-height: 0.58667rem;
}
.list_cont .list_cont_platform .list_cont_name {
  font-size: 0.26667rem;
  font-family: HarmonyOS_Sans_SC_Regular;
  color: #515561;
  line-height: 0.48rem;
}
.defi .defi_list_more {
  display: flex;
  margin: 0.13333rem auto 0.53333rem;
  width: fit-content;
  padding: 0.13333rem 0.50667rem 0.13333rem 0.72rem;
  background: #f8f9f9;
  border-radius: 0.4rem;
  font-size: 0.37333rem;
  color: #515561;
  line-height: 0.58667rem;
}
.defi .defi_list_more img {
  width: 0.48rem;
  height: 0.48rem;
  margin-top: 0.02667rem;
}

.defi .defi_line {
  height: 0.26667rem;
  background: #f8f9f9;
}
.defi .defi_introduce {
  padding: 0.4rem;
}
.defi .defi_introduce .defi_title {
  margin: 0;
}
.defi .defi_title {
  position: relative;
  margin: 0 0.4rem;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.defi .defi_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.defi .defi_introduce .introduce_box {
  margin-top: 0.26667rem;
  margin-bottom: 0.53333rem;
  font-size: 0.37333rem;
  color: #2d3240;
  line-height: 0.58667rem;
}
</style>
