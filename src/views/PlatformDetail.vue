<template>
  <div class="page">
    <BackBox></BackBox>
    <div class="page_item">
      <div class="section_box">
        <div class="section_top">
          <div class="section_top_left">
            <div class="section_top_left_item">
              <div class="section_name">
                <img
                  alt=""
                  class="section_top_logo"
                  src="../assets/bitcoin.webp"
                />
                <div class="section_name_text">币安网</div>
                <div class="section_rank">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAbBJREFUOE+11DFME1EYB/D/dwd31BTTizEOEDYGTSBxUBebkHRzMOmACQmrE8GE2hiF4AJEB3qDzIw4lIW4qnFAB2NYQCYmJU6Q3EmblF659yd3CjlMba+X8saX9/3e9977vifo8pAuezgHjwvWJoD7CTf43Gc72SA2CjIhFob12U5oxQIF3ALgE3L3f5t2BFLksU6lFGS1G+BvV3MGbhyBXtr6RSDTDG2X4XcBdgnsi/CLWXI3AqQ+k8kTyEIwBMgtADfP8NYgsW1qJzkpVQ6bZcOp/mue2fOewO144J/X2jEajZysVA+iaGU6fd0wej+QGI3OtztyuFaANdN2JqOB9YL1lsDEv5nHAgkupGz35QXwqbVEYjYRKMK8ofd8bJyoRUX4pt4776njB4RWTgRqwidKyTMIBv8CPzRhSVHeJAI7acVYd3g5ILlH0V6Hr071HCLDSTolrENf8Cr10ynLOvwA4Tj02pD1SCdeEBhpWYf1glUhkBbwm65hSV923wnQ9EsjIH4x89BXmCPkjgBV03b6L3xfXvHqPV9pV1K2+6mTu2sUM2OEqhnLR1+DuFMI+coVTYU7cwAAAABJRU5ErkJggg=="
                    alt=""
                    class="info_box_right"
                  /><span>NO.1</span>
                </div>
              </div>
              <div class="section_price">$318.87亿</div>
              <div class="section_turnover">
                <div>24H平台成交额</div>
                <div style="color: rgb(248, 31, 36)">-15.41%</div>
              </div>
            </div>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAB8NJREFUaEPtWH1sU9cVP/c9+zk2YEihtEmpRNdkY1OlTU3LEOvUsCSlqEVQddkWExKbEGds0DHZcUgaZmWEhAS7oMBK8+1AiOmHqLJ2W9tVWwpVP6axrZq2scVdO4qA8FFCPuz42e+d6Tp+7ktqx8/GVoXU+0eU5J2v3/3dc+45lyAiC7fwIl8CmIO9skrbWgQSONbZ8od0kZxWBgxG62kAFAZczvxbDoCxorbAL/Cv08A5jivq62j+YzpApI2BEqNlCAAeCgVN4LS717nmlgFQurUmXwgG35QHnC4W0sJAidH6JgDOPPdpYiHlAMrMtocCvECPz+cWxzFFfR37U5oLKQdgMFpfQ8DCqOc9DSykFIBxa90qf9D/thQ8AfgTAPAoJTMAaFSqQldXS1SGkknylAIwmCy/QYS1UiAcw64XCPCCIITK6XRBIqcGXI7vJRNsNJ2UATBV1jw4FQi+E4px+seZAZfz2/T3EqPlLQD4jhQAq1IV9qeIhZQBMJisg4j4mBSkSqV64lhXyyv0b2OFrcA/gwU4NeBypoSFlAAwmWvvn+L596XdRyB/O+FyPCCnfDYLajVXcLSzmTJzUytpANuqGxZP3PDlYDCYKyCaAWF15IgwpLi/x/GyPDJ5axH+/18Zlm1jVYznNq1++ODBuqvJIJkTwPa65kWTV0ZzeRRyUYQcRMwhCDkIkAsAmVGTisDfzeXr78/Pz8fZ30tMllNyoPLvBGAUATwEyDAwMEwY1sMRGOYW6jztDvv1WOAiAIxVtQV8ILAKRMxFAjmAmAtAFie6KyzD/qi/p/WlaHpl5l2FAT7wWqI2AfAaEDLMABlGAh6WZd+VWvQIgC0/rvuab8pP+5esxB0AIICfEPJuVfnjRdF2X7JpMFpPImARAGiT8QMAF7QZmqKe55r+Hap28oms4ie7c7xe7+8B4O4YxnlCyEeI4CF0RxjiYVjGoyVqT17exnNmc56oJKihoSHy/OBbyyYmvLlCUMglBHJEkTIOOQDwFdqBx7DziU6nK+p+do9H+v65HKh6avfysTEvZWK5zIjIMkz5hnUrXyguLhaUBJmszJkzZ5gDR04UC0HxKADI5/WP9XpdYXvbno9n5E60mXjbtoa7R31jlAm6I6GFAOMcx64/2tEaaRWSDXIuvc2VdauDAf+rAKCXyXkWafVFR47YP5mtG7MKVT7VkDUxFgKxQqY0yXHcxnRNV2WVtQ8HAvwgAMyPHBFCzmboMh7p+VXjhahVb65XiaqfNy0du/7pGwB4X0QZwcdp1E/2dex7I5UM0ArF84GTBEAns/sP3QL9I92H7CNxy2gsAXph3bgy/joCfkt2nPwaNfPDvs79lOqbXuVm2zqeF14EgIyIMQIf3LFw8dp4F5yim7jK2pA5dm38t4D4oCxanlGxpce7Wk/eDIJNlTUbxEDQLa88tBHMXpL9qMNhiXmBxaxCsYKprd2n/9+lq68iYqRlQIQgq1IZj3e3nEgGRGml7ftCQDgGAGrZzr+Xlal/7Jln7DeU2FTEgGRo166W+edGrg4iig9HdgDg8oDLma3E2WyZEpP1HCBGdAnA23dk6tcfOGAfV2ovIQDUaE1Nq+7cyMhFAJgXckLIkLvXEX2EjBNFidFCB52CsJjv9nuW39lm3zGpNPiQ+0TfRnfubFoyMnrtkszJYbfLuTMRp5KswVTtQBQjuksW6O86NEfFieYjYQDlFbVreIGn90NoMQxbdbyntTsZAJsqqo2iIHZJumpO/ejRjn0z3pPi2U0YQGlF9Q5BEA9IhrkMzeq+55ro8J7wKquqeyDg978nKbIssfZ3Ow4mYihhAAaTtQMRt4SdiCvuWZ5pj3JuaWPo8/p+SeW0Ou0v5A2YFGA4n0YpkeF8crl7HVvTC8BoeQcBVoad/Nftcn5V7nDLT+uz/b6pelFEk6w8BhiG9Gq0GY2zW4ISo+WsrOf6s9vlXJU2ALQNbne9QncsXIFg0N3rfJI6tFqdmReuXbShiNuBxOj1EXyEIYezF2e1SpeUwWh5EQGeCAftXbPasEhpW55wFTJvr7t3fMIfGiSmE5g0LluxtPX82cs/E0S0EIBFSnYPAUZVDOO4a8Xtbef/daVaRHG3pJeh0Xy9t71pWImdhAFsrrBtDApCZFwkDPk1ivQ44Z1RHF5kWXYv/b8gCPUAEEWGXAKC7wPChkgiq1XF/Z0tMx4E5gKTUBJvMlXvFlG0x9md6wwhjmVLlx5qabF5qSxN1vOXL+8QEa2xHgMirLJMw/Hu/XvSwoDBZHkeEUJnfvZCQC/DMIezb1uw3xHjFcFqbci88Ol4tSji9llt82fmCDnp7nX8IC0ASoyWfwLAjKoDAAFCoGfeAn1jZ5udthhxFx2WJsfH6hGBluPPGrlpzf+4Xc5vxDUSFlB8hBoantWe/ehDWoGkOVUkhLwwfx5n7zjc9KFSh3I5WhQmJvkGRKQ7Pn0XAAh592UttFqtU0psKgZQvq0mj/cF6fMhMEB+p9Fo6nva936gxEk8mS1VT3/T7/c3ioDrqGwGx63s7Wj+Szw9+l0xgNKttnJBECtUKvXTxzqbTysxnqjM5sra7waDgb0sy3T3d7X2KdFXDIB2ofHGOyUOlcgk4ksxACWOvwiZLwF8Ebsu93nLM/B/sOhuXkH8KPIAAAAASUVORK5CYII="
            alt=""
            class="section_top_right"
          />
        </div>
      </div>
    </div>
    <div class="page_item">
      <div class="box_title echarts_date">成交额走势</div>
      <div class="echarts_box">
        <div>
          <div
            id="echarts"
            style="
              user-select: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              position: relative;
            "
            _echarts_instance_="ec_1670390387920"
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
    </div>
    <div class="page_item pintra_tab">
      <div class="page_tabs">
        <div class="tabs_item select">简况</div>
        <div class="tabs_item">行情</div>
        <div class="tabs_item">上新</div>
        <div class="tabs_item">币种</div>
        <div class="tabs_item">公告</div>
        <div class="tabs_item">资讯</div>
      </div>
      <div class="brief_box">
        <div class="brief_content">
          <div class="brief_content_symbol">币安网(binance)</div>
          <div class="brief_content_text">
            币安(Binance)，国际领先的区块链数字资产国际站，向全球提供广泛的数字货币交易、区块链教育、区块链项目孵化、区块链资产发行平台、区块链研究院以及区块链公益慈善等服务，目前用户
            <div class="brief_content_text_more">
              查看更多
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAK5JREFUWEft17EJgDAUhOEkTmDhaO5iYWnhrhZuYOQJglgldxeCEgfw/wjh8eLdGDtX8fMN8KkT6Idjsuuyb2FVXZvkO2DxGI/Fwt6HWYWAAEpEMsCiz1NQIbIAJRDZADUCAigRMECFoAAKBA1gERIAg5ABUMR/AOiUlJwAGr/GObsPMHEawMYpgCIOA1RxCKCMZwPU8SxAiTgMqLKU3rO+2lquege8/0NPQhbWACdsAeMBxtgjzgAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="brief_box_list">
          <div>
            <p>成立时间</p>
            <p>2017-07</p>
          </div>
          <div>
            <p>注册地</p>
            <p>马耳他</p>
          </div>
          <div>
            <p>KYC认证</p>
            <p>是</p>
          </div>
          <div>
            <p>支持中文</p>
            <p>是</p>
          </div>
          <div>
            <p>量化接口</p>
            <p>是</p>
          </div>
          <div>
            <p>资产实力</p>
            <p>¥3104.05亿</p>
          </div>
          <div>
            <p>币种数量</p>
            <p>352</p>
          </div>
          <div>
            <p>交易对数量</p>
            <p>1587</p>
          </div>
          <div>
            <p>交易支持</p>
            <p>法币,期货,场外,支付宝,银行支付,微信支付,现货</p>
          </div>
          <div>
            <p>相关链接</p>
            <div class="brief_item">
              <div>
                <a
                  href="https://accounts.bitechan.info/zh-CN/register?ref=186288211"
                  >https://accounts.bitechan.info/zh-CN/register?ref=186288211</a
                >
              </div>
              <div>
                <a
                  href="https://accounts.bitechan.org/zh-CN/register?ref=186288211"
                  >备用地址1</a
                >
              </div>
              <div>
                <a
                  href="https://accounts.binance.com/zh-CN/register?ref=186288211"
                  >备用地址2</a
                >
              </div>
              <div>
                <a
                  href="https://accounts.binance.me/zh-CN/register?ref=186288211"
                  >备用地址3</a
                >
              </div>
              <div>
                <a href="https://www.binancezh.top/zh-CN/register?ref=186288211"
                  >备用地址4</a
                >
              </div>
              <div>
                <a href="https://www.binance.com/">备用地址5</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackBox from "@/components/BackBox.vue";
