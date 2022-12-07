<template>
  <div class="guide_page">
    <div class="comprehensive">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div class="comprehensive_tabs">
          <div class="tabs_item" @click="handleJump('premium')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>USDT溢价</p>
          </div>
          <div class="tabs_item" @click="handleJump('position')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>灰度BTC持仓</p>
          </div>
          <div class="tabs_item" @click="handleJump('indicator')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>逃顶指标</p>
          </div>
          <div class="tabs_item" @click="handleJump('halvingTime')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>减半时间</p>
          </div>
          <div class="tabs_item" @click="handleJump('proportion')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>多空比例</p>
          </div>
          <div class="tabs_item" @click="handleJump('transfer')">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>大额转账</p>
          </div>
          <div class="tabs_item" @click="handleJump('defi')">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA61JREFUaEPtWk9IFGEU/71xVy8aa38O3upUEB6KyMKgP2cVd3OMIKhdQTLoYhFkQQZpEFmHQkNohyCIHNlZ1HMWFGmhHSSoU908lCnpRXedF6vONLPuuuOsyOzO7G33e+997/e99377Zr5HcNmHXIYXOQE3ii1HCWoDgQ6qzFUCUalTDkllXhKIphn8lSEMxeXnn3L5lhVwqPliLbPwEMCxXEYctD5GpF6PDbz4kM2njICDYqQd4AcAShwExqorywDdUOToo0wK6wCvge2xat25cnQtE2gT4LU0fmeKLGOGgR6VKFaG+R+yLC85BaQoiqWLqNgnMIcIuAbCLoNvy0TqyfT0NgEOiuGPppolTFIyUReLvZx2CshsfoRCF6rY5x8B47BBZkyRpeNGHR3wGhuP64uMGVIT1YUAVvN5BbTgnzJGmiHUGNlbBxwUw/cA3NKUmdERH5TuOz2y6f41NoVvEqHb8HuXIku3te864JAYURjcqC0sgw4MydHvhQa4QYzsLwF/+w+Q4jE5GlwHuLEpPEaEGm3Bh4UyJxGU1YNPEVkS5YuGTB2PD0p6L2GM8CSDD2mCiizl7MKsOrHdckExzIYIf4nJUZ3IPMBehLc7HwEE2paugmmn6f9TVWOz/WVTVtwpuJQOtCX0GjT0BZ1zz/x3PcAZTsCLsNNZ2kvpVNoyCq+GK68k61ll49MMSKDJ2V7fsLEUiybCgbbEKIBTaTzzdq7Pf9oDnM6+hZjSXoRXo+iltONJq7J1sZoFIWQqO+I/c32lT9LIqDhIK3A5cQeEznSemevzm56pi6aGPcBrofYiXCyNh5fSXkqvnoDH0oXaabmuhjN1WiQIM7O9JU+NzYj152GXvbW08mZyI5mCe4m3LYDdeJnmrutS112Iu27kIUUUrhpqSQF23djSapRXpvDcMZim/f+5avRQA+2q4VJjp5NtfFiFupdAlfl2RXb0GTwrQPi5pePDuRwJiuEJwDTml0tlK9cnFFk6Yseg7dGkoBieB1CubZr0+fcMv+r/bceJXDr151t3+5KJXwa5eUWWduTSy7SeD+C/ACo0o0TqiY0Gs+04p/NJqKWWS9T3BhsLiizpe2/Gdj6A3wAwXXNuZuM8ZUcVWTpjx4ZtwGebL9WrTEN2Ns1bh1GvDEojduzYBrzamUW6mLnDzsZ2dYioOzYQ1ad+N2snL8Arndm5cB1UtANIsaaturLgdIogP0PAY+W1vcjqXGNhs6ISyTvChXYargP8D/L0oGpFSRwPAAAAAElFTkSuQmCC"
              alt=""
            />
            <p>DEFI数据</p>
          </div>
          <div class="tabs_item" @click="handleJump('computedPower')">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA1pJREFUaEPtW09o01AY/70uGcMdtl09KAyGkykDJx5ED8JO6oSOZTf/tMI0Fz3pxFNPY8yTp2jBBt3NlAaceBp4UDyIO4iKymCgh3nsBk7KkvVJ1qYkabqsbdKmy8vxfd/78/t+3/vyveR7BBF7yH7wplKp2Odvv88CuAJKj4PgMIDe/fQNUOcvKP6AkO8AXo2OHPmQSqWKXvN5Ap4UElMUmAMw5DVYm+WrBHiYU+TsXuuoCXhiYuYQ36M9p8BUm4HUNT0BslqBv760lP7n1tEVsAGW69HfAvRMXbOFRpl81AvcBTfQroAnhYTiwuw6oXhMd2JvdL1rrZYFW4V5lxRuZxD8ziVQcgfYjSuVx2A6p8iCcz1VgMt7VrF3JotagbvdbpC1jFnafvoTCnrVAVpw7mkb4FI0/vXDGqAIyGJOyVxrFXPNzDMpJF84QK+OjhwdtkZvG+C4kDwH0HeWSdf1Aj8UVmadxinFHm3V7t7kvKpk3pu6TsALAL1XEVLM5rLyQjNWb3Xf+PSNWVAyb9nNj1Qlc98d8FRiCQSXK8p67KSqPvva6kU3M188fvMEuOKXyhgUr9WsPFGD4cQKgFOmUC/wvZ3izuaay269ZTHaiqrIp2sBNgLWMVOoKrJnJtYMG0H1jQsJahn7p6rIwwywYYG4kKib4X5Rs1ozKNIq425IvKfXBcowAxwwx4xhFwMzl/YzSrM9zPawvxZoe9DyF44/owUatPxZor+jMMB+Rml/ufFnNMawnwz3i9pLJy8EdDkvdaed7QOiNk+BQWs7AdbyEv+gWnd7hoKMO9s3JH7ayw8CZdgt8SAg6bzE3XIurF/UPgEYc7SvbEh85YBuygZE/SkFnXEBHL7TEgNcpokxXDJEx7l0QEErpHvYK2I2Kg9t0GoUkFc/BrhsoQN7WmIMh4VhlmkBYJkWy7RsL6WOy7Sq/i0daJfuE/WqShmguLYpdRv/mm1Pn6iNA2TA3krzmxK/XK27PQbEbGdnQ2dT4mwFN24JTKDnYa+MqR1yBtjPTzztYNBrTsbwHgxHrKglemVLyYgVpkWt9DByxaVGuI9U+bD5fuukAnHSVbxICe42XCBugI7cFQATdGQueVhTt8hc47GCDulFrS1QrPt+UcsrUe80+X90wnNqfl4eOAAAAABJRU5ErkJggg=="
              alt=""
            />
            <p>全网算力</p>
          </div>
        </div>
        <div class="comprehensive_interest">
          <div class="comprehensive_title">全网BTC实时持仓量</div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>全网统计</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$99.04亿</p>
                <p>50%</p>
              </div>
              <van-progress
                :percentage="50"
                stroke-width="6"
                :show-pivot="false"
              />
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/openinterest_exchangelogo/202210209d233d990ccf4d38818642c285cc0e02.png"
                alt=""
              />
              <p>Binance</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$29.74亿</p>
                <p>30.02%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 63.9426px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/openinterest_exchangelogo/2022102082b3b743575d424f8726c13ae95af0a5.png"
                alt=""
              />
              <p>Okex</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$18.32亿</p>
                <p>18.49%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 39.3837px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/openinterest_exchangelogo/20221020157daaec3a074179b003b9ece11ddb32.png"
                alt=""
              />
              <p>Bybit</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$12.64亿</p>
                <p>12.76%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 27.1788px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/openinterest_exchangelogo/2022102067d351994583428c80dc38142b788424.png"
                alt=""
              />
              <p>Bitmex</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$2.26亿</p>
                <p>2.28%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 4.8564px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/openinterest_exchangelogo/20221020b546a4f440574bcb9c235caad698085b.png"
                alt=""
              />
              <p>Huobi</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$9583.39万</p>
                <p>0.96%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 2.0448px"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="liquidation_box">
          <div class="liquidation_tab">
            <div class="comprehensive_title">全网</div>
            <div class="liquidation_1h_24h">
              <div class="liquidation_1h_item">
                <div class="liquidation_item_tabs">1H爆仓</div>
                <div class="liquidation_item_num">$117.00万</div>
                <div class="liquidation_item_format">≈¥837.73万</div>
              </div>
              <div class="liquidation_24h_item">
                <div class="liquidation_item_tabs">24H爆仓</div>
                <div class="liquidation_item_num">$6545.78万</div>
                <div class="liquidation_item_format">≈¥4.69亿</div>
              </div>
            </div>
            <div class="liquidation_people">
              最近24小时，共有 <span>20725</span> 人爆仓
            </div>
            <div class="liquidation_people">
              爆仓总金额为 <span>$6545.78万</span>
            </div>
            <div class="liquidation_people">
              最大单笔爆仓发生在Bitmex-BTC USD价值
              <span>$122.55万</span>
            </div>
          </div>
          <div class="comprehensive_title">
            24H交易所爆仓统计
            <p>合约交易有风险，交易需谨慎。</p>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>全网统计</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$6521.55万</p>
                <p>100%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 213px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/qwhybc_exinfo/20221021e327be43d2c84f76bc49194312ce20b7.png"
                alt=""
              />
              <p>Binance</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$2307.43万</p>
                <p>35.38%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 75.3594px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/qwhybc_exinfo/20221021e9561704173e49869a01f5114fa9549c.png"
                alt=""
              />
              <p>Bybit</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$1397.25万</p>
                <p>21.43%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 45.6459px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/qwhybc_exinfo/20221021e3d6459d101349a293af49ae8d6d7dd6.png"
                alt=""
              />
              <p>Bitmex</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$1315.37万</p>
                <p>20.17%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 42.9621px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/qwhybc_exinfo/202210215a535fce52ca47df9b526802a2caf32f.png"
                alt=""
              />
              <p>Okex</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$654.59万</p>
                <p>10.04%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 21.3852px"
                ></span>
              </div>
            </div>
          </div>
          <div class="interest_item">
            <div class="interest_coin">
              <img
                src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/pcimages/hcp/qwhybc_exinfo/20221021a0b487be179e4fd89f13328075c4238d.png"
                alt=""
              />
              <p>Huobi</p>
            </div>
            <div class="interset_percentage">
              <div class="percentage_num">
                <p>$335.49万</p>
                <p>5.14%</p>
              </div>
              <div class="van-progress" style="height: 6px">
                <span
                  class="van-progress__portion"
                  style="background: rgb(16, 105, 251); width: 10.9482px"
                ></span>
              </div>
            </div>
          </div>
          <div class="comprehensive_title">各币种24H爆仓统计</div>
          <div class="liquidation_coin_box">
            <div class="liquidation_coin_item">
              <p class="coin_name">BTC</p>
              <p class="coin_price">$2602.65万</p>
              <p class="coin_format">≈1571.514/BTC</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">ETH</p>
              <p class="coin_price">$1662.27万</p>
              <p class="coin_format">≈1.39万/ETH</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">EOS</p>
              <p class="coin_price">$10.27万</p>
              <p class="coin_format">≈11.38万/EOS</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">BCH</p>
              <p class="coin_price">$20.50万</p>
              <p class="coin_format">≈1774.9525/BCH</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">LTC</p>
              <p class="coin_price">$138.93万</p>
              <p class="coin_format">≈1.80万/LTC</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">XRP</p>
              <p class="coin_price">$98.35万</p>
              <p class="coin_format">≈257.46万/XRP</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">BSV</p>
              <p class="coin_price">$0</p>
              <p class="coin_format">≈0/BSV</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">ETC</p>
              <p class="coin_price">$81.05万</p>
              <p class="coin_format">≈4.02万/ETC</p>
            </div>
            <div class="liquidation_coin_item">
              <p class="coin_name">TRX</p>
              <p class="coin_price">$22.95万</p>
              <p class="coin_format">≈436.47万/TRX</p>
            </div>
          </div>
          <div class="comprehensive_title">全网爆仓统计</div>
          <div class="liquidation_charts">
            <div class="liquidation_charts_top">
              <div class="charts_top_item">
                <p class="top_item_title">日期</p>
                <p class="top_item_val">2022.11.24</p>
              </div>
              <div class="charts_top_item">
                <p class="top_item_title sellvol">多单爆仓</p>
                <p class="top_item_val sellvol">$1489.27万</p>
              </div>
              <div class="charts_top_item">
                <p class="top_item_title buyvol">空单爆仓</p>
                <p class="top_item_val buyvol">$1861.79万</p>
              </div>
            </div>
            <div>
              <div
                id="echarts"
                class="echarts"
                style="
                  user-select: none;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  position: relative;
                "
                _echarts_instance_="ec_1669356451789"
              >
                <div
                  style="
                    position: relative;
                    width: 347px;
                    height: 213px;
                    padding: 0px;
                    margin: 0px;
                    border-width: 0px;
                  "
                >
                  <canvas
                    data-zr-dom-id="zr_0"
                    width="694"
                    height="426"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 347px;
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
              <div></div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import btc from "@/assets/bitcoin.webp";
