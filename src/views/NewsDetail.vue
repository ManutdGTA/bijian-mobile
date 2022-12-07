<template>
  <div class="page">
    <BackBox></BackBox>
    <div class="detail_page">
      <!---->
      <div class="detail_title">Lens交互考虑母公司Aave</div>
      <div class="detail_text">
        <div class="detail_text_left">
          <img
            alt=""
            src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221206/IMG_20221206105448342.jpeg"
          />
          <div class="community">
            <p>链上达人</p>
            <div>2022-12-06</div>
          </div>
        </div>
        <!---->
      </div>
      <div class="detail_cont">
        <ol>
          <li>
            Lenster帖子镜像+0.1马蹄收集，限量1000个：&nbsp;<a
              href="https://t.co/3ctEd4sbnv"
              >https://lenster.xyz/posts/0xf7-0xa5</a
            >
          </li>
          <li>
            镜子收集https://aavegrants.mirror.xyz/rKju-7u0PpbclEpUuaV98vIbf-LFX9WxMmHtxrvZc_M
          </li>
        </ol>
        <p>
          很多人不知道Lenster有镜像推荐功能，在这里统一普及下：当你mirror一篇帖子之后，会生产一个单独的链接，别人通过你的链接付费收集帖子，你会获得相应的奖励（作者提前设置好的）
        </p>
      </div>
      <div class="dividing_line"></div>
      <div class="detail_foot">
        <div class="foot_item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAiNJREFUaEPtWLtOwzAUPZcBRgZGVsQELDw+gC+AhQYkGhgYEBNhYYMfIEyIkaYDJDDAByA+gMfAQ0LqzsiMxMBFrhIJqhLbspukwh2bm3vPy5ZjQp//qM/xwxEo20HngHPAUIH/E6GVtW2PmWoMjDIw0E04Zt49bx5e54la84N7VdEJeI2jcDWvXskBzw9OAKzJBjNhKWmEF3l1nh+wrE/2nIGHJApnjAgI5b+YzlSGVpLAsh9cMrCQEmAGXgB8Wo0QY5gIY509rTjg+Tu3AM+K5gw8J1E4peKGak2tHowT4QbAaE8IiEVHwHRKQJpJVeCiLg+86jzpIu4VgT/AvzHjI4uTlQj1gkAO+HkQTnUcL9yBPPBJM2zpClYoARn49rrQXHOFEVABX1kCquArSWCxvjUyREOPHfu82G3mReZ1tt1utYVEyKsHeyDspwCsgRf9CiEgBqUkNmwpn7lRGAExUMTpsnn0bhqbn+8XSsAm8FIccAS6KOAiZDsWnr9zDMJ4uy+jFUcHm0aflLpnE1NCuvMqFyFHoDMCuoq4CFX1e0DVGV3HpYvY84NbAD27VukS2ScCJtP/7+IonDPaRnUutlRVzqkbJGAiOyUTcHUWhYtGBHSuFi0Q+NVigHj5tHEYGxFon+UVL3ctE2jEUbgu6yldA1kDlet12TDZcwK+CHgj4kSmvPJxWja07OfKDpQN9K/5jkDZzjgHnAOGCvR9hL4BDZCVQKsqH9YAAAAASUVORK5CYII="
            alt=""
          /><span>分享</span>
        </div>
        <div class="foot_item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAsBJREFUWEftV01PE1EUPXemQIBEohJZGRM1hhQKbQeIxg86KYkuROPGhQv/gNE9Jq5MdK+JP8CFCzdGYaEJzRQ/ogGmLW1piFFj4qqJSmoCBOjMNW+GQSvQlulokLSbedP77rnnnvvenfcIO+xHO4wP6oQqVWRThQL90cMwzL2VnGuyy9J8Zir26U+MEkLd/WcOwpAeEXCqpmBVOjPwGrJ5JTv18ovjUkooHHn1r8g4BASpbCJ+egMhu0zGR8vAdBuEp1Um6m4a4yKIb1nOsnzEKd+6QoGwqgA8baNTXyah6e4iVee1Vbw6IUe/ukKVVtKuU4g6B6L7nKxbjZYlXR9dFO+KMtS2ILNPjFsNKur6eMH+f7hlQV5sdnzmJmPfRUPxZA11DkT3NxSNr+tlILqf0bUb4j0QjqTFY82WzSTi1jigqPfAfN3xWfXJ7XOTsW+7k5Df72/0NXUMO9kZwIfZpDZjKRGKDBGozWrw4EImGR8X466Q2isDRx2f4nJ+NJfLrXiiUKUd48a+63aZGxHK+tQVqiTp/6eQPxgJyhKS1mkIOJFOxN9VyrIWe084cpyBtwLDMBHKpeKptdg2rPgErHAxD6AJjFkAa4e1TcISmSB8XgY/eK/Hf3VwAMeUSHsj4xqBDoFZKkO6D4QuAMuN5OtwPjmlZ2pFHSHmO1VnzsibzMOzqYkpqxkGB/slwhiIDlSLwUQ3s7p215m/4RrUHVYvE/gqwGWuQSQyVwA0ACgQcM7u1HgOQHTtVQA6wObWxGieQQ+zCe3x73Nc31x7w+pZE/wEQDODf9j1pz0AliTQpZmE9qJalTwhJEB6QmqUyXwGUIsNyovE0oV0Uou5IVOyqN0CBELqIMBjtj+dzyS1CbdYnhASIME+9aR4pqa1N7WQ8YxQrSQ8W0NeEtly2/+NINvBdL3ttxNkO3N/AuLGmjQC3ZSZAAAAAElFTkSuQmCC"
            alt=""
          /><span>0</span>
        </div>
        <div class="foot_item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAAXNSR0IArs4c6QAABSxJREFUaEPtmHts01UUx8+5fewhbhCeQ2JkJEan+H4lKrIlIphFEUZmW+r66xhsPv9oi2NDF5TBXNsYGM5Zx9pttFWnIcoQ4yOiBkb8g5lFSBgE9s+WGRkqyF5t7zG/0t8Ypdtv1BXaZL9/2t/vPs753O+59557EQCAiFTib6I+iOjDKZA4km9KETkxHI5W1cG2g/sBIAUQe5QKdnDRgjmeigrTP3JtoymPmSL6olKN3+drvNIp7EtSK192Oar2RuPseG1iBqIRTEeA4IEIxrlKnWRocmz7ZDJhYgJiLNn05MDA8A9jOUpA/bNmzczaZSvvmSyYmIBojebPidNzkpMqtUrj9wUKiPhy6ZuSMVtzg7UsbkE2vLZl0fkL538HAIXoJAK0e1z2R8u2f5B2pvP0MSCYG/p+zOOy3x+3IGsLze8HAvTKyMirVAXNH1d5xXedYG7mRPkhkAsel31mXIKUldVMP9PddRoQpoUc7M7Oy759fW6uLwhitHzEORdCZX6vy54alyBr11nMAT/fJjmnYGzzngZrtfSeECAtLW3Kvfu/6CSgBSHHLy5YmJFprTD/lVAgBUWl+cM+X7PkNENFndtZ/fro0EkIRbQG02ECeCjkOE9PS1tct7Pi5DggnDFsGHOvISTGsE+hYD83Oqq+l5tLk7KPCCVvPT440P/jiBqArW6XbVW48TBF5Hy7XI5waPacuS/ufG/jH2M1mhQQnWD+jBOtlIykpqY+vbv23Z8mDUTcjxB/W5Fz7xN6vX44Esw1gQjFpcuHhvz5QJBJSEnB/YAQOfH7EDF4QBMNepy2RyIZi1qRUGdqpaq4sb4qYjhOCKSmxp3S1t7ePDrtGEtilVotNDm2uyceN5FrHj9+HO07vEv7h/pbASB4DEeGX3kabHlRK6IVLF4ivnoCzvXr8rJn54Y2wAnUl62iNZg6COCOkNqHPU7b0qhAjCXlOQMDg9+ENe4EhH/Fb8ThHkRQBssJznob7fNlvbuGClqDqY8AbhabMGRfup3WNVGB6IyWes75S1JjtVJR2FhfPbJfaApMPYAwKxYgr5or5/edPdcl2VYomHXPbmt5VCBh+8Mpr8ueNbqjWIIIxeVLBwcHv5XsKZWKoub66rBT56VS2cl+xUkP4ajXaX/seoHo1725we/310j2bpqW8lT9rq1tUSlyI0F0RouNcz6S5mTecuu8yso3ziUciFYw7yOiZ0LB0+d12TLGWifiOrQ0BtMJAFgot/TG9RyprW1J+uXXI39LR2aG6HI7besTTpF1JW/ffXHg4tHLS69i057d1faEAyko3rRqeHB45O5LlZy0uqlu276EA9EXWkr9Af6O5Pj09LTFH+6oEOdMxCduJ7tOMDs5kS6Y+RD4c9Zkp0uXGAm1/GoE8yEgeji4IgGe9Lhsd42XoskqohXMbUT04KUO4apLtVilKBqD6U8ASBftMoat7oarT5yjwSYAYvISgZTC8+Rk1UpnXdVINhwLkPAcizFmc8tcr8qCGIo25g35Ah6JnoiIIZ4ghP5g/I5K48VYRgYd44WAfBkqgOhOAFBLddXq5GcbHZXjXkDIgognta3Whu+IaIm8E5NfAxEPb7YYs7Oysuh/zRGxsWWLbUZ3V2/L9YZBwI6MmTNy7fbyXrkhklVE6uDAgVPs0731z/t8gRc40G0AdEl6wnlAof+Iw4Aka3TckSXgCNjLVMqvly3JadLrl0W8NQnvY8IgciNyo8unQG60AlOhFW8KTCkypch1GgFx+f0PcPZAXuHGGrEAAAAASUVORK5CYII="
            alt=""
          /><span>1</span>
        </div>
      </div>
      <div class="detail_comment">
        <div class="comment_title">评论·0</div>
        <div class="comment_box">
          <div class="comment_empty">
            <img src="../assets/comment_empty.32fa18fd.png" alt="" />
            <p>暂无评论</p>
          </div>
        </div>
      </div>
      <div class="child_comment"><!----></div>
    </div>
  </div>