export default {
  components: { BackBox },
  name: "platformDetail",
};
</script>

<style lang="less">
.page {
  background: #f9f9fa;
  min-height: 100%;
  padding-bottom: 1.6rem;
  font-size: 14px;
}

.page .page_item {
  padding: 0.4rem;
  box-sizing: border-box;
  margin-bottom: 0.26667rem;
  background: #fff;
}
.page .page_item .section_box .section_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
}
.page .page_item .section_box .section_top .section_top_left {
  display: flex;
  align-items: center;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_name {
  display: flex;
  align-items: center;
}
.page .page_item .section_box .section_top .section_top_left .section_top_logo {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.21333rem rem;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_name
  .section_name_text {
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #070d1e;
  font-size: 0.48rem;
  margin-right: 0.26667rem;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_name
  .section_rank {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.16rem;
  height: 0.48rem;
  background: #fef3eb;
  border-radius: 0.26667rem;
  color: #f87211;
  text-align: center;
  line-height: 0.48rem;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_name
  .section_rank
  img {
  width: 0.26667rem;
  margin-right: 0.08rem;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_name
  .section_rank
  span {
  font-family: HarmonyOS_Sans_SC_Medium;
  transform: scale(0.9);
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_price {
  font-family: HarmonyOS_Sans_SC_Bold;
  font-size: 0.64rem;
  color: #16b056;
  margin: 0.08rem 0;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_turnover {
  color: #2d3240;
  display: flex;
  align-items: center;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_turnover
  div:nth-child(2) {
  margin-left: 0.13333rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #16b056;
}
.page .page_item .section_box .section_top .section_top_right {
  width: 0.64rem;
  height: 0.64rem;
}
.page
  .page_item
  .section_box
  .section_top
  .section_top_left
  .section_top_left_item
  .section_price {
  font-family: HarmonyOS_Sans_SC_Bold;
  font-size: 0.64rem;
  color: #16b056;
  margin: 0.08rem 0;
}
.page .page_item .echarts_date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
}
.page .box_title {
  font-family: HarmonyOS_Sans_SC_Medium;
  font-size: 0.48rem;
  color: #101b37;
  height: 0.50667rem;
  line-height: 0.69333rem;
  margin-bottom: 0.4rem;
}
.page .page_tabs {
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
}
.page .page_tabs .tabs_item.select {
  border-radius: 0.16rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #fff;
  background: #1069fb;
}
.page .page_tabs .tabs_item {
  margin-right: 0.21333rem;
  height: 0.69333rem;
  line-height: 0.69333rem;
  padding: 0 0.26667rem;
  font-size: 0.37333rem;
  color: #2d3240;
  background: #f8f9f9;
  border-radius: 0.10667rem;
}
.page .brief_box {
  margin-top: 0.26667rem;
}
.page .brief_box .brief_content {
  color: #070d1e;
  font-size: 0.37333rem;
  line-height: 0.58667rem;
}
.page .brief_box .brief_content .brief_content_symbol {
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  margin-bottom: 0.13333rem;
}
.page .brief_box .brief_content .brief_content_text .brief_content_text_more {
  color: #1069fb;
  background: #fff;
  margin-left: 0.13333rem;
  display: inline-block;
}
.page
  .brief_box
  .brief_content
  .brief_content_text
  .brief_content_text_more
  img {
  display: inline-block;
  vertical-align: middle;
  width: 0.42667rem;
  margin-left: -0.10667rem;
  margin-top: -0.08rem;
}
.page .brief_box_list {
  margin-top: 0.26667rem;
}
.page .brief_box_list > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  padding: 0.13333rem 0;
}
.page .brief_box_list > div p:first-child {
  font-size: 0.32rem;
  color: #515561;
  line-height: 0.53333rem;
}
.page .brief_box_list > div p:nth-child(2) {
  font-size: 0.32rem;
  color: #070d1e;
  line-height: 0.53333rem;
  width: 73%;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  font-family: HarmonyOS_Sans_SC_Medium;
}
.page .brief_box_list .brief_item {
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #1069fb;
  text-align: right;
  width: 70%;
}
.page .brief_box_list .brief_item div {
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 0.26667rem;
}
.page .brief_box_list .brief_item a {
  color: #1069fb;
}
</style>