export default {
  name: "GuideView",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      console.log("onLoad");
      setTimeout(() => {
        // 加载状态结束
        if (this.refreshing) {
          // this.list = [];
          this.refreshing = false;
        }
        console.log("onLoadOver");

        this.loading = false;
        this.finished = true;

        // 数据全部加载完成
        // if (this.list.length > 10) {
        //   this.finished = true;
        // }
      }, 500);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      // this.loading = true;
      this.onLoad();
    },
    handleJump(val) {
      this.$router.push({ name: val });
    },
  },
};
</script>

<style lang="less" scoped>
.guide_page {
  // height: 5.46667rem;
  padding: 0.53333rem 0.3rem;
  // background: linear-gradient(1turn, #f9f9fa, #1069fb 50%);
  // background-size: 100% 5.46667rem;
  // background-repeat: no-repeat;
  font-size: 16px;

  .comprehensive {
    margin-bottom: 1rem;
    background: #fff;
    border-radius: 0.11333rem 0.11333rem 0 0;
    .comprehensive_tabs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 0.26667rem;
      background: #fff;
      border-radius: 0.21333rem;
      .tabs_item {
        margin-bottom: 0.4rem;
        width: 2.13333rem;
        font-size: 0.32rem;
        font-weight: 500;
        color: #2d3240;
        line-height: 0.48rem;
        text-align: center;
        img {
          margin: 0 auto;
          width: 0.96rem;
          height: 0.96rem;
        }
      }
    }
    .comprehensive_interest {
      padding: 0.4rem 0.4rem 0 0.4rem;
      margin-top: 0.26667rem;
      background: #fff;
      border-radius: 0.21333rem;
    }
    .comprehensive_title {
      margin-bottom: 0.5rem;
      padding-left: 0.26667rem;
      font-size: 0.42667rem;
      font-weight: 600;
      color: #101b37;
      line-height: 0.64rem;
      position: relative;
    }
    .comprehensive_title:before {
      content: " ";
      width: 0.10667rem;
      height: 0.42667rem;
      background: #1069fb;
      border-radius: 0.05333rem;
      position: absolute;
      left: 0;
      top: 0.08rem;
    }
    .interest_coin,
    .interest_item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 0.53333rem;
        height: 0.53333rem;
        border-radius: 50%;
        margin-right: 0.13333rem;
      }
      p {
        font-size: 0.37333rem;
        font-weight: 600;
        color: #070d1e;
        line-height: 0.58667rem;
      }
    }
    .percentage_num {
      width: 5.33333rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.32rem;
      height: 0.53333rem;
      line-height: 0.53333rem;
      color: #070d1e;
      font-weight: 600;
    }
  }
  .comprehensive .liquidation_box {
    padding: 0 0.4rem 0.66667rem;
    margin-top: 0.26667rem;
    background: #fff;
    border-radius: 0.21333rem;
  }
  .comprehensive .liquidation_tab .comprehensive_title {
    margin-top: 0;
  }
  .comprehensive .liquidation_1h_24h {
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .comprehensive .liquidation_1h_24h .liquidation_1h_item,
  .comprehensive .liquidation_1h_24h .liquidation_24h_item {
    width: 4.21333rem;
    height: 2.50667rem;
    background: rgba(75, 149, 252, 0.1);
    border-radius: 0.10667rem;
    text-align: center;
  }
  .comprehensive .liquidation_1h_24h .liquidation_item_tabs {
    width: 1.86667rem;
    height: 0.61333rem;
    background: linear-gradient(90deg, #1069fb, #6fb0fd);
    border-radius: 0.10667rem 0 0.10667rem 0;
    text-align: center;
    line-height: 0.61333rem;
    color: #fff;
    font-size: 0.32rem;
  }
  .comprehensive .liquidation_1h_24h .liquidation_item_num {
    margin-top: 0.29333rem;
    font-size: 0.48rem;
    font-weight: 500;
    color: #070d1e;
    line-height: 0.64rem;
  }
  .comprehensive .liquidation_1h_24h .liquidation_item_format {
    margin-top: 0.13333rem;
    font-size: 0.32rem;
    color: #515561;
    line-height: 0.42667rem;
  }
  .comprehensive .liquidation_tab .liquidation_people {
    margin-top: 0.13333rem;
    font-size: 0.32rem;
    font-weight: 500;
    color: #101b37;
  }
  .comprehensive .liquidation_tab .liquidation_people span {
    color: #1069fb;
  }
  .comprehensive .liquidation_box .comprehensive_title p {
    font-size: 0.32rem;
    color: #767983;
    line-height: 0.53333rem;
    font-weight: 400;
    margin-left: -0.26667rem;
  }
  .comprehensive .liquidation_coin_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:first-child {
    background: url(data:image/png;base64,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);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .coin_name {
    font-size: 0.37333rem;
    font-weight: 500;
    color: #070d1e;
    line-height: 0.58667rem;
  }
  .comprehensive .liquidation_coin_box .coin_price {
    font-size: 0.32rem;
    font-weight: 500;
    color: #070d1e;
    line-height: 0.53333rem;
  }
  .comprehensive .liquidation_coin_box .coin_format {
    transform: scale(0.9);
    font-size: 0.26667rem;
    font-weight: 400;
    color: #515561;
    line-height: 0.48rem;
  }
  .comprehensive .liquidation_box .comprehensive_title {
    margin: 0.53333rem 0;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(2) {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACgCAYAAABE4VPuAAAAAXNSR0IArs4c6QAAEiJJREFUeF7tnTtvHMuVx091V3d1z6NH0nXP3mAYDSMyIp1QmaIr3ORmm23sBXbhBWz4AzA3YAM2dgEbcOZP4MQQ4EA3kiIy4kScaIjFguMr3WlSnOn34tSwZYqvmZ6pEqyp04CgB7tP9/mf+qmqTr0Y3L4OD61vf3jmnMfC/iqIWHLVYHfuoX8gBTZcAbdxVf4QBWVXxPlfv3qXwuFhcdPlT6D49ue/E9PcdjZcE3KPFKitgG/n6V9//19x9eBHcJ7/4je+iIVd2yI9QAoYokAs4vzNb385RXclOFTTGBJ5cnNtBaqah8HhofXiPGysbZEMkAKGKPC6O75iVNsYEm1yU5kCWOuwn/7sD402zyxlVskQKbDhClxkvGDf/OrXTUo5b3ikyT2lCmCqmr34j/9uKbVKxkgBAxQgcAwIMrmoXgECR72mZNEABQgcA4JMLqpXgMBRrylZNEABAseAIJOL6hUgcNRrShYNUIDAMSDI5KJ6BQgc9ZqSRQMUIHAMCDK5qF4BAke9pmTRAAUIHAOCTC6qV4DAUa8pWTRAAQLHgCCTi+oVIHDUa0oWDVCAwDEgyOSiegUIHPWakkUDFCBwDAgyuaheAQJHvaZk0QAFCBwDgkwuqleAwFGvKVk0QAECx4Agk4vqFSBw1GtKFg1QgMAxIMjkonoFCBz1mpJFAxQgcAwIMrmoXgECR72mZNEABQgcA4JMLqpXgMBRrylZNEABAseAIJOL6hUgcNRrShYNUIDAMSDI5KJ6BQgc9ZqSRQMUIHAMCDK5qF4BAke9pmTRAAUIHAOCTC6qV4DAUa8pWTRAAQLHgCCTi+oVIHDUa0oWDVCAwDEgyOSiegUIHPWakkUDFCBwDAgyuaheAQJHvaZk0QAFCBwDgkwuqleAwFGvKVk0QAECx4Agk4vqFSBw1GtKFg1QgMAxIMjkonoFCBz1mpJFAxQgcAwIMrmoXgECR72mZNEABQgcA4JMLqpXgMBRrylZNEABAseAIJOL6hUgcNRrShYNUIDAMSDI5KJ6BQgc9ZqSRQMUIHAMCDK5qF4BAke9pmTRAAUIHAOCTC6qV4DAUa8pWTRAAQLHgCCTi+oVIHDUa0oWDVCAwDEgyOSiegUIHPWakkUDFCBwDAgyuaheAQJHvaZk0QAFCBwDgkwuqleAwFGvKVk0QAECx4Agk4vqFSBw1GtKFg1QgMAxIMjkonoFCBz1mpJFAxQgcAwIMrmoXgECR72mZNEABQgcA4JMLqpXgMBRrylZNEABAseAIJOL6hUgcNRrShYNUIDAMSDI5KJ6BQgc9ZqSxTUVSGeXzAlcO89tB+ycO7PSKhzOOCuszCotDzxIWWm53GZFlrEMWOGUrJjBDHjBiiTLS/w99ViRz7LcYs20jC+y9xetshuu+XHXjxM4anQkK2sogKDMeGnZTou3ecYTVlp2btspKyyRc1Y4KZvDMrMAhHxTmWXM4TbDP6dZXjLOy/knxGCnvLR4Via2U8ZpVjrIXTktClvk+TTLf0zsrGkl+XuvVXZX/G4CZ0Xh6LHVFTgfj+Fp22dZ02dO9sHmuWN/4AX3wXbAcjlnpVVBsfpbPn0S4eJYKxVJZoGXQsazzH6XT3NWeBkr3l9My264fHVE4KiKDNl5VAGEBS8snNNJbjkBtzm7FJx33NLOucszVmTzGkT3ZfG8TDJelkmRp2maZHk7LhpX2cX/vSsgDGGZWojA0R0lsv+JAlesFA7+4plrM2GVPGPOZwLmdihSnpcs46XsH+VpBnEyS7M8drzWdbPv4eAROFSwtSuAfRg2K3ga+q5IHResQktzbFVHZDNOsOJDkudOliRxzBOrTNPH+kAEzqpq03MLmmbzH7fd3CqfWI5wUtcGT/hOan+uJtkqIZqmRS4A4nfJDwkXzxJsvt3X9yFwVlGXnnkcGvzpGOBp+5KVruUz1/FEaTmqO/y6woA1UGHn+bRkU/i7Nb3o2AWMx7J/Vl0Eji71DbeblZHjlqLBfCbKzP6YOv5SZKlS3PnFRXIl8mmj7MQ3v53A+VIi+QV85zlmzQDg6rIUrUbice64tl9a2ppm8yEdHLrRdpVpkSesTC/iZNbm/gyzg1jzEDjaJDfL8Dlmm0OAThy7vgM+b7Vdlie2LhWEEBB4Qo6HRpMY4lgfPTgzIWVlOovLK2f6IcEZCASOrsgaZFeO0eD4h5twXrCgtF3OobR0SRAIAWE3gG4YyNrmPIpgHMUQTSJdr5SzE8C1suTKinD6DoGjTWpzDGMT7VnJHM9J2sVnSALsbfdgqxdCFM1rGax9ojiCN0dDraIjPBYr0vez7IrA0Sr15hvHJtqznzCntC98z2l7OmsaVDPshvB8J4Qw6MLwDJEF6IWB7Oa8Ph7A+FxfrYPvwmZbCbOYwNn8sq3NQ2yitb9+Zrlx3mQu93zH0tanua5a4MVuH3b6XRAg4Hg4kv/c73VBCIDj4TkcnQy19nfwfZgwIHC0FStTDH9oWX5DOAVzdHscdAL4t2/2IRCBhOMmOL1uIJMEf/7+jfZaB/0kcHRHe0Pt4zSa1G+6T1gZZBpmM9+WLewE8HyvDztYu3hCQnIbnHiGtc4pnAzP4Exzk43A2dCCrdOtKhnAedbEBTK6ZwRg57+/FcKLvW3AWgeHb+4DB30eTyI4Hozg5PQMIo0pagJHZwnbUNsX2YXNC89r+lZLNzSy898NYbffg4PdrY+KPgQO3jAYjeBocAbD0Xwpg46LwNGh6obarEbNIZt63OMN23Zc3a5ibfNiHxMCW/MBz+vrMXCiWQzD4QheHelLFBA4uiO/afavEm499ZqQpd7nqG1wzGZ3pwf97qfLyx4D52aT7egU4VEfBAJHvaYbbdF20maZcc9xP08W7eXBDvTCzie1DQq8CJx4FsPZeAKv3g5kv0f1ReCoVnRD7eFAZ/vr3Gqz4onuKTUoITbRdjAhcLB7B5plwMF7EJ5Xb09gOB5L0FReBI5KNTfYVpV+brtph4OrbR5aJSGOy7zA2ibA9PNdYRfVONUTmJZ+MziFwemZ0ugQOErl3GBjVwkvGkWb246ru2+DEzh3ez042NmSYzb3XcuCg/XM8ckIjoZDpQOjBM4Gl3VVruG4TeuyFE+CMrB918JNAFXZvs/O3m4P9vvbgLXOQ9ey4FSJgsFwBG/kdBw1X07gqNFxo618HLd5arV070iDtc3znT7sbG9dbz14v7R1wEFWzkbn8ErhJFACZ6OLvBrnri4nouG2fNG27+ltqHmHtCIEvNzvy0mbOMXmsasOOFUyYXA2gteKxnYIHIVx31RTSXHV8Gzf15mCxtnNuGTgXw92QYjg3oTATX3rgoO1jsyyfX8Ew/No7RnUBM6mlnZFfmEauhtCyxasoXOtze1JnIs+vy44aA8ngWKtg9NxzuRa79UvAmd17Yx4ErerDZ6yluVYDV0OV5M4Xz4wZnPfe1cBp2qyvR2cwtHp2Vq1DoGjqzRsiN04jl3R4A3B9fVvcObzfr8nEwLLXquCg/aHo3M4Gp6tNbZD4CwbKUPvs5O0yRogdE3orCZx7vUfHrNRWePMm2yxXHaNWbZVZxQQOIYCsazbqXUZONx1BXP5ss/UuW9vtw/7/a1Hx2xUg4P25Lqd4eh6qXWdL57fS+DU18yoJwqYPfUslzMN+wkEHQHfHezJSZwPzRB4SOx1mmpVrYNbSv3l7dFKMwoIHKMwWMFZN/kJHsehOqOG0MhpNbiq84FpNY997brgzOEBeDs4gZPhuPYMagJnhbJk0iOuVYQ69hTAhABm0RYNdOqqcSq7uOjt9fEJHJ+Ooc58HALHJApW8NUWrHvzvM0VTNx5BKfV7Pd6sPfIJM5F71FR41TvOD4dyQ0+6iy1JnAWRcjwn6sGB+c678u90eonBG6GQiU44wlm2epNxyFwDAdjkftCwNeL7qnz895WCM/7OIlzmZM2H7asEhx8C67bwSbbsrUOgVMn6gbeqxIcrG2+e3kA/RWyaLelVw0Oju2Mown8+dXxUjMKCBwDYajjsqqmGg504jZP3x1sLzWJc9E3qgYH34eJAlxqfbbEUmsCZ1GEDP+5KnA+rrO53olzXVl1gIMzqOV0nMFwYZONwFk3ghv+vNsowiwurXWWS8uNN7ZDeLm3v3C5wLJy6gCnevf3R6dyqfVj03EInGUjZep9CgZAV5nEuUhuneAsMwmUwFkUIcN/rmLKDTbTwiCAbhBArxdAKDogOnhQx+qXanCwfzMeT2AcRXA+xhPeokc3bidwVo+dEU/GRdwRHnPWmuR5fV5nGAjY7oXymI4Aj+8MPMBjCfEgz/u2gHpMYBXgYCYNN2bHDTyieALROIbReDw/FnH2+LmiBI4RxX91J+c7d2aeg0firnHhjjX7/b4sqJMokr9jDdTv4+lqHVn71JnouQ44CAwmAvAoRNz9ZnK99Q1+TxAIOXdtiCtEH9kSh8BZozCY8KiyhWx44K0nALe0DYL5nh/jaCZTv5MoliesbffDpcd4VgGn2hZ3eDZ/ZycQ0OuFEApPnug2jmfwWm6Zu/gUawLHhNK/ho9TO7eaadZ2fOGvYWb+6PW2tru9EHq9rjwxGgcd8XS1+X/u85oAs3DYrJM10bobEsqBzRiiaHJ9Xg4iGstvkadXB535ke/RRO5FMBiNaQB07UCTgUoBdZt1VPD0ex9rF7kDzQQ3ST+Hs3EkC3KI/aBAgBDYD5rDdBOix2oc2RTDfgsCEs1gHCM48i0ySRHiJu7XB1RVMwYGw3GtfQioxiE4FiqA20O5Hm+slSC48RZsFuEsghd7u7Ig304MIBRYE8km1XVfCE+WxgVv4M2zcfeBIyutGdZikYQQs2NYs2zLZ7t3Mnl4P55SfTQYwWBUb/MOAmdhsaEb5IaEnZavdMMObCbhCtC9HVkD3G6SVR34qjkn08RVvyTE4wy9T45rx5oJ9xFA0Do4vScUECIs1+G7zz424XCKDS6jxuZinYvAqaOWoffiFrhtbvlW02sq3QJXCNjbmh9T2Nv6RyG/LTOmhrGpFeOSTWxwYdMrxtTx/NybKhuGzTm8Atm8E4CrTO+7quZZnT7NbTsEjqEw1HY7m3p2sxGoXkKNhX1/uyfX5+BA6aJB0Sozhtk4BAfv78imWHjvAVS3/Vy1T0Pg1C4x9IDczbOZ8DRggSgtZ515a/epibWDPFW6xoaE2LwaDPEcBYB+L4DeraMOH4oaPvfmuH6fhsAhDlZSAA+WcrgtdNQ6+EHzZQcBfHew/2AT6+aHrzKOg02+v3x/JKfS1O3TEDgrFRt6CP9v97MLu+PwJ8xt2KqbbBU882ZbCGH34T4P3lsXnKqGOjoZXo/nrBdT6uOsp59xT+dZ0rYbIFSlpm8LWG0btajPUwcchAYzbm8GZxApOkiXwDGu6K/psJtwyO2W7wmh62S2Zfo8y4KDzbPjAR5lqA4aVJDAWbMcmfT49ZEfkNu57xRWQ+95OY/3eZYBp85S6LpxJHDqKkb3w49XCX/SSD3L9pqqM2w35f1Hqvpun2cROB/7NAtWcq4aTgJnVeUMfg4TBZ04dptNq1VoSE/flPahPs9j4Ojo01BWzeACr8r18/EYnra3mMPfCzcQbZvpPYn6vj7PQ+Do6tPcAeebX/26mVw1tB6/rSpgZOefR4EKHotHLZ1Ztsrj2+M894Gjs09zU/kMWMF++rM/NNo8s/55QkJf8qUogE22Zz9GTvms5XtO5nFwtZajm30enNRZzRzAfQxwfhr+fdHuNCq0LdksZt/+/HdimttrLYtV8TFk48tUADNtre5ENKyWb3Pu6hgYva/Pg8sMcHYzXrhuB2cCqByneSgaaZaXDm+8Z3B4aL04D7UdjPplFgf66joKVMkC33PbYBVcZ6ZNgoIzn693zsG/RxHuShMrG9x8yHeL8zIu0mxy4fyv7NtQrVOnmNC9txVAcJ7OLhkTBXetdvA54MFvqJYRrDvvbJmIYk1T2E4OSfH31//zn5cfkwLPf/EbX8TCXsYI3UMK3IFHZtp8ZjV9j+Wp5wjf0d1s+1xRwGTALE+y4kNx+eZPv3yH7/0km0Y1z+cKxWa+Z55p85lV+h7zNwMehCZlZepe8uhvf/z3SRW5u2now0Pr2x+eOeexsL8KIkap6s0s5Lq8Qni6YQhZyRyLTVtY87jcZrrmtenyA4GxWZleTdkl/5fzi9eHh9nNd/0/8dkarkPCqw4AAAAASUVORK5CYII=);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(3) {
    background: url(data:image/png;base64,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);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(4) {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACgCAYAAABE4VPuAAAAAXNSR0IArs4c6QAAFadJREFUeF7tXc+PHMd1fvVrpnuWTWqGmo25RpYJCYQHBiAB66AAdgAjOQT5U2zISICcctLJB18SyPB/Y0CA44MODCAB2gMDLBEukGUwY80gbnG6t6u6Kng1O/tzdme6p4ayWK8hgZSm+nW/7/WHqvfqvVcMrlyffv6pHKTf9KCCblnXQokOuzqG/psQeN8R0HXlEiFq6MDJpLg/+/Snn5qLOl8ixWdffHJX8KRXlZrI8r5/GaTf2gh0EuVqW85+8fGv/7i46Ywgv/ztz++nHdVZWxoNJAQiQ6CodPWvf/+bb1BtTxycaepK7ESGA6lLCDRGQHTqtzjzMPRphjtvP6TlWWMM6YYIEcBl2/jtzh8YzTYRWp9U3ggBnHXYZ7/7ZFiDkBtJopsJgYgQEFAb9qvPf/YDCjlHZHVSdWMEMFTN/u13//RgY0kkgBCIDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSYkMASJOZAYndcMgQMQJgyNJiQwBIk5kBid1wyBAxAmDI0mJDAEiTmQGJ3XDIEDECYMjSQmIgNMlP+GJ6tS8o7lTIIArbnhdWSF5h2sLXHLDNVccH6ssWCachRqssc4Cr6zsduvKgk0qa7SoK/u21OYOr3vQC/KmRJwgMJKQTRCouGGu4JL3nHKzusOlFNxJUUsrXG24YILVnDNuLLNMMM4sAwVQG87mzzUgHHfWccdd7azkTlj8r9oZIa1gvLbc1NaY2tquVrbSJdRmRyW27XsTcdoiR/dtgMAMKt5hsraC245wwCTjTmkLXSlYp3K15GxBig0ec+FW66zrMGGMcJU9YZqLulKWa8urujDW7ihrocFsRMQJYxeSsgKB2WzmR/R6PajqWnAkimZph7NUKiZLKwT+7meTLV44D/nlnQBrtDNC8JlgtqyMqTripF6XPEScLRqJRF9GoCoNS3fSdGaKntQiYYkQujYcQG6dMMtsgSRCAjlT18aKqpO4t9rqWcdKT67bLiLOKoTo940RQB/GatlRIBLGXcqYVpVjwZdjbV8Ul3GCs5pbUXGwpQFTnhhT3eYDEXHaok33rVqc+d+ruis6UnZONKSS255hQm17OdbWNMYAJJLpWtSzLrhCm7riDP/v9UgcEactynTfSuI4zblm3TsyET2tTRra4d+WCXwgQYjKav1tDezbjhD1DGZwMZRNxNkW+pHLLWuMkLm7wCCt/UoobJRs2/Aulm/goJCMfwvOFRefScTZtgUik48BACZYKqXsaQap877MdiNl24IYgweMOSONOakFmzlh3xpbOZx5iDjbQj0yubiUkbzDenXSLZnOgKnUOSPfBxgE5zXU+qQ28EcJumTKWiLO+2DZ71gHT5qyw8SOU6JW9y3nndpavy/zvlzMghWO6Zrrb4QxFRHnfbHsd6yHKUzipOwzAd2aoUfz/Vye3QYj+j2yhhPNxP8Rcb7jD+77//gZGNdJQPIdW7k7jisemjSpykCCglznAKC/U8hw2WZtPSPifKdm+H4/HNNoklRKXXfvdqTZMSBUOI0UpEpCKjPI0j4mycAkP4ZcT8I9oqUkCUwTcVqCR7cBYEZAp5b3Kst2mHDdkJjgLLOb7cGD7DFkMgMDBRxNj+Bo8hI0XIoMh3zs2rKIOGtDRQMvIoA1M6yTdisHH7rA2cwPB09gP3sMiUwApAIFEjQYKE0BL45+D8WfwJKNiEN8aIwA7tVwB13e69y1te05Dr6gLNS1lz2B/cFDGCTDSyK1KeBg9BVMy9EpeUI9sbkcIk5zzKK/4+TEKilVjyn3Qfuw83wmkUqC0SXoC07/IN2FvWwfHvQf+zGLC2edcX4Mx9NDGBXH/n8rSL0MDB7g0MV4jSlmAFBCAVrj38MGFYg40dNgfQAwGID1NNrZO2B4huk0F77r9QUBAPowWZL5PyfFFPJidOF+5f2bp7s/glSml2cdMPBqfABHk0Nf+dnP9iBTfS8rUSkoXN4ZA4UuoIQSJvkI8nIaPCJHxGlkbhoMNXSZcHdL5+60yT/L1MCTwn/w8o7n3avpf8FRfghanzv9OG6v/8j7OkpeTkBAIiAxpFKQnspAX2g+A839IX/5PzSUYGCaj+E4P/QkDTH7EHGIC2sjgL4NMHkPZLMoGi7KEpXBIBtCP9n1f8dI2YIQo/wYjvJXMMpfn70LLsH6aR+e7n3kQ9IXL1yGGdAgTwMHqxRAIhlTwLSYwtH0JeRFvnFkjoizCnX6/QwB6ypZGzZ0vNthYv2UGiROPx3Ck93nkCTZJb8FhRemgHF+BC+nB5dmHaVS+NHeTyCT/WuzThuzIIHeTI88QUfFeKOZh4jTxgIR3uM04zIxyYnlH2LGczMIFOx64nzkfZFlFy6/Xo6+vPRBI3GeDp9DP31wzddp9vzLow+nL/3MMw9rt7uIOO1wi+6uWuuO5arPsFSgRfgZgwB72UN41P8rUFcc/sWsMy3GcDB+gbE2v6TbH+DmZ/9StOwm4Bf7PLiMQ29HyuRGsiFJj4sjOBx93dqORJzW0MVz41mNjZL3570Cmidwej8nzeD57o8hSdJry7WFH3I8PfLLsjvpYK0lGi7zcozKGYzM4QwyDwwolXg/6kG2f42oSK5xcQwvx1+2nnWIOPF8/601Rd/G2XTHcD1oE0k7f7CC53sfe3/naph5MQaJgHsyVyNpy4IDhSnh22IEk2IM03JyhQTK57g92X3qCXj1eTjrHIy+9Pe2ibIRcVp/ThHdyFh6ok0GQu20mW0uIrWbPYT9wSPYTfZaAeiXZGXuI2TH+WvIi/GlzdPLQhXsDfZ9SPtqFkJhcjiavjrNfWu+OUrEaWW+uG6qjLurGM9MgEROdPif9J9eywpYhSgur3A59mbyGiZmDKUPKeN1+0fvnzd8DvvZo0uPwJltWryBg/GXlyJ5q95j8TsRZ12koh03g7rq9l23m7UvhVaglIS+7EM/24V+ugcDH11bHZy76MPgLJOXk2spOrebRsFf7z6D/f6TS8Mw7w3lfTX+gogT7be9RcWxXa3irl+pToZNz5s+CqNp6F+go47ZAsN0CMrv8t9OmkWwAHPTlvsw670JBiUwDL7fvzzjIHHGp1G8ixkL60kFataxLlCxjjNOJs6aeyBgpykGuExC/2KYDSGTu402MTddSs3fVcEg7cOj/lOf5nPxQvnH+RG8Gn11i490s8a0VGv6NUQ2vq7FPSHqnga4nG25AgdMmcGoFqbMJPJ6+Hk1jAYKo+HF8e99uHmVL3NdHkbVMniy+8wvEa/uHWFw4NX0JRxPXhFxVhuDRjRFwNT2vlUiYbZphSeWPifwbO9v1tqPWfZeuFzDTGjMZVu/ZHpOGAxBY3nCMHuwNKdtEWyYFiPAfxeJo+viQzPOukhFOk7X1Z850e0wcC36CSh4Mpgvk7IE+wacX3MfRoMxpa/0XJZNgKMn5diHjI9zrL+5OYLmq3tONz2zdAD9BDOw+9c2Wq+aceHrjMpjyHMsP1ivpwERJ1JCrKt2VbMfAh781CCp86JsLA94PHzqC9MW1yI9Zpof+9w0/O3i71ff7XB6cJpbtrzXAPpSicSUnj0vR7ZYGvpE0+INHPpsgtU9DYg4635BkY5zwP4cez+3yU9bQPYwewwPBvNNSFx2jctjmORjKHXha2ceYrXn6e/LYPazTv4ajicvr/2MsxluqmK0TgIWsq0OcS83pQFttK8NWmdpSMSJlBDrqs2Y29eccVe37yuAs06WDCFV2BttAkWZQ67Ls6XXvGhtHx77vZbrH/48wjaGl+MDKPTkrHq0r3b9EhB9mnlKzc2k8cVtmMZ2obz6OgYGJuXUV5dimcPFcu6rY4k4635BkY6znD/EU9M2yVFD/wPU/KNetmfi63V8qfSzGwmQl7n3dXKTe6Jg9vRtOW8LcyHp0I/C5ReWv+HlS6whmUf7rsxQSLCj6SEc568gL272d4g4kRJiXbVPHP9LW1vWegW05oMyLDvoz9tCLVtuYRSsNDnWC0CyxpJsPsNov8k5yo9Ok0Bxlpv3O9hNhvBg8NDPWBcbgiwCEpja8zq/vjRcqEPEWdOwsQ5D4mya2LkedvMw8vO9H/ssg00uDC2PipFfbs3LpK93ucGAAj7n2d7H10qz5xWpb+Dr0YsbI3lEnE0sFMG9xsJf1Mz6NurbVhc3TbG8GjMNrvYZWPXs832ZyVl9zjwR9JYQtkrh2RDLHC5vkCLRMOL34vgLIs4q4On35QgwJvc1NxsFB5pg68sOskfXUmRukrHwYbAhOzYqxIhYcSHwcPuz5wmgw2zvGlFxX+fF698TcZoYj8aeIxAiHN0ET6UUPOo/u9HXOZeF4WPwlZznPkzTHgI3b9AScZpYjcZeQ8DV7Id6gw3QNpDupnuw139866YoRtkOJ4t2uO06dWI0D32cbElFKhGnjeXonjMErKt/YJhU7VJu2gGZqtSnzGB4+qZUHN8VZzLPY2ueAIp50/PS6qe7mIR63uMN3xjTcN5QcKCd8eiuOQJGyPtM69Ry1nmXmAzSATza/Qj6S8LF+B7z0mc89uOgYXbz/NwdTAJdHCOyrFMolhwcTm7ugkNRtXf5NXwPn1WdwAdC2J6VPHmXr+9nHdwU7S+fdRa9B14c/0eDTjXzjO05YTDxdHdpEihufh5NX8PktLH7Mr2JOO/ya/g+PouxVBt3t00h26bqzjt5/tQ3Mby6SemXVFh2MH3pgwO37fLjwiw7JczQH1R1fu7O1Xf0dTqjA3idY1P3my8izqbWfc/vx9ZQDLofVIq1Kp3eDB4FjwdPfJDgalnCQu5tZQdzP2Z4Wp8zgDundTo3JYLiXtBRjiUMq4hIpdOb2TWSu2uo+86Ke5tkSLeFCmtrMPlzmGJjwetJnPPcMmxpe3i2ZMON1CRN/d4MRuhwg3NZz+rFOy1qg7DS9OX0q9PGhrd3z6EZp61FI7qv4u6uAp6ZxlWgYUDCow3xLNDBlWK4hXSMrOEsgSk2eMgUJoD6o0R8z+nbG4MsSIPZ10jAdY8BIeKEse17LUXrumcZ3AnRkLANUP5Mnf6+78e27Fqk22BHnGG2D6lMVnYD9T6SMfCmwNMLjn3bqSZN2Ik4bSwZ2T0nzKqu5TsnYPvvImftKrz+rJxs1zfeyJbW3cyL0HJTXjp35zYzLdpPHYxeAG6mrp+mM5dKxImMBG3UxWPZlVY9Lu390grxbrKlL78pzjoP+7hkW+7rNNVrUb79pe+ig6k6zdrgEnGaIh7l+BnUQnX0jA9kTySbVIO2he/8hDYsA2jUqersaMOrIe12XXRoxmlrwyjvc5JxOIFUg/mQCSHeJQiL9Bh/EvUNhW43vQ/6L9NyDFJKeLzER8J+1IejA9/AvclFM04TtCIfi76O1DB0nHe2H5pe9Jve9TlluAmKf67T3ND3mzbfQp6PYKpHUJSlD00/wiM/rmymzo83PITXK0qlr5qeiBM5GZqojwdMOan6ktveNnPX/D4MVmgmmE+27/dhmizP/IlrPkR9vrczPxHuMTzqP7qWODoPZ79qNOsQcZp8OTQW8Lh26/g9LWDjs3JughM3PXFZhicMLEu1WWUGzCZ4k7+G15NXF5x+TLvJ4KP9H58VrZ3v4bzxpJlnWq93EXHWw4lGAcAMZtCDHlimM+7UHW0gXeOkjsbYYY7aMNmD53sfrTzVYJlw3J/BtrZ4nujFvRn0lfZ3n8Beik0LE99y6nh66DvnUDi6sZnohqYI4EG64PiOk9tKwzk/ZaCfXj/lAIlhfKzM3Ojz+HZSmHd2pak69pP2B/Jij7di3p9gWTOPVZjQjLMKIfp9KQL++A9m+tbZZBuboimk3r9Bh37h3yz2Xooih9KUvg7ntnZS57POefNDX8KGPd40/rO61e1N5ifiEDEaIzCbzSC9u8OxRVld2vu12M6mKDr0H+39xFdo4meOZDnKD337XGzOgbU1/vebyg5MAf95ekzIbd1uGgOAmQO/+vxnP1Cis/XWP21eju7500UA/Z1U7/CqCx9Is60oG5YV4Elqyvsq2MXGaFykLXb5by47WLTNPRwfQKlvbxPVFGXHec0++90nwxpE207VTZ9J4983BGronnCWCW57zrHg3xGm2mAAwphi6SkC6LPs9x+flR1gKDrXU5hif+oNfJjbzCQY/5Z99sUnd+tKND6m7n2zP+nTFoEZaN3tCabuWCSPBb6NSNvNb6fg4eCRj8Jhi2qMlE3z0WkHz/Y+zI2+jQCrrP0f9unnn8rhztsPq1LTcq3ttxP5fbgxalOVKF33jYDuNoIFt0G8OKAXl2dNw8pNTGcdd8y6qoDp154sNOs0gY/GLkMAM6g7WnYqYB9y5tT2U3KuvgUWrDXLcG5iSeGsc47pDrf//Yu//fX4bJb55W9/fj/tqHfaAqjJi9PYP20E5sECzksndrqO7+C5oe+ePNvBiFmwksNJrfU3//J3vzkCAHdpeYYzj+BJj5Zt2zHA+y4VySN5h7Ga7yjJd6qKe/J8F/U7obAWnNdQ6xNeiP/953/49zcLudf8GvR5Buk3PaigW9a1oFB1KBPEIceTp+ww3oWus/KeUDzR9fePPK7mNQNbOqj/kBYw/sU//vrkogX/H6cDehTrizTMAAAAAElFTkSuQmCC);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(5) {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACgCAYAAABE4VPuAAAAAXNSR0IArs4c6QAAD4VJREFUeF7tnTuPFFcWx899V1U/BuydkQPYZNgEosHBQmQiIwI7I7Ojjf0d+A4rbbYbOSOztLLIQNoVOIFoRloBEci2ZmQDM0x333rcWp1uGo8fQHXPqaan7ykJMZqpOlXnd+qvc++5jxLw2+NGLa9998js6o768JQU+UiK353Dv2ACK07AJqH+6XmoN8rD6tu/nivghghHXf6VKK599dANf1wzK86E3WMCMxNIP3pRfPv3v/jpha+Fc/n6k9SBUzNb5AuYQCQEPPjq7s2zQ3R3LBzONJFEnt08NoFp5hFwo5ZXtveyY1tkA0wgEgK3L6wPxLVrD92wy/2aSGLObhIQSF++KMTHn32f9RItCeyxCSYQBYGDURnEp1/+2OGScxTxZieJCGCpWly5vtslssdmmEA0BFg40YSaHaUkwMKhpMm2oiHAwokm1OwoJQEWDiVNthUNARZONKFmRykJsHAoabKtaAiwcKIJNTtKSYCFQ0mTbUVDgIUTTajZUUoCLBxKmmwrGgIsnGhCzY5SEmDhUNJkW9EQYOFEE2p2lJIAC4eSJtuKhgALJ5pQs6OUBFg4lDTZVjQEWDjRhJodpSTAwqGkybaiIcDCiSbU7CglARYOJU22FQ0BFk40oWZHKQmwcChpsq1oCLBwogk1O0pJgIVDSZNtRUOAhRNNqNlRSgIsHEqabCsaAiycaELNjlISYOFQ0mRb0RBg4UQTanaUkgALh5Im24qGAAsnmlCzo5QEWDiUNNlWNARYONGEmh2lJMDCoaTJtqIhwMKJJtTsKCUBFg4lTbYVDQEWTjShZkcpCbBwKGmyrWgIsHCiCTU7SkmAhUNJk21FQ4CFE02o2VFKAiwcSppsKxoCLJxoQs2OUhJg4VDSZFvREGDhRBNqdpSSAAuHkibbioYACyeaULOjlARYOJQ02VY0BFg40YSaHaUkwMKhpMm2oiHAwokm1OwoJQEWDiVNthUNARZONKFmRykJsHAoabKtaAiwcKIJNTtKSYCFQ0mTbUVDgIUTTajZUUoCLBxKmmwrGgIsnGhCzY5SEmDhUNJkW9EQYOFEE2p2lJIAC4eSJtuKhgALJ5pQs6OUBFg4lDTZVjQEWDjRhJodpSTAwqGkybaiIcDCiSbU7CglARYOJU22FQ0BFk40oWZHKQmwcChpsq1oCLBwogk1O0pJgIVDSZNtRUOAhRNNqNlRSgIsHEqabCsaAiycaELNjlISYOFQ0mRb0RBg4UQTanaUkgALh5Im24qGAAsnmlCzo5QEWDiUNNkWCYHCC3EoteoZbaAa6VIJGSohtBKyUkImkEAp96WtnAghF6WxQQcXRjACVdVB5XVd2DroKg1VfVDJPClqVZTP9ut6Y53kEYGFQ8ORrRyDwA/+Z9EdbEjV01pUUtu+kPlgpFAodSWEtSDQfJnnEhIHAAmEaiRsyMe/z6WtpUpqgBHAyINUrpaqrqWE2hd1XVZ10DaEcpBWZb1fVSotO6GsjiMkFs4xAs6Xzkdgdw+g6gtxqieFea7UUA6UTLSGXBlhldYSpDViLAqqIy/qWgcIQ1WVULkijEKZhlANs59C4vthVhGxcKgiw3beSgDFggc2lYYvlTRSKZ/lzkLPCuO1rUAEgxkEM0qbhwdZ2DpXUIeRqzy8zK2yPrwsy4NhFWAdYKPB7Vk4DSDxKXQEBmXiTOVdlWmrZSpfN7lc24L5vQ+YhaSCGvtHw3xQloUZJcJ74+r6XR6zcN5FiP9+bALY2d+vBjpTiQ2ZtmmldNlCc2zeB5024yoIVX5Y5rrjc+mT4m3NNxbOvLT5ukZNs16qZJ0MTSWcNbbrstqrQNx/IQuF9zAAWxXKeHn4Itely7H59keVOBYOGXU2NCUw7c9gAeBDVaVC26SW0lB3+NsijhkoiLqqB/kQCj0c931e9c+m92ThtEU/Yru7AKAG1nQzm6kqd8GAOCmimYZt2v8pRlVe18Nhpq0/GlIWTsQvOLXrmGmwWYMFAFXkiUmxAAByaZtm7wLgPQRsuuEI0sj6XjIaTX1k4bwLHv+9EYFx82wdYA2cBTApJhnpctXo4iU/qQx18IdVoa0+/NnnhdqvaxbOkgftJDzetE9jTxndMUkfx2W0FPIkPHvTZ0TxhFFdSS/291RRsnCakuPz3kgA+zQfDKyps9CrZWFsEALew7hM2yHCfo8IrhiNng1YOG3TXnH7KJq1fW/l6SQR0iS6yOUqimYaxjK4UBUvPQtnxV/sNt3DJlqqtYJ+lSllksyJlejTvItZ8HXFwnkXJf77WwkcAnRNZZzNpIkJFQsnpmgT+vqDF2JNeZvobn+Zps8QuvhWUyycRZFeoftgE+2DjjWFqzrKKLeIwc1+H+DiBYB+w7mg+x7gyROAx0/bAc/CaYfrSls9AK20LxKVQteahHTdzJvAbZ4B+OJz17jusLcHcHcH4MF9D78a8ieKDAuHCGQMZnb39mBjfR0ORkmSJGVmXGnbXz8zyTLnzwFc/dQ1Xq3zdA/gm1se8P82DhZOG1RX2ObzwujUuI6QebKIJhqiPLOOzTQHl7aag915DHDzlgffRroB4D0HmoeCz0QCQ591lC6SRVbRMNtc3nKAzbUmx/4+AArnm9stqYaF0yQMfA4SwIIArq3RXXFKGLnQKTVXLgJsnXew3nCHGmye3d/xcO9+e7Hjplp7bFfKMq7iLJSzNg1ri56HdvUKwCdbDctpMMk2d+/71ipqGFgWzkq93u05g30bk4SeqZVdVN9m2r+5ctnB+c3mvt255+HuNgA22do6WDhtkV0huzgfrVsmLtGhv+j1NVsXAC6eb96/wWLArXvtNtM446zQy92mKwfPDpTOuolKXXeR2QZ9uorZ5jzAer+Zh3v7ALfveHjwqNn5857FGWdechFdNyhzJ0SapqpKGo9AEvDBlQk46Inl6CarFLCGtrMDcHfbw9OWZgxM3WLhEAR41U3kZcggXUutzBc6kROn2fztumucbbCZducewPYjD5h52jxYOG3SXQHbWIburGddV5WZzha3qhMzDGaa61cdoICaHCicr7+ZzBZoa+CTM06TSPA54+1q9VrSNVWZNZ7vQsANp9ngbIFPLjVvpvl9gH/e/CXboPjQDjbh8G+Uw6GccQiCvMomPHgbqixLM50s0k8sBly9MqmmNerfeBhnGpxmg2VozFJnNgAubDrACZ+Pdmn7PSycRb4NJ/BeQ193tDPOOGUX+fhncDb0DM00FAsuIXjyaosqbOZhtkHR4YDo/W3aAVEWziLfhhN4r8KLPn6yJulKvajHx5d98xzA9U+aLyPAPs24IOAn2QZtTDPVgx0WzqJix/d5ReAwV6dTq7Rc4H4C2Ey7cA7g00+aT7N5W8BQONQlas44LJG3Ehgp8yedC7nIihr2a7AwsHX+eMGZVtbuvco42NehOlg4VCRX1E6A3vr4e5sLWumJGC/hNJutycDnPMe42bY36fM8euLHP+NSasqDhUNJcwVtlabeCJVb6KbpVy8DXNpq3r9B7CiM/b1JZW13f1JZ23sx+R2xZsZRZuGs4MtO6VJp7EaoFvO1AayC4ZqbyxcBzm82799gUQCn2Dx5CvB417cmlqNcWTiUb9lq2vpovK9A8/d4Zgpour8OsLnh4OL5yc9Nd7PBm9154OH+/VdVtZnvPt8FLJz5uMV0VWvCwT7MubMOcMwGM824hAzNBjynAVjUMoLfBpyFE5ME5vC1jaYaimTzLMC5dTfJLv3ZMsxRN7BPc/ueh52WlxGwcOZ4eWK+pA3hzLr5xpv4Y7YZL5NewDICFk7MKpjD90k52kvKBWy4qhN3rZmWm49WvWbpSk2aaQCPF7CMgIUzx8sT8yVtDIAeFQ6Wkfee/tKxx0HPJpM6MSYoHJwN3damg2+LO/dxYlZFA99Drk4D8ZQbbKqdPTPZlRPHXLCcjD/jTGbclKOJcFA0+O8fNydjNos+WDiLJn7C7udBrjmlDGi6SZ5YHMBy8zjbvJoGg822z69M9k5rKhzMNLhwre1Fa38UMhbOCXuRF/24Q113lK8Sm3VaXTY966bqmGVw8uZt3FS9jakB7wDNwln0m3jC7ufB2WDLLBXtLWTDcvR4U3VcRtCQz6QMDbDz6D2ohqfcNIxSxKfh1lD29FrXgUkbv9Uz8ppnU3WcwIlfI2h7U443ucIZZ8Ygx3j6IWRdZ3SmpW/lE+yzjutg0+zxY4Cvb72fbIPvAAsnRiXM6DMunxaZTRPCAsHRR8BN1XE2dNPdbDDLoHBu3aURzjx9JBbOjC9RjKe3uSEh9mlwU45Zvn0zlsurcjRFPLC/tP3Yw4Pt5tZYOM1ZRXsmfrpQQpkaaTuUMwgQKPZvZt1UnToQmL3u7sw2342FQx2FFbV3MCqTtJf1dZHLRgMtDTlsXZgsJWj60aiGZmc6bbwnwf3ZZiCwcGZCHOfJuJvnximjD0zdd1IayqyDg56bm803VW8jAvN8FoSF00YkVtAmflhq1HEuFfipD5qtcHGGwHRv6CazBdrC+s2d2T8LwsJpKxorZhe/kZOCVq4Sp2QiFIV4cBuoL2bYVL0NpDgDAb+nM0thgMvRbURixW1WlegVVrvjlqanm6pjU61pGZoaLVbncK7c7buz7/LJGYc6GqturzB6KEO3Y5QLRoh53R3v1nl2Uhh4X800HL8Zl6JxPc+Me66xcOaNfITXjYsE6wAvIE3TqswoPtn+vkRzNHw8ABrhy/w+XH5eHGpjOomRdWeRGxW+D1/fdE/OOMsUjRPyLJh51py3st/p1sTl6ROCgOeqnZRALdNzonBO94UY1c51EtPDyZ/H6e8sk29Nn0V8+uWPnXwk5+7kNb0Rn7daBKbikRq6ympHuUJ02UmVoQ7i48++z3qJbmW6+LID4Oc7HgEc2/lgYE3dM6nIi2SRXzQ43pMf7+pQll5cu/bQDbtrrS6LPd5j8tXLTADF0y0TJ0SRmkRZioHRZfY3L+q6DuKZgBu1vLK9ly3zw/KzLTcBFM8aOCuq0AMjNOVctmXyXBZ1PVKu9P/b/n7ct7n21UM3/JGzzjIF6SQ9Cwqn8kKsV0YH5/pg/MqJBzMNKFfa4uCn2zc3Xr4uCly+/iR14NRJChg/6/IQeF0scGUyUjZxUplVabaVg1HwVhfuQL38z79PPUPqv6qmceZZnhfxJD7JVDwDVyYaxZMrYw2IE1uq9h4C2KoAm8ve4f5//7V+MI3L78vQN2p57btHZld31IenpOBS9Ul8hd/fM0+n5ZQDa6qszJTRblEfpqL0GkvOMlSFV/Diz/kHhzdviuqo/f8D/WdFNg29zfMAAAAASUVORK5CYII=);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(6) {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACgCAYAAABE4VPuAAAAAXNSR0IArs4c6QAAErRJREFUeF7tXb1vI8uRr+6emR5+DXdlk3cBGVERBRiQDBi7kTc6Aw5eZid3uNDBAQ4M+A/QH3DABQ4OTo2L3sscGNiL3ove4oIVcIAUSRecCNgg3/OaI4nkcL4ONaPZ48dI/GpSErsGsIG3mqnp+tX8WF3V1dUMZq/TU374/U/MqnctfKfAgoHN5u6hfyAE9hwBoziKTXcY92UzvPzBf/lwehpNqjxFisNf/0la4a2555iQeoTAygiMRdm//N3PvezBz8Rp/ObLguOBWFkiPUAIaIKAKyHs/Nsvh6huQhzyNJpYntTcGIHM8zA4PeXtbru4sUQSQAhogsBF/WLAyNtoYm1SUxkC6HXYj3/1++LQeM2VSSVBhMCeI1AIPkXsR7/9Q4lSzntuaVJPKQKYqmbtf/myrFQqCSMENECAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShI1QICIo4GRSUX1CBBx1GNKEjVAgIijgZFJRfUIEHHUY0oSNUCAiKOBkUlF9QgQcdRjShIVINAd3bBydCAM9skMCmVhjMeGYQgjMG0Rhz6bfAWPRcRFGLMgjD0RxcKLw8CyAisIgvHYC255FNbtSqxgWJ9FEHFUokmy1kKgBwBxQhQuxpY0ZAQi4pJLHvIgGorYNFjkhdwySyxiIZ99CRNRDB4AE2YMMIKxb8Zc+hGPeSQiEXmRiHjkRSaHcHQbhwO7HNRtbyMiEXHWMjU9tCkCKVkkK0d/FYEo8SC6FdI0DQHSDC0QJjP5rGdZ951ILBHzyB9DGILnm74fjD0ZGOXb6ObT6xDl1mqrSSfirIYX3b0BAr1eD2r3X+ifAxA1CMwoimwfLNMsRBxAgiqyPDRM9EosiOKAQxj5gzErloe3Lg/RAyGZYWKMj6lKxNngQ6BHV0fA9cBicWgLCyyTRTwOBQMJEId8Km5ZXfJqT6AXYkE6tYsY96NxPGbcGNkGJB5o0UXEWYQQ/X1jBPCXvDS4M5gRSAEHZmCMDSNiIjZ2S5aHFPFjPxIcQjM0g8iDcRDf+XfFUvCY9yHibPxZkIDHEPhLf8yLtmUYEiyIQtvIyYo9FwRxGhcOBkEsTS/wYDyKpc9uOnE2vZwcJxHnuVhtj8aBsQxeBxWbhaWKHYehzQJmPRcPswhqjIEi4L5nDu/Kw1fjv9548WzygIizCEX6+8oIIG9KpTsj5HaRF4U0xxF/KaTJlEXy+BaPWARDGNyNijh1m7iIOCt/FvTAQwignzkY3bDbwLC4Y0kRgGWYTOw68FdlIZy6Bf4ojKPAiwUfDb8z/czzEHFUoay5HJyexRWbycCwSsWCzQzbCqKR2AdYwigMwvFgLCI+wKQBLvkQcfbBsk+sQ7byX5S2IbjtGLjyn7PC/8TD3Oj1BocwDobj6Ebc9KtWRMTZCE56GBFA4li3Q2lVymXh+8ZLi2eWsWK2cDqMbz3OjAERZxnU6J4HEcBEgFUYSpyeYRXAPpJmUvlgDCFwb0TEIVKsjcBk9qxYLMl9iWkWAYIxDxFnEUr09wcRCEc3bGRYZcYNKbgwdIKKiKOTtRXq2h1JdmDcSc8yKmnN2fMon1Go4qOiiDi7QnqP3oPJAOm5lpSlUl5FQFVKkDJfYQ8APA9ghP/3jC5bAjgPDfp+zP2JMRNxnpHxXspQBoM7A4ol2wiiUl4yoF6X0HAcqDk57PEAOq4Lnb4Hffd5kKfqSGhUJTRqTq4Jej0POn0XuhPjJeK8lK/1GYwz208zHPdLsVEuPBTXNOsOHLdq8K5dB4k/5TPX1bUL315dw9llD0ZPzB0bAI6PavC21YRWc544bt+Dby+68OGyQ8R5Bt/gix1C/3YoC1a5AAUuH9t0Vsdf8boDv3hzCE5V4pabz5c38qDnAXy86sJ/frx6MvIgaf7hpAVHrWriISX+w8Tljjz46ptLuOpOexu8hTzOi/2EdzvwrKSmAMUK5740LPvRchr8BqUj4c1hDU5a9YREc+RxPfj6ogsX172pX/NdaIbTs3bTgXftJjQcOeUZ0QkmnuaqCx/OO4AztNmYjIizCyvtwTswIVAJsIlG+HqVTWj4gT5EHoQlnbbtljzoDVt1B962m9CqTXsaJE2v78H5VRe+OZ+enk2akYizBx/1LlTADWmvK5HNWam8ah0afqjtZg1+dtyEWjUn5um6ybTtm3OMebYb9GDG700S06RecPLKPM3XF2n8NZkMmMWYiLOLr24P3nH7t+9Mo1yqcCnNddZs0PPgr3x+zAPgeunUaGsxjwSogoRfvDtMvMx83AXQc1346sPlUhk/Is4efNTbViEp4mSGLEbDasTMub5my7z/SWMeKaEp5X32rA6YJZ/M9mGyotNLiYueZnK95iHdiDjLWF3ze0bBJxFHFVsUCuVN2zdNxTwzQXkW83zsdOGi40Kv7yrJuDUdB9qHaSJgdqrojQA6PRfwnatMFYk4mpNiGfUxBQ2WKNiWNZOwXebp+Xuy4PzdMWa0ctLAfQ/OOi68/3i5cbYNY5qfnjSSmGaONJgI6LqAMc2HSyTp8vEVEWc922v1lBeNiiGYRZWFnLZMV+u/eHMIjZoEZ2ahFNPBVz0Xvvr2MjcdvNAAS8Y0//HNZZJFW2Z6Rlm1hajTDRkCGN8UA69iiWJh1WzaIhSRPMdNJ1nnaTWcKfLgFMq7TxicXfWSgH1Zj5CRst1Ks2cqYhrKqi2yJv19CoFxf8zFa1EOIlHcBjQpeWrwtl29X1OZTlejN8BU9UUnJc+i+jacmjXqEtqNdOF1dnqG1QCYCDhfMaYh4mzD+nss8zb2Tcu3S7EVKolv8qBC8mCq+os3+TFPkvVy05oxzHp5eDTBbDiCmTJI14tO2lVoJwub0yREL4YETBdcV4tpiDh7/JFvQzWMb+LItpkB1jbkZzIXxTzJ1A086Lnp//ruKFn7wQsJU3fspLrZcfC/p9PNeA96mqvOfczkejDaUBlKDmwI4L4/fhd4FW4WLR6H5rZ1zWKeo1Y98Ri4SDl7ZbGPizS69zoJUaScW9TMnsVEw0XPTTzW1XVvY9KgXCLOtr+GFy5/PB6/wmM4DAt20iMNydOuO3DUcqDdwMAeCzDXAxFJhl4JPQ2u03y8TFvzqriIOCpQ3GMZQ+b/IO2Ttl7FwLrQ4FrP8SEmDZqfs2IPbCqd90r4LyMvSWPjGg0upl533XWHkvscEUcpnPsnLIrCH4YMmyjPHyG4bW3R+9QwcdB04KiRZt3ypm+T40izZi6cd/oJYXCatuoazTJ6EXGWQUnje0IOtfBJm6Zj4A9JWhm3Ytfuo/8q2EkiAC/0LH1vlMQ87n3yAKdomMpedu1nVRMTcVZFTLP7/VjUY8Nn61REbwMqrHVDvkgkkkyZ0/NSz4LE2YZ3ydODiLMN6+6RTA/g7/dIHWWqEHGUQbmfgog4+XYl4uzn965Mq7Ew/w6FbbqdYKMBSQlVgCQxgHFOkqKeEZjs3sS4xvW2lhCYfCURZyOL7v/DTxnjZE0CE8JIB2o1CYc1O1nsnO0dmCUGuu4oyaphiQ5m2BbVtq1rQSLOushp8pwf+3U8Un3XpxBkpDk+bNynoiWAPe9p8syQFXJiceiyOzpXNScRZ1XENLt/EIU/NHe8joMVzrh2gw0Nsf4M6bJq9UBW25ZsicbmGxsWdc6anYijGRFWVXcUDA9CqyCwemDVZ9e5H0lzfIglN/V0wTOnE+gqcie9j8r+bUScVayg4b1YqxYYwlC5+zMPRuQHxi7t+v3enGZtPgFwX3uGG9ySApqsyDPZUnBf6JlT24a3dbppkefZdU9J3EPE0ZAMq6g8ACgz5ksem1utjk76EDRr8MUx1qZNT82SEw6w9szFTW39NPjHRc9uyhysJqjVZeKhcPMaJg5wL85U59D77pzY/glb2m6aNCDirPIVaXhvEAR2aLACgFi2xnJllNIm7Q68azWTioDZF+GHjp01P1z20j042JJ25i2Jx4I0VY0dbU4a9dwm6liGkzbn2MzzEHFWNrNeD+CRHpZdKoUcCtvQPDvZ4KRRne+seb9j87zXT7YGLFfhLKF5733eYnJhpotONm3LMm6Pdet8TF8izja+hj2SmR5X+Kpsgl9UmZLO0s1vjhqQT5p0MfP92XXuaQGLIMapX9azGhdNpxoQTsQ8mDDIa6q+SD4RZxFCmv8dTykoV1+XpMEKvsJzPpP9NthP+k1zLnOGqWRsR/s+6THQWbspIZLzp0ctOMk5xiOLm96fpY1AlvNm//8xEHE0J8Yy6qtuSDh58FReuhkXLVU01EDdkDyYqTtpOfDmqDmnLqarz67Sg64ur5ff7EbEWebL0fyeUQAijgJbFHh50+0Fy8Q0H3ETmqK0MZouafhexWM96tBuzHe/wYTBRacL31704HLJnaJEHM1JsYz6SdP126Esloz1m67jbs6qTI44zItp8JcfY5qv14xpFumRVCPUnWRqmBSKziysZv3b8CApPC1u0QY4Is4ixOnv0OsBlEp3hijalbxTppeB6LDuAPaKPs75xcc1mqtemiZGT7Otc0GTaVsTzyadP1AKdcBx/HHJmIeIs4zV6R7Ag6UOrLFktqys2rjjBJtuYMunPNIAwIfza/j6oqfsdILHzIUNc7AO7m2rtlHMQ8QhUiyFQHaUYWyKV8L3jWVT00iaZDGy4eQcseHBh6sufLzqwVV3e/0BZhVcNuZJxoXFoTkIEXGW+mzopgyBkIfOCIRcVPSZdebE4wvzutMknTV7HvzxQ3pawKKYQrUFspgnPWokbWY4eWEPgzNMGFz1oNed75RDxFFtkT2X53pg2UwUFx3XjtkzJE1eTJOR5v3ZJXQe+EXfBYw4bWvg9oVWE9qt+UpsXE86w17TF104v55uZkjE2YWF9uQdmCSo1QCwn3QkSoWH2uIiaTCeOWqkBZezF/Y8w6M78FCnTXs4q4AWx4teEdPVsxeWxl320hPiJtd5iDgqkNdMBtavxZZRMMHMLcPBGKJmS3Cw1CUHG9zW/BTTs4fMhNNKLA7F40Hyxtu779E2WVFNxNHso1ehLk5apAeWJaDMITKXTRSoePdzkUHEeS6WeEHjwClbXJHsVfy97ZfK5UWJghek2tJDZT/67R9KwcBmSz9BNxIC2D2z14ODSoMNYFDhXMhdnWbwHMDnsYjYj3/1++LQeL3W2fXPQQkaw9MhkE7ZXKtoOoWYCfkUjdmfRvvQY4e//pO0wtutbot9GuXorbtAAMljBoFtg1/kIPc+3mFBFMsS/8Tg9JS3u+2tHIy6C8PRO54eAdzsdmMUpMVZ2TCZ2LSC+uk1yh8BE1EcMe6/Hn36cxLbkNd5rqZ6GeNKkwU3zGYV0zBDx4iY2LdMG3qa0DSDSuHuu//+13+++5wUaPzmy4Lj7aZ31sv4HGiUqyCQkadqmQXgpuSxZe5LzOPHfmQy7vtxdPu///6PnxCXqWwaeZ5VPhW6dxYBJM9B5YaFMbNBVCUzR1ZsFNmTNmzf0EwBh9AcjX0ogHv5u3/6vEV0Pg19esoPv/+JWfWuhe8UGKWqN0Res8eRPFADKCXdcXgpZmX5nA6mWtYcmHKO2NiPA+H+zye4ha9+GU4++38YcdfdtuZnpQAAAABJRU5ErkJggg==);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(7) {
    background: url(data:image/png;base64,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);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(8) {
    background: url(data:image/png;base64,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);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item:nth-child(9) {
    background: url(data:image/png;base64,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);
    background-size: 100%;
  }
  .comprehensive .liquidation_coin_box .liquidation_coin_item {
    width: 2.74667rem;
    height: 2.13333rem;
    padding: 0.26667rem 0 0.26667rem 0.26667rem;
    box-sizing: border-box;
    margin-bottom: 0.21333rem;
  }
  .comprehensive .liquidation_charts_top {
    display: flex;
    align-items: center;
  }
  .comprehensive .liquidation_charts_top .top_item_title {
    width: 2.13333rem;
    position: relative;
    font-size: 0.26667rem;
    color: #767983;
    line-height: 0.48rem;
  }
  .comprehensive .liquidation_charts_top .top_item_val {
    width: 2.13333rem;
    font-size: 0.26667rem;
    color: #070d1e;
    line-height: 0.48rem;
  }
  .comprehensive .liquidation_charts_top .top_item_title.sellvol {
    margin-left: 0.8rem;
  }
  .comprehensive .liquidation_charts_top .top_item_title.sellvol:before {
    content: " ";
    position: absolute;
    top: 0.16rem;
    left: -0.32rem;
    width: 0.16rem;
    height: 0.16rem;
    background: #16b056;
    border-radius: 0.05333rem;
  }
  .comprehensive .liquidation_charts_top .top_item_val.sellvol {
    margin-left: 0.8rem;
  }
  .comprehensive .liquidation_charts_top .top_item_val {
    width: 2.13333rem;
    font-size: 0.26667rem;
    color: #070d1e;
    line-height: 0.48rem;
  }
  .comprehensive .liquidation_charts_top .top_item_title.buyvol:before {
    content: " ";
    position: absolute;
    top: 0.16rem;
    left: -0.32rem;
    width: 0.16rem;
    height: 0.16rem;
    background: #ee0a24;
    border-radius: 0.05333rem;
  }
  .comprehensive .liquidation_charts_top {
    display: flex;
    align-items: center;
  }
  .comprehensive .liquidation_charts_top .top_item_title.buyvol {
    margin-left: 0.8rem;
  }
  .comprehensive .liquidation_charts_top .top_item_val.buyvol,
  .comprehensive .liquidation_charts_top .top_item_val.sellvol {
    margin-left: 0.8rem;
  }
}
</style>