</template>

<script>
import BackBox from "@/components/BackBox.vue";
export default {
  components: { BackBox },
  name: "newsDetail",
};
</script>

<style lang="less">
.page {
  background: #f9f9fa;
  min-height: 100%;
  padding-bottom: 1.6rem;
  font-size: 14px;
}
.detail_page {
  padding-bottom: 0.4rem;
  padding-bottom: 3.2rem;
  box-sizing: border-box;
}
.detail_title {
  padding: 0.4rem 0.4rem 0 0.4rem;
  font-size: 0.58667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
}
.detail_text .detail_text_left,
.detail_text {
  display: flex;
  align-items: center;
}
.detail_text {
  justify-content: space-between;
  margin-top: 0.13333rem;
  margin-bottom: 0.4rem;
  padding: 0 0.4rem;
}
.detail_text .detail_text_left,
.detail_text {
  display: flex;
  align-items: center;
}
.detail_text .detail_text_left img {
  width: 1.06667rem;
  height: 1.06667rem;
  border-radius: 50%;
  margin-right: 0.26667rem;
}
.detail_page img {
  max-width: 100%;
  height: auto;
}
.detail_text .detail_text_left div:nth-child(2) {
  color: #b7bac3;
}
.detail_text .detail_text_left .community p {
  font-size: 0.37333rem;
  color: #070d1e;
  font-family: HarmonyOS_Sans_SC_Medium;
}
.detail_text .detail_text_left div:nth-child(2) {
  color: #b7bac3;
}
.detail_cont {
  padding: 0 0.4rem 0.8rem;
  color: #101b37;
  font-size: 0.37333rem;
  word-break: break-all;
}
.dividing_line {
  width: 100%;
  height: 0.26667rem;
  background: #f8f9f9;
}
.detail_foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 1.06667rem;
  padding-bottom: 0.26667rem;
  height: 1.6rem;
  z-index: 9;
  box-sizing: border-box;
  background: #fff;
}
.detail_foot .foot_item {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.37333rem;
  color: #343d55;
}
.detail_foot img {
  width: 0.64rem;
  margin-right: 0.05333rem;
}
.detail_page img {
  max-width: 100%;
  height: auto;
}
.detail_foot .foot_item {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.37333rem;
  color: #343d55;
}
.detail_comment {
  padding: 0.4rem;
}
.detail_comment .comment_title {
  position: relative;
  padding-left: 0.26667rem;
  font-size: 0.42667rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #101b37;
  line-height: 0.64rem;
}
.detail_comment .comment_title:before {
  content: " ";
  width: 0.10667rem;
  height: 0.42667rem;
  background: #1069fb;
  border-radius: 0.05333rem;
  position: absolute;
  left: 0;
  top: 0.10667rem;
}
.detail_comment .comment_box {
  margin-top: 0.4rem;
}
.detail_comment .comment_box .comment_empty {
  text-align: center;
  padding-top: 0.66667rem;
  padding-bottom: 1.33333rem;
}
.detail_comment .comment_box .comment_empty img {
  margin: 0 auto;
  width: 3.73333rem;
}

.detail_page img {
  max-width: 100%;
  height: auto;
}
.detail_comment .comment_box .comment_empty p {
  margin-top: 0.26667rem;
  font-size: 0.37333rem;
  color: #b7bac3;
  line-height: 0.53333rem;
}
</style>
