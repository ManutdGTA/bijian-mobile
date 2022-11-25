<template>
  <div class="news_page">
    <div class="container">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="item in list" :key="item.id" class="block">
            <div class="article_list">
              <div class="top_box">
                <div class="top_user">
                  <img :src="item.pictureUrl" alt="" class="pictureUrl" />
                  <div>
                    <div class="name">
                      {{ item.nickname }}
                      <!---->
                    </div>
                    <div class="time">2022-11-01</div>
                  </div>
                </div>
                <div class="focus">关注</div>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="content van-multi-ellipsis--l3">
                {{ item.text }}
              </div>
              <!---->
              <div class="imgList imgListHalf">
                <img alt="" v-for="(v, i) in item.imgUrl" :key="i" :src="v" />
              </div>
              <div class="bottom_box">
                <div class="bottom_left">
                  <i class="van-icon van-icon-eye-o" style="font-size: 18px"
                    ><!----></i
                  ><span>{{ item.browseNum }}浏览</span>
                </div>
                <div class="bottom_right">
                  <div class="bottom_right_block">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAAXNSR0IArs4c6QAABSxJREFUaEPtmHts01UUx8+5fewhbhCeQ2JkJEan+H4lKrIlIphFEUZmW+r66xhsPv9oi2NDF5TBXNsYGM5Zx9pttFWnIcoQ4yOiBkb8g5lFSBgE9s+WGRkqyF5t7zG/0t8Ypdtv1BXaZL9/2t/vPs753O+59557EQCAiFTib6I+iOjDKZA4km9KETkxHI5W1cG2g/sBIAUQe5QKdnDRgjmeigrTP3JtoymPmSL6olKN3+drvNIp7EtSK192Oar2RuPseG1iBqIRTEeA4IEIxrlKnWRocmz7ZDJhYgJiLNn05MDA8A9jOUpA/bNmzczaZSvvmSyYmIBojebPidNzkpMqtUrj9wUKiPhy6ZuSMVtzg7UsbkE2vLZl0fkL538HAIXoJAK0e1z2R8u2f5B2pvP0MSCYG/p+zOOy3x+3IGsLze8HAvTKyMirVAXNH1d5xXedYG7mRPkhkAsel31mXIKUldVMP9PddRoQpoUc7M7Oy759fW6uLwhitHzEORdCZX6vy54alyBr11nMAT/fJjmnYGzzngZrtfSeECAtLW3Kvfu/6CSgBSHHLy5YmJFprTD/lVAgBUWl+cM+X7PkNENFndtZ/fro0EkIRbQG02ECeCjkOE9PS1tct7Pi5DggnDFsGHOvISTGsE+hYD83Oqq+l5tLk7KPCCVvPT440P/jiBqArW6XbVW48TBF5Hy7XI5waPacuS/ufG/jH2M1mhQQnWD+jBOtlIykpqY+vbv23Z8mDUTcjxB/W5Fz7xN6vX44Esw1gQjFpcuHhvz5QJBJSEnB/YAQOfH7EDF4QBMNepy2RyIZi1qRUGdqpaq4sb4qYjhOCKSmxp3S1t7ePDrtGEtilVotNDm2uyceN5FrHj9+HO07vEv7h/pbASB4DEeGX3kabHlRK6IVLF4ivnoCzvXr8rJn54Y2wAnUl62iNZg6COCOkNqHPU7b0qhAjCXlOQMDg9+ENe4EhH/Fb8ThHkRQBssJznob7fNlvbuGClqDqY8AbhabMGRfup3WNVGB6IyWes75S1JjtVJR2FhfPbJfaApMPYAwKxYgr5or5/edPdcl2VYomHXPbmt5VCBh+8Mpr8ueNbqjWIIIxeVLBwcHv5XsKZWKoub66rBT56VS2cl+xUkP4ajXaX/seoHo1725we/310j2bpqW8lT9rq1tUSlyI0F0RouNcz6S5mTecuu8yso3ziUciFYw7yOiZ0LB0+d12TLGWifiOrQ0BtMJAFgot/TG9RyprW1J+uXXI39LR2aG6HI7besTTpF1JW/ffXHg4tHLS69i057d1faEAyko3rRqeHB45O5LlZy0uqlu276EA9EXWkr9Af6O5Pj09LTFH+6oEOdMxCduJ7tOMDs5kS6Y+RD4c9Zkp0uXGAm1/GoE8yEgeji4IgGe9Lhsd42XoskqohXMbUT04KUO4apLtVilKBqD6U8ASBftMoat7oarT5yjwSYAYvISgZTC8+Rk1UpnXdVINhwLkPAcizFmc8tcr8qCGIo25g35Ah6JnoiIIZ4ghP5g/I5K48VYRgYd44WAfBkqgOhOAFBLddXq5GcbHZXjXkDIgognta3Whu+IaIm8E5NfAxEPb7YYs7Oysuh/zRGxsWWLbUZ3V2/L9YZBwI6MmTNy7fbyXrkhklVE6uDAgVPs0731z/t8gRc40G0AdEl6wnlAof+Iw4Aka3TckSXgCNjLVMqvly3JadLrl0W8NQnvY8IgciNyo8unQG60AlOhFW8KTCkypch1GgFx+f0PcPZAXuHGGrEAAAAASUVORK5CYII="
                      alt=""
                    /><span class="">{{ item.likeNum }}</span>
                  </div>
                  <div class="bottom_right_block">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAsBJREFUWEftV01PE1EUPXemQIBEohJZGRM1hhQKbQeIxg86KYkuROPGhQv/gNE9Jq5MdK+JP8CFCzdGYaEJzRQ/ogGmLW1piFFj4qqJSmoCBOjMNW+GQSvQlulokLSbedP77rnnnvvenfcIO+xHO4wP6oQqVWRThQL90cMwzL2VnGuyy9J8Zir26U+MEkLd/WcOwpAeEXCqpmBVOjPwGrJ5JTv18ovjUkooHHn1r8g4BASpbCJ+egMhu0zGR8vAdBuEp1Um6m4a4yKIb1nOsnzEKd+6QoGwqgA8baNTXyah6e4iVee1Vbw6IUe/ukKVVtKuU4g6B6L7nKxbjZYlXR9dFO+KMtS2ILNPjFsNKur6eMH+f7hlQV5sdnzmJmPfRUPxZA11DkT3NxSNr+tlILqf0bUb4j0QjqTFY82WzSTi1jigqPfAfN3xWfXJ7XOTsW+7k5Df72/0NXUMO9kZwIfZpDZjKRGKDBGozWrw4EImGR8X466Q2isDRx2f4nJ+NJfLrXiiUKUd48a+63aZGxHK+tQVqiTp/6eQPxgJyhKS1mkIOJFOxN9VyrIWe084cpyBtwLDMBHKpeKptdg2rPgErHAxD6AJjFkAa4e1TcISmSB8XgY/eK/Hf3VwAMeUSHsj4xqBDoFZKkO6D4QuAMuN5OtwPjmlZ2pFHSHmO1VnzsibzMOzqYkpqxkGB/slwhiIDlSLwUQ3s7p215m/4RrUHVYvE/gqwGWuQSQyVwA0ACgQcM7u1HgOQHTtVQA6wObWxGieQQ+zCe3x73Nc31x7w+pZE/wEQDODf9j1pz0AliTQpZmE9qJalTwhJEB6QmqUyXwGUIsNyovE0oV0Uou5IVOyqN0CBELqIMBjtj+dzyS1CbdYnhASIME+9aR4pqa1N7WQ8YxQrSQ8W0NeEtly2/+NINvBdL3ttxNkO3N/AuLGmjQC3ZSZAAAAAElFTkSuQmCC"
                      alt=""
                    /><span>{{ item.commentNum }}</span>
                  </div>
                  <div class="bottom_right_block">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAiNJREFUaEPtWLtOwzAUPZcBRgZGVsQELDw+gC+AhQYkGhgYEBNhYYMfIEyIkaYDJDDAByA+gMfAQ0LqzsiMxMBFrhIJqhLbspukwh2bm3vPy5ZjQp//qM/xwxEo20HngHPAUIH/E6GVtW2PmWoMjDIw0E04Zt49bx5e54la84N7VdEJeI2jcDWvXskBzw9OAKzJBjNhKWmEF3l1nh+wrE/2nIGHJApnjAgI5b+YzlSGVpLAsh9cMrCQEmAGXgB8Wo0QY5gIY509rTjg+Tu3AM+K5gw8J1E4peKGak2tHowT4QbAaE8IiEVHwHRKQJpJVeCiLg+86jzpIu4VgT/AvzHjI4uTlQj1gkAO+HkQTnUcL9yBPPBJM2zpClYoARn49rrQXHOFEVABX1kCquArSWCxvjUyREOPHfu82G3mReZ1tt1utYVEyKsHeyDspwCsgRf9CiEgBqUkNmwpn7lRGAExUMTpsnn0bhqbn+8XSsAm8FIccAS6KOAiZDsWnr9zDMJ4uy+jFUcHm0aflLpnE1NCuvMqFyFHoDMCuoq4CFX1e0DVGV3HpYvY84NbAD27VukS2ScCJtP/7+IonDPaRnUutlRVzqkbJGAiOyUTcHUWhYtGBHSuFi0Q+NVigHj5tHEYGxFon+UVL3ctE2jEUbgu6yldA1kDlet12TDZcwK+CHgj4kSmvPJxWja07OfKDpQN9K/5jkDZzjgHnAOGCvR9hL4BDZCVQKsqH9YAAAAASUVORK5CYII="
                      alt=""
                    /><span>分享</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import btc from "@/assets/bitcoin.webp";
export default {
  name: "NewsView",
  data() {
    return {
      list: [
        {
          browseNum: "49",
          code: null,
          commentNum: "3",
          content:
            '<p><span style="color: #000000; font-size: 14px;">快转鸽吧，再加下去别说数字货币这种风险市场着不住，实体、消费都无法承担。</span><img src="https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/2D3C820D3D184CC5A56F7B3AEA67A384.jpg"></p>',
          createTime: "2022-11-01 16:04:12",
          deleted: 0,
          id: "6360d2fceda4e1780c4cf7a5",
          imgUrl: [
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/2D3C820D3D184CC5A56F7B3AEA67A384.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "5",
          likeUsers: [
            "6334fa841821dc298489d157",
            "6363a6619049f10991f5889c",
            "636e42a4f01839500719f74c",
            "636e44adf01839500719f76f",
            "636e4fd6f018392ada5846af",
          ],
          nickname: "赤兔马",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/8E158B7B1B31412F94360F07CBBF32EC.jpg",
          status: 1,
          stickyTime: null,
          text: "快转鸽吧，再加下去别说数字货币这种风险市场着不住，实体、消费都无法承担。",
          title: "加息时间表，关注起来",
          type: 1,
          updateTime: "2022-11-02 13:41:39",
          userId: "6360cc56eda4e1780c4cf68a",
        },
        {
          browseNum: "48",
          code: null,
          commentNum: "0",
          content:
            '<p>从凌晨的分析来看，行情比想象中的弱，这会儿了也并没有转好的迹象，今天如果一直走弱，那就要果断平仓期权+清仓山寨，收缩战线保留实力。</p>\n<p>&nbsp;</p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/830e898e8d484641b519148316929f44.jpg"></p>',
          createTime: "2022-11-03 10:52:12",
          deleted: 0,
          id: "63632cdc136cdf085cca567a",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/830e898e8d484641b519148316929f44.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["6343dcff1821dc0f196beabf"],
          nickname: "赤兔马",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/8E158B7B1B31412F94360F07CBBF32EC.jpg",
          status: 1,
          stickyTime: null,
          text: "熊市不言底，保住本金最重要，加了杠杆的注意卸掉一些杠杆保平安",
          title: "行情比较弱，要做好平仓和清山寨的准备了",
          type: 2,
          updateTime: "2022-11-03 16:39:16",
          userId: "6360cc56eda4e1780c4cf68a",
        },
        {
          browseNum: "44",
          code: null,
          commentNum: "0",
          content:
            '<article>\n<div class="l">\n<div class="l">\n<section>\n<div>\n<div class="hz ia ib ic id">\n<p id="123d" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">11月加息75个基点还是毫无意外的发生了，这也确实在预期之内，本身就没有任何博弈的意义，所以市场给出了最明确的答案，当开始公布加息75以后，市场并没有太大的波动，虽然有小幅度的上涨，但并不足以改变格局，倒是在加息之后FOMC的报道引起了风险市场的遐想，也为12月加息的博弈增加了砝码。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/d47247ca2c794133bad11106f4e62b2d.png"></p>\n<p id="6ccd" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">尤其是经过Nick的解读后，可以看作是美联储的内部博弈加剧，尤其是对于12月开始减缓加息的可能性开始上升，同时美联储开始有意识的会考虑到加息对经济，通胀以及风险市场的滞后性。总的来说在鲍威尔的讲话前，美联储确实透露出了有意识的考虑减缓加息的可能。但也明确了目前的情况下加息是不可能停止的。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/40268e63c6ea482880b3d292522b04f8.png"></p>\n<p id="971f" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而在鲍威尔的讲话后整个的尺度就完全的被鲍威尔所掌握，首先是鲍威尔表明了确实会有放缓加息的可能，但就像我们之前了解的一样，加息的放缓是有代价的，这个代价就是终端利率的提升，所以在表明可能会放缓之后，鲍威尔直接说出了终端利率将可能会高于九月份的预期，当时在九月份的预期是4.6%。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/9fc1dc5b399246d9a09192009b89509c.png"></p>\n<p id="2dab" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而实际上在十月份的CPI出现时，市场基本就已经意识到这个利率已经满足不了了，甚至多个机构评论很有可能终端利率会提升到5%以上，鲍威尔也强调了美联储短期是没有停止加息的打算，所以即便是12月加息50个基点，那么2022年的利率也会提升到4.5%。2023年只要加息一次就超过了4.6%，最少也会达到4.75%。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/f0946134ee4547568461f1898bed9d28.png"></p>\n<p id="98b0" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而进入问答环节后，又出现了三个需要注意的观点，首先是鲍威尔认为放缓加息并不一定是因为通胀的下降，这句话的意思就是说，即便是通胀的情况依然没有好转但美联储也有可能会选择放缓加息，这就意味着通胀数值不再是加息的主要依据，结合鲍威尔在后边的发言，可以总结出就业和工资的变化以及美债收益率</p>\n<p id="1965" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">甚至是风险市场的变化都有可能是美联储选择对加息进行调节的因素。这也证明了到目前为止，美联储确实走完了前置加息的第一阶段，就是用快速高额的加息来提前限制市场。而在第二阶段开始会从加息速度转移到终端利率的取舍。也正是因为如此，所以加息的策略面从&ldquo;多食少餐&rdquo;转变为&ldquo;少食多餐&rdquo;。</p>\n<p id="1e1f" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">其次就引申出了第二个需要注意的观点，终端利率到多少才是合适的。很显然到目前鲍威尔也没有一个明确的答案，相信整个美联储也是同样处于博弈之中，所以如果选择12月的加息放缓很有可能是对于市场的一次测试，看看减缓的加息是否依然可以让风险市场受到制约，而4.5%的利率能否继续打击依然旺盛的就业。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/69b46cd2e2274bc082b411e5d973e7d3.png"></p>\n<p id="2cfa" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">如果就业率和收入水平继续提升，那么美联储在2023年开始新一年加息中必然不会吝惜手中的武器，甚至鲍威尔已经明确的表明，美联储并不怕加息过多，美联储有足够的工具来应对过高加息的局面。这句话是实话，毕竟相对通胀来说，想要给市场升温就简单很多了，只要放水就能实现。所以美联储确实不怕过度加息。</p>\n<p id="bf7d" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而这点有可能是导致今天凌晨大幅下跌的其中一个主要原因，因为美联储不怕加息上的&ldquo;错&rdquo;，所以很有可能在2023年的时候依然会继续长时间的执行加息策略，即便是每次小额的加息，但只要是不停，就很难让风险市场预期最终的终端利率在哪里，甚至是美联储自身都有可能说不清楚。这才是让市场最头疼的地方。</p>\n<p id="1c8b" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">一个根本预期不到底部在哪里的情况就这么出现了。只能寄托于走一步看一步，虽然美联储说加息并不完全看通胀的数据，但停止加息必然是通胀实现了大幅的下跌才有可能，因此2023年的重点仍然要停留在CPI上，中有CPI出现了连续且较大幅度的下跌，才可能会预示着美联储阶段性的暂定加息。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/525b353a292b4c8eb53d368f8d07b52d.png"></p>\n<p id="0c5a" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">对，就是阶段性的暂停，因为一旦通胀出现了反复。或者是劳动力市场和工资的螺旋上升仍然会让美联储祭出加息这面大旗。同时，这也带出了第三个我们需要关注的数据，就是高通胀下工资收入的上升。之前更多的对于加息数据的预测都是非农决定了上限，而CPI决定了下限。但从现在来看，很有可能不再是这样了。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/8283c4f0407b4ecbba79a73659b006cb.png"></p>\n<p id="ff0b" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而从2023年之后决定加息上限的应该就是收入的变化，如果同比出现下跌，加息可能会缓解，而相反则不排除加大加息的力度。相反非农和通胀的总体数据会变为决定加息的下限，尤其是对于劳动力市场的降温可以看作是辅助降低工作的重要手段，而只要工资能够下降却并不代表一定要出现大规模的裁员。</p>\n<p id="af4d" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">但仍有一点需要注意的是，在被问及工资是否是当前通​胀的主要因素时，鲍威尔的的回答很微妙。他表示出当工资增长太高时通胀率不可能会下跌到2%。但他也承认，在目前通胀率超过8%的情况下，工资并不是提升通胀的主要驱动因素。所有这些都预示着，如果通胀开始迅速下降，而劳动力市场保持强劲。</p>\n<p id="f121" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">那么美联储将会如何选择，是以工资作为加息的主导，还是以通胀作为加息的主导，从我个人的观点来看，后者仍然是占有更大权重，毕竟加息的本质是为了抗击通胀，而打击过高的工资也是为了降低通胀，甚至是让劳动力市场降温都是为了抗击通胀。所以2023年的后期通胀依然是决定加息的主要原因。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/3354d42d5f844d2a86a3538f4645d22e.png"></p>\n<p id="6613" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而今天下跌的另一个主要原因就是鲍威尔在回答问题的最后，给出的美国经济能否软着陆时的答案，已经明显的不再有上半年的从容和坚定，反而是更多的是无奈和退避。虽然鲍威尔还认为软着陆的可能性存在，但也知道在高利率的情况下这种可能性实在是太低了。而对于风险市场来说，一旦出现经济的衰退。</p>\n<p id="01ec" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">那么风险市场的底部就肯定不是现在，伴随着经济衰退，大量的风险市场和固定资产必然会遭到抛售，届时可能随着经济衰退的扩大和持续才有可能看到底部，即便是BTC和ETH也是如此，对于现在的币市来说，市值过低反而是优势的一面，占据更大比例的美债和美股可能才是被优先清算的资产。</p>\n<p id="799e" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">也正是因为如此，美联储可以说改变了下半场游戏的规则，加息的多少已经很难作为衡量风险市场是否见底的标准，也不能作为可以视作美联储转向的风向标，这意味着加大了和美联储博弈的难度。甚至是2023年虽然加息的幅度会小于2022年，但很有可能2023年的风险市场会比现在更难过。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/4e70963da9624d1696ca694ba2d1ed94.png"></p>\n<p id="3edd" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">不过即便如此，今年的12月依然是可以看作美联储结束了加息第一阶段的信号，对于整个的风险市场来说，这一阶段的结束并不是意味着全部的利空，如果通胀确实得到了控制，工资和就业也能被高利率所限制，那么现在也是可以视为风险市场的底部。只是目前市场仍然在鲍威尔偏鹰派的发言中震荡。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: center;" data-selectable-paragraph=""><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/fd690fddac9f4e3ea6b3204a731d2a82.png"></p>\n<p id="e743" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">截止到到鲍威尔讲话的结束，美股也走向了闭盘。毫无悬念纳指期货出现了大跌超过3.5%的局面，直接抹除了从21日Nick透风以来的上涨，甚至最低点已经超过了21日的水平，不过单纯从价格来看BTC和ETH依然处于较高的位置，并没有随着纳指期货一样回调到更低的水平。这有可能还是因为币市较低市值所导致。</p>\n<p id="af3f" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">虽然现在确实面的困难增加了，但也并不是无解。就像鲍威尔所说的，只是窗口变窄了。随着加息的落地，接下来的一个月就是美国的中期大选，从今天的局势来看对于民主党来说很难用&ldquo;助力&rdquo;或&ldquo;添乱&rdquo;这么简单的词来形容，而民主党也势必没有办法获得美联储更多帮助。所以是否可以从供应端解决通胀是当前的选择。</p>\n<p id="8f14" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">如果在一个月的时间内民主党能够解决供应端的问题，依然还有机会，比如从这次的欧佩克事件中就可以看到石油供应的走势反复，另一方面就是能否快速的帮助乌俄地缘冲突的结束也是足够好的加分项，毕竟对于美联储来说，通胀降低就暂缓加息的方案是没有问题的。而留给民主党的时间确实不多了。</p>\n<p id="5986" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: left;" data-selectable-paragraph="">到了早晨亚洲时间开始，市场出现了反转，不再是下跌的趋势，在纳指期货上涨的带动下BTC和ETH的价格在盘后出现了上升。这种上涨现在并不清楚是因为市场已经开始在预期在12月的减弱加息，还是因为亚洲市场认为当前的已经处于风险市场的底部，所以处于较强的抄底趋势。但价格确实从早晨八点开始拉升。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: left;" data-selectable-paragraph=""><img style="display: block; margin-left: auto; margin-right: auto;" src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/52cb6c3e87354a29b293251565f6b3e5.png"></p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" style="text-align: left;" data-selectable-paragraph=""><img style="display: block; margin-left: auto; margin-right: auto;" src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/2f5a243a83924e70bf4985a1a6bae6c2.png"></p>\n<p id="75c1" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">而这并不是单纯的只有BTC和ETH的上涨，确实是更像是市场对于政策的逐渐接受，就连美元指数都在开始下降，从112的上方开始跌破。甚至连黄金的价格都开始出现了上升的趋势，而这种情况确实就是整体风险市场的向好，而并不是单一纳指期货或者是币市的回升。</p>\n<p id="092b" class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">当然重点依然要看下午的欧洲人的表现以及晚上的美股的走势。</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">&nbsp;</p>\n<p class="pw-post-body-paragraph jd je ig jf b jg jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka hz gh" data-selectable-paragraph="">文章引用自：@phyrex.ni</p>\n</div>\n</div>\n</section>\n</div>\n</div>\n</article>',
          createTime: "2022-11-03 10:30:33",
          deleted: 0,
          id: "636327c9136cdf085cca5667",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/d47247ca2c794133bad11106f4e62b2d.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/40268e63c6ea482880b3d292522b04f8.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/9fc1dc5b399246d9a09192009b89509c.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/f0946134ee4547568461f1898bed9d28.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/69b46cd2e2274bc082b411e5d973e7d3.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/525b353a292b4c8eb53d368f8d07b52d.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/8283c4f0407b4ecbba79a73659b006cb.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/3354d42d5f844d2a86a3538f4645d22e.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/4e70963da9624d1696ca694ba2d1ed94.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/fd690fddac9f4e3ea6b3204a731d2a82.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/52cb6c3e87354a29b293251565f6b3e5.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/2f5a243a83924e70bf4985a1a6bae6c2.png",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "大空头",
          pictureUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20220919/a450b96a95e04973975cc58b2c05e8bf.png",
          status: 1,
          stickyTime: null,
          text: "美联储的内部博弈加剧，尤其是对于12月开始减缓加息的可能性开始上升；鲍威尔则直接表示终端利率将可能会高于九月份的预期，当时在九月份的预期是4.6%。",
          title: "美联储11月加息在预期之内 鲍威尔讲话奠定终端利率为主的走势",
          type: 2,
          updateTime: "2022-11-03 16:49:40",
          userId: "63622bf7136cdf085cca55b4",
        },
        {
          browseNum: "34",
          code: null,
          commentNum: "0",
          content:
            '<p><span style="color: #000000; font-size: 14px;">zkSync </span><span style="color: #000000; font-size: 14px;">是由</span><span style="color: #000000; font-size: 14px;">Matter Labs </span><span style="color: #000000; font-size: 14px;">于</span><span style="color: #000000; font-size: 14px;">2019 </span><span style="color: #000000; font-size: 14px;">年推出的以太坊</span><span style="color: #000000; font-size: 14px;">Layer 2 </span><span style="color: #000000; font-size: 14px;">扩容解决方案，</span><span style="color: #000000; font-size: 14px;">2018 </span><span style="color: #000000; font-size: 14px;">年创立了</span><span style="color: #000000; font-size: 14px;">Matter Labs</span><span style="color: #000000; font-size: 14px;">，</span><span style="color: #000000; font-size: 14px;">zkSync </span><span style="color: #000000; font-size: 14px;">已获得多家知名</span><span style="color: #000000; font-size: 14px;">VC </span><span style="color: #000000; font-size: 14px;">如</span><span style="color: #000000; font-size: 14px;">a16z, Dragonfly </span><span style="color: #000000; font-size: 14px;">投资。</span><span style="color: #000000; font-size: 14px;"><br><br></span><span style="color: #000000; font-size: 14px;">空投教程链接：</span><span style="color: #000000; font-size: 14px;">https://www.bibiq8.com/chance/airdropDetail/238402791981322240</span></p>',
          createTime: "2022-11-04 14:29:45",
          deleted: 0,
          id: "6364b1599049f10991f5af94",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["6364d3779049f10991f5b42f"],
          nickname: "科学家",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221104/AA78A171FAAE47A4AB1389DFF305130A.jpg",
          status: 1,
          stickyTime: null,
          text: "zkSync 是由Matter Labs 于2019 年推出的以太坊Layer 2 扩容解决方案，2018 年创立了Matter Labs，zkSync 已获得多家知名VC 如a16z, Dragonfly 投资。\n\n空投教程链接：https://www.bibiq8.com/chance/airdropDetail/238402791981322240",
          title: "ZkSync Crew3空投教程",
          type: 1,
          updateTime: "2022-11-04 15:18:48",
          userId: "63622c15136cdf085cca55c2",
        },
        {
          browseNum: "22",
          code: null,
          commentNum: "5",
          content:
            '<img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221123/d7362a32984ff457a1593939bfa5244e.png" alt="dachshund" width="100%"><br><br>',
          createTime: "2022-11-23 10:55:35",
          deleted: 0,
          id: "637d8ba7a09eda68d1aabd69",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221123/d7362a32984ff457a1593939bfa5244e.png",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["6364d3779049f10991f5b42f"],
          nickname: "逍遥子",
          pictureUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221123/uai0o1.jpg",
          status: 1,
          stickyTime: null,
          text: "",
          title: "今日早报",
          type: 1,
          updateTime: "2022-11-23 15:02:00",
          userId: "637d8798a09eda68d1aabd67",
        },
        {
          browseNum: "27",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">1</span><span style="color:#000000; font-size:14px;">、币安推出蓝鸟指数，包含</span><span style="color:#000000; font-size:14px;">MASK</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">DOGE</span><span style="color:#000000; font-size:14px;">和</span><span style="color:#000000; font-size:14px;">BNB</span><span style="color:#000000; font-size:14px;">，这足以说明日后的关注重点了吧？</span><span style="color:#000000; font-size:14px;"><br/>2</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">People</span><span style="color:#000000; font-size:14px;">将要拍卖第二份复印件，这也是为什么今天</span><span style="color:#000000; font-size:14px;">People</span><span style="color:#000000; font-size:14px;">突然上涨的原因。</span>',
          createTime: "2022-11-02 14:10:36",
          deleted: 0,
          id: "636209dcb9d34858377053ad",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: [],
          nickname: "赤兔马",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/8E158B7B1B31412F94360F07CBBF32EC.jpg",
          status: 1,
          stickyTime: null,
          text: "1、币安推出蓝鸟指数，包含MASK、DOGE和BNB，这足以说明日后的关注重点了吧？\n2、People将要拍卖第二份复印件，这也是为什么今天People突然上涨的原因。",
          title: "两件务必关注的事情",
          type: 1,
          updateTime: "2022-11-02 14:10:36",
          userId: "6360cc56eda4e1780c4cf68a",
        },
        {
          browseNum: "21",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">FTX</span><span style="color:#000000; font-size:14px;">的</span><span style="color:#000000; font-size:14px;">ETH</span><span style="color:#000000; font-size:14px;">持仓继续下降，底部净增仓位仅剩</span><span style="color:#000000; font-size:14px;">1</span><span style="color:#000000; font-size:14px;">亿多，币安、</span><span style="color:#000000; font-size:14px;">ok</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;"> bybit</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">cme</span><span style="color:#000000; font-size:14px;">四大交易所的</span><span style="color:#000000; font-size:14px;">ETH</span><span style="color:#000000; font-size:14px;">持仓量明显增加，目前还没有下跌的迹象，其中币安增加</span><span style="color:#000000; font-size:14px;">5</span><span style="color:#000000; font-size:14px;">亿，</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">增加</span><span style="color:#000000; font-size:14px;">2</span><span style="color:#000000; font-size:14px;">亿，</span><span style="color:#000000; font-size:14px;">bybit</span><span style="color:#000000; font-size:14px;">增加</span><span style="color:#000000; font-size:14px;">3</span><span style="color:#000000; font-size:14px;">亿，</span><span style="color:#000000; font-size:14px;">cem</span><span style="color:#000000; font-size:14px;">增加</span><span style="color:#000000; font-size:14px;">1.2</span><span style="color:#000000; font-size:14px;">亿，接下来对</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">和大</span><span style="color:#000000; font-size:14px;">B</span><span style="color:#000000; font-size:14px;">网进行进一步分析。</span><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/B5407488A1CD4E2982B2DE0822644250.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/87F43310E6D743ECA2EC78A7B7F5ED92.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/437ACD5A0B194905B0028FAACD9773D4.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/2051DD4FAC2D4C6691E2F9C4310590B9.jpg\' /><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">为啥要对</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">单独分析，因为</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">的当季币本位每次都在以太的拉盘中起到了举足轻重的作用，图一是</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">的当季币本位合约，持仓量明显增加，图二的</span><span style="color:#000000; font-size:14px;">u</span><span style="color:#000000; font-size:14px;">本位永续和</span><span style="color:#000000; font-size:14px;">u</span><span style="color:#000000; font-size:14px;">本位的当季合约持仓量现在都降到启动之前的位置了，图四是拉取的</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">当季币本位的目前大单委托成交情况，可以看到目前依然是净买接近</span><span style="color:#000000; font-size:14px;">4000</span><span style="color:#000000; font-size:14px;">万刀。</span><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/6E3F22D2589144119D94DBCD76F51DDB.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/99B053D5073C426FB9AE48BF83A9C480.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/37EBFF5524A747FFBB7D0B444F8ABADB.jpg\' /><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/00B0F33C2BF04BF28559D91B303B06C1.jpg\' /><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">总结：</span><span style="color:#000000; font-size:14px;">FTX</span><span style="color:#000000; font-size:14px;">的低位建仓</span><span style="color:#000000; font-size:14px;">(1350</span><span style="color:#000000; font-size:14px;">以下</span><span style="color:#000000; font-size:14px;">)</span><span style="color:#000000; font-size:14px;">的空头清算在爆仓</span><span style="color:#000000; font-size:14px;">6.5</span><span style="color:#000000; font-size:14px;">亿后，基本完成清算，目前其他几大所的持仓均在高位；</span><span style="color:#000000; font-size:14px;">okex</span><span style="color:#000000; font-size:14px;">当季币本位合约是增持信号；大</span><span style="color:#000000; font-size:14px;">B</span><span style="color:#000000; font-size:14px;">网在一个月前均价在</span><span style="color:#000000; font-size:14px;">1420</span><span style="color:#000000; font-size:14px;">附近的</span><span style="color:#000000; font-size:14px;">8</span><span style="color:#000000; font-size:14px;">万个以太开始出货；所以在</span><span style="color:#000000; font-size:14px;">1600-1700</span><span style="color:#000000; font-size:14px;">之间的这个位置大概率就是筑顶出货阶段。</span><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">接下来分析大</span><span style="color:#000000; font-size:14px;">B</span><span style="color:#000000; font-size:14px;">网的</span><span style="color:#000000; font-size:14px;">ETH</span><span style="color:#000000; font-size:14px;">多头持仓数据：</span><span style="color:#000000; font-size:14px;">9.15-9.16</span><span style="color:#000000; font-size:14px;">这两天大</span><span style="color:#000000; font-size:14px;">B</span><span style="color:#000000; font-size:14px;">网的以太多头建仓了</span><span style="color:#000000; font-size:14px;">8</span><span style="color:#000000; font-size:14px;">万个以太，我手动计算了一下，均价大概在</span><span style="color:#000000; font-size:14px;">1420-1450</span><span style="color:#000000; font-size:14px;">之间，目前该仓位已经开始出现明显的减仓信号，根据以往的情况，大</span><span style="color:#000000; font-size:14px;">B</span><span style="color:#000000; font-size:14px;">网在减仓期间以太价格并不会出现明显的下跌，往往还会继续上升一波，但这个减仓信号表明顶部不远了。</span><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/8D058C6071A142729CD6AAABB892507F.jpg\' />',
          createTime: "2022-11-02 11:28:27",
          deleted: 0,
          id: "6361e3dbb9d3483b9172a873",
          imgUrl: [
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/B5407488A1CD4E2982B2DE0822644250.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/87F43310E6D743ECA2EC78A7B7F5ED92.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/437ACD5A0B194905B0028FAACD9773D4.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/2051DD4FAC2D4C6691E2F9C4310590B9.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/6E3F22D2589144119D94DBCD76F51DDB.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/99B053D5073C426FB9AE48BF83A9C480.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/37EBFF5524A747FFBB7D0B444F8ABADB.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/00B0F33C2BF04BF28559D91B303B06C1.jpg",
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/8D058C6071A142729CD6AAABB892507F.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "掘金人Aexlrod",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/F821ACE9BF6443E4AE96DEFD7B3FCE62.jpg",
          status: 1,
          stickyTime: null,
          text: "FTX的ETH持仓继续下降，底部净增仓位仅剩1亿多，币安、ok、 bybit、cme四大交易所的ETH持仓量明显增加，目前还没有下跌的迹象，其中币安增加5亿，okex增加2亿，bybit增加3亿，cem增加1.2亿，接下来对okex和大B网进行进一步分析。\n￼\n￼\n￼\n￼\n\n为啥要对okex单独分析，因为okex的当季币本位每次都在以太的拉盘中起到了举足轻重的作用，图一是okex的当季币本位合约，持仓量明显增加，图二的u本位永续和u本位的当季合约持仓量现在都降到启动之前的位置了，图四是拉取的okex当季币本位的目前大单委托成交情况，可以看到目前依然是净买接近4000万刀。\n￼\n￼\n￼\n￼\n\n总结：FTX的低位建仓(1350以下)的空头清算在爆仓6.5亿后，基本完成清算，目前其他几大所的持仓均在高位；okex当季币本位合约是增持信号；大B网在一个月前均价在1420附近的8万个以太开始出货；所以在1600-1700之间的这个位置大概率就是筑顶出货阶段。\n\n接下来分析大B网的ETH多头持仓数据：9.15-9.16这两天大B网的以太多头建仓了8万个以太，我手动计算了一下，均价大概在1420-1450之间，目前该仓位已经开始出现明显的减仓信号，根据以往的情况，大B网在减仓期间以太价格并不会出现明显的下跌，往往还会继续上升一波，但这个减仓信号表明顶部不远了。\n￼",
          title: "今日分析：顶部已经接近",
          type: 1,
          updateTime: "2022-11-02 11:28:27",
          userId: "63607b0054e9690c8b46762a",
        },
        {
          browseNum: "17",
          code: null,
          commentNum: "0",
          content:
            '<p class="MsoNormal"><span style="font-family: 仿宋;">本周的重要经济数据基本上堆积在了周三晚上，具体时间与数据简介如下：</span></p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">晚上</span><span style="font-family: Calibri;">9</span><span style="font-family: 仿宋;">点</span><span style="font-family: Calibri;">30</span><span style="font-family: 仿宋;">分</span></p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">美国周失业金领取人数公布：此数据作为失业率的前置指标能对未来一个月的失业率具有一定的预期属性，而失业率作为分析经济形势的主要指标，其高低通常用来判断美国目前的经济是偏好还是偏坏，较低的失业率利好美元利空</span><span style="font-family: Calibri;">BTC</span><span style="font-family: 仿宋;">与以太坊，因此失业金的发布可能造成部分的市场波动。</span></p>\n<p class="MsoNormal">&nbsp;</p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">晚上</span><span style="font-family: Calibri;">22</span><span style="font-family: 仿宋;">点</span><span style="font-family: Calibri;">45</span><span style="font-family: 仿宋;">分</span></p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">制造业</span><span style="font-family: Calibri;">PMI</span><span style="font-family: 仿宋;">数据公布：</span><span style="font-family: Calibri;">PMI</span><span style="font-family: 仿宋;">数据的主要衡量指标为</span><span style="font-family: Calibri;">50</span><span style="font-family: 仿宋;">，如果大于</span><span style="font-family: Calibri;">50</span><span style="font-family: 仿宋;">则意味着该业处于一个经济增长的趋势，而美国是制造业大国，因此制造业</span><span style="font-family: Calibri;">PMI</span><span style="font-family: 仿宋;">在判断美国经济时具有较大的权重。大于</span><span style="font-family: Calibri;">50</span><span style="font-family: 仿宋;">的数值意味着经济偏好，短期利好美元利空</span><span style="font-family: Calibri;">BTC</span><span style="font-family: 仿宋;">等虚拟货币。</span></p>\n<p class="MsoNormal">&nbsp;</p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">晚上</span><span style="font-family: Calibri;">23</span><span style="font-family: 仿宋;">点整</span></p>\n<p class="MsoNormal"><span style="font-family: 仿宋;">密歇根消费者信心指数终值：</span><span style="font-family: Calibri;">GDP</span><span style="font-family: 仿宋;">作为评判一个国家的最为重要的经济指标，而</span><span style="font-family: Calibri;">GDP</span><span style="font-family: 仿宋;">的组成项中消费项占比最大，因此信心指数对于评判美国的经济而言有着不可言喻的重要性。高的信心指数代表着群众愿意去进行消费从而促进经济的增长，因此高消费者信心指数短期利好美元，利空</span><span style="font-family: Calibri;">BTC</span><span style="font-family: 仿宋;">。</span></p>',
          createTime: "2022-11-21 17:55:19",
          deleted: 0,
          id: "637b4b07c54da862f1a38273",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "币圈财神爷",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/4DD240E95EFA4A578DB5D33CAD19C0BF.jpg",
          status: 1,
          stickyTime: null,
          text: "本周的重要经济数据基本上堆积在了周三晚上，具体时间与数据简介如下：",
          title: "当周经济重要数据",
          type: 2,
          updateTime: "2022-11-23 15:30:18",
          userId: "63607b1e54e9690c8b46762c",
        },
        {
          browseNum: "15",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">2023</span><span style="color:#000000; font-size:14px;">年</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">应该会是小牛年：</span><span style="color:#000000; font-size:14px;"><br/>2</span><span style="color:#000000; font-size:14px;">月左右抄底</span><span style="color:#000000; font-size:14px;"> LTC </span><span style="color:#000000; font-size:14px;">，</span><span style="color:#000000; font-size:14px;">8</span><span style="color:#000000; font-size:14px;">月减产；</span><span style="color:#000000; font-size:14px;"><br/>3</span><span style="color:#000000; font-size:14px;">月左右抄底</span><span style="color:#000000; font-size:14px;"> DASH </span><span style="color:#000000; font-size:14px;">，</span><span style="color:#000000; font-size:14px;">6</span><span style="color:#000000; font-size:14px;">月减产；</span><span style="color:#000000; font-size:14px;"><br/>10</span><span style="color:#000000; font-size:14px;">月左右抄底</span><span style="color:#000000; font-size:14px;">OKT</span><span style="color:#000000; font-size:14px;">，减产；</span><span style="color:#000000; font-size:14px;"><br/><br/>2024</span><span style="color:#000000; font-size:14px;">年会是狂暴牛的一年：</span><span style="color:#000000; font-size:14px;"><br/>2024</span><span style="color:#000000; font-size:14px;">年</span><span style="color:#000000; font-size:14px;">1</span><span style="color:#000000; font-size:14px;">月左右开始抄底</span><span style="color:#000000; font-size:14px;"> BCH </span><span style="color:#000000; font-size:14px;">和</span><span style="color:#000000; font-size:14px;">BSV</span><span style="color:#000000; font-size:14px;">，</span><span style="color:#000000; font-size:14px;">4</span><span style="color:#000000; font-size:14px;">月减产</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/>ETC dash zec 5,8,11</span><span style="color:#000000; font-size:14px;">月减产；</span><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">抄底最少是三倍利润</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">，</span><span style="color:#000000; font-size:14px;">8</span><span style="color:#000000; font-size:14px;">个币种一个</span><span style="color:#000000; font-size:14px;">3</span><span style="color:#000000; font-size:14px;">倍最少</span><span style="color:#000000; font-size:14px;">24</span><span style="color:#000000; font-size:14px;">倍的利润最简单的赚钱方式就是提前布局热点。</span>',
          createTime: "2022-11-01 16:42:34",
          deleted: 0,
          id: "6360dbfaeda4e1488e405e5a",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "区块之蛙",
          pictureUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20220919/a450b96a95e04973975cc58b2c05e8bf.png",
          status: 1,
          stickyTime: null,
          text: "2023年 应该会是小牛年：\n2月左右抄底 LTC ，8月减产；\n3月左右抄底 DASH ，6月减产；\n10月左右抄底OKT，减产；\n\n2024年会是狂暴牛的一年：\n2024年1月左右开始抄底 BCH 和BSV，4月减产 ；\nETC dash zec 5,8,11月减产；\n\n抄底最少是三倍利润 ，8个币种一个3倍最少24倍的利润最简单的赚钱方式就是提前布局热点。",
          title: "2023年减产币种列表",
          type: 1,
          updateTime: "2022-11-01 16:42:34",
          userId: "635f8abeeda4e13bcae93abd",
        },
        {
          browseNum: "11",
          code: null,
          commentNum: "3",
          content:
            "<p>目前的风险市场变化依然是在美联储的预期管理之中，重点仍然是11月3日加息后鲍威尔的讲话，如果鲍威尔可以容忍高通胀和依然强势的就业市场，转为鸽派的话，风险市场必然会出现较大幅度的上涨。对于 BTC和ETH来说，虽然不至于反转但也会拔高不少。但问题就是鲍威尔是否会向市场妥协。</p>",
          createTime: "2022-11-01 11:40:24",
          deleted: 0,
          id: "6360952854e9690c8b467776",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["634516281821dc7e91781e95"],
          nickname: "币圈财神爷",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/4DD240E95EFA4A578DB5D33CAD19C0BF.jpg",
          status: 1,
          stickyTime: null,
          text: "11月3日加息后鲍威尔的讲话将极大影响风险市场接下来的走向，密切关注",
          title: "风险市场继续博弈12月加息，民主党和美联储之间争端逐渐加剧 ",
          type: 2,
          updateTime: "2022-11-01 11:40:29",
          userId: "63607b1e54e9690c8b46762c",
        },
        {
          browseNum: "14",
          code: null,
          commentNum: "0",
          content:
            '<p>&nbsp;</p>\n<p style="text-align: center;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/555e8c7c75734b30aff37782322df76f.jfif"></p>',
          createTime: "2022-11-03 10:23:45",
          deleted: 0,
          id: "63632631136cdf085cca565d",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221103/555e8c7c75734b30aff37782322df76f.jfif",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "Blocker",
          pictureUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20220919/a450b96a95e04973975cc58b2c05e8bf.png",
          status: 1,
          stickyTime: null,
          text: "最近才出资支持了马斯克收购推特的币安，继续布局收购银行。",
          title: "赵长鹏：币安正在考虑收购银行",
          type: 2,
          updateTime: "2022-11-03 16:50:19",
          userId: "63622c09136cdf085cca55ba",
        },
        {
          browseNum: "14",
          code: null,
          commentNum: "0",
          content:
            "<img src='https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/71C743E7658D4DDCA7B19A1F6E193E68.jpg' />",
          createTime: "2022-11-02 12:25:18",
          deleted: 0,
          id: "6361f12eb9d3485837704f92",
          imgUrl: [
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/71C743E7658D4DDCA7B19A1F6E193E68.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "币圈财神爷",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/4DD240E95EFA4A578DB5D33CAD19C0BF.jpg",
          status: 1,
          stickyTime: null,
          text: "￼",
          title: "五大重点关注的空投项目",
          type: 1,
          updateTime: "2022-11-02 12:25:18",
          userId: "63607b1e54e9690c8b46762c",
        },
        {
          browseNum: "13",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">最近很多山寨币日涨幅随随便便都能拉个三四十个点，连没什么利好消息的都有一二十个点，但山寨季指数整体仍然处于</span><span style="color:#000000; font-size:14px;">45</span><span style="color:#000000; font-size:14px;">的位置。</span><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">只要</span><span style="color:#000000; font-size:14px;">BTC</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">ETH</span><span style="color:#000000; font-size:14px;">能持续稳住大势，小节奏上涨，等待山寨币普涨爆发的日子还在后头。</span><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">但前提是，大饼烧饼它们能稳住！</span><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221104/9DAC752712B8425083BE00AC57325BDB.jpg\' />',
          createTime: "2022-11-04 14:25:10",
          deleted: 0,
          id: "6364b0469049f10991f5af90",
          imgUrl: [
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221104/9DAC752712B8425083BE00AC57325BDB.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "区块链日记",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221104/1EA31606CAEA4EF1AA435BB0A45A2015.jpg",
          status: 1,
          stickyTime: null,
          text: "最近很多山寨币日涨幅随随便便都能拉个三四十个点，连没什么利好消息的都有一二十个点，但山寨季指数整体仍然处于45的位置。\n\n只要BTC、ETH能持续稳住大势，小节奏上涨，等待山寨币普涨爆发的日子还在后头。\n\n但前提是，大饼烧饼它们能稳住！\n￼",
          title: "别被山寨币最近的涨势迷惑了",
          type: 1,
          updateTime: "2022-11-04 14:25:10",
          userId: "63622b95136cdf085cca5596",
        },
        {
          browseNum: "11",
          code: null,
          commentNum: "0",
          content:
            '<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt; text-indent: -18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt;"><!-- [if !supportLists]--><span lang="EN-US"><span style="mso-list: Ignore;">1.<span style="font: 7.0pt \'Times New Roman\';">&nbsp; </span></span></span><!--[endif]--><span lang="EN-US">ETH</span>和<span lang="EN-US">BTC</span>的交易所存量快速减少，<span lang="EN-US">FTX</span>事件进一步减少大众对中心化交易所的信任，先提到链上保命，毕竟后续事件发展变数太多。</p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US" style="mso-no-proof: yes;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/0f4148d5beed431abf8155789e7c1008.png" alt="" width="400" height="185"><br><!--[endif]--></span></p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US" style="mso-no-proof: yes;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/c95d501b80f548d4a1bdc74835096b84.png" alt="" width="400" height="192"><br><!--[endif]--></span></p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g">从地址数上也可以反映出大户的集中提笔操作，昨天<span lang="EN-US">ETH</span>持币量大于<span lang="EN-US">1000</span>的地址增加了<span lang="EN-US">69</span>个。</p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US" style="mso-no-proof: yes;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/b89211b6580b4bdfb194a8e5e946aaf2.png" alt="" width="400" height="188"><br><!--[endif]--></span></p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US">BTC</span>持币量大于<span lang="EN-US">10</span>的地址数昨天增加了<span lang="EN-US">547</span>个。</p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 36.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g">目前建议先提币到个人钱包，等待事件平息。</p>\n<p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>',
          createTime: "2022-11-09 15:25:25",
          deleted: 0,
          id: "636b55e5ac36b023cbc53d5d",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/0f4148d5beed431abf8155789e7c1008.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/c95d501b80f548d4a1bdc74835096b84.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/b89211b6580b4bdfb194a8e5e946aaf2.png",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["6364d3779049f10991f5b42f"],
          nickname: "crypot裤衩哥",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/580DC2CDB2F3491E9983A3DEF4758453.jpg",
          status: 1,
          stickyTime: null,
          text: "目前盘面技术指标和链上数据全面失效，消息面带动市场情绪的大起大落，使得在座各位操作变形，仓位破灭。但是还是要看看目前的链上情况。",
          title: "链上数据分析",
          type: 2,
          updateTime: "2022-11-11 21:03:40",
          userId: "63607b3a54e9690c8b46762e",
        },
        {
          browseNum: "12",
          code: null,
          commentNum: "0",
          content:
            "<p>在各种渠道打听了一番得到的消息，Huobi即将做两件事：</p>\n<p>第一是开启投票上币Primevote，上币权交给HT持有者，当年项目方削尖脑袋搞HT的情形即将复现。</p>\n<p>第二是重启Prime打新，模式完全copy币安lanuchpad，持有HT是唯一条件。 火币通过Primepool测试出来HT活跃流通盘只有一千万左右，盲猜第一次打新必能有不错的收益。</p>\n<p>&nbsp;</p>\n<p>以上是我打听到的消息，不构成投资建议。大家也不要盲从，可以多方考证形成自己的判断。</p>\n<p>&nbsp;</p>",
          createTime: "2022-11-03 10:59:35",
          deleted: 0,
          id: "63632e97136cdf085cca567d",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "掘金人Aexlrod",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/F821ACE9BF6443E4AE96DEFD7B3FCE62.jpg",
          status: 1,
          stickyTime: null,
          text: "丰富持有HT的权益和收益模式",
          title: "火币接下来的动作",
          type: 2,
          updateTime: "2022-11-03 15:50:04",
          userId: "63607b0054e9690c8b46762a",
        },
        {
          browseNum: "10",
          code: null,
          commentNum: "0",
          content:
            '<p>昨日币安上的代币SNM价格暴涨，最高涨幅近7000%，消息发酵之后开始下跌，截至统计，从高点9.34已经下跌约81%。</p>\n<p>&nbsp;</p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221121/9f9bf2bde8af4fcfaaf756ef20ad4daa.png"></p>\n<p>&nbsp;</p>\n<p><a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">SNM</a>代币是 Sonm 算力市场上的一种内部货币。使用<a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">$SNM</a>，您可以访问 Sonm 提供的无限资源。</p>\n<p><a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">SNM</a>代币经济学。总供应量和流通供应量为 4440<a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">万 $SNM</a>。SONM 于 2017 年 6 月 15 日启动了首次代币发行 (ICO)。ICO 共筹集了 4200 万美元，共铸造了 331,360,000<a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">美元 SNM</a>。ICO 价格为 0.1268 美元。</p>\n<p>SONM（SNM）代币升级。SNM 代币的总供应量将从 4.44 亿个切换到 4440 万个。并发行SNM BEP-20代币升级后的SNM ERC-20&amp;BEP-20合约地址为：0x46d0DAc0926fa16707042CAdC23F1EB4141fe86B</p>\n<p><a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">SNM</a>的前 20 名持有者。前 20 名持有者共持有4300<a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">万美元 SNM</a>（3.51 亿美元），占总供应量的近 97%。其中，<a href="https://twitter.com/hashtag/Binance?src=hashtag_click">#Binance</a>持有 3170<a href="https://twitter.com/search?q=%24SNM&amp;src=cashtag_click">万美元 SNM</a>（2.58 亿美元），占总供应量的 71.4%。</p>\n<p>评论：SNM的上涨没有逻辑，上涨前市值仅有8M左右，具备低市值、筹码集中、上线Binance的特点，大概率是有人坐庄，在引发大量关注度后开始大幅下跌。SNM的上涨不具有参考性。</p>',
          createTime: "2022-11-21 11:21:18",
          deleted: 0,
          id: "637aeeaec54da862f1a38245",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221121/9f9bf2bde8af4fcfaaf756ef20ad4daa.png",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "掘金人Aexlrod",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/F821ACE9BF6443E4AE96DEFD7B3FCE62.jpg",
          status: 1,
          stickyTime: null,
          text: "币安上的暴涨代币SNM解读",
          title: "币安上的代币SNM价格暴涨，最高涨幅近7000%",
          type: 2,
          updateTime: "2022-11-23 15:12:18",
          userId: "63607b0054e9690c8b46762a",
        },
        {
          browseNum: "9",
          code: null,
          commentNum: "0",
          content:
            '<p><span lang="EN-US" style="mso-no-proof: yes;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/9ee10b5f5a1b40f7814305260dfa8153.png" alt="" width="554" height="268"><br><!--[endif]--></span></p>\n<p class="messagelistitem-zz7v6g">一、分析：昨日晚上<span lang="EN-US">9</span>点<span lang="EN-US">30</span>分，<span lang="EN-US">CPI</span>数值发布，可以根据上图看到，<span lang="EN-US">CPI</span>发布值为<span lang="EN-US">7.7</span>低于预测值（<span lang="EN-US">8.0</span>）并且远低于前值（<span lang="EN-US">8.2</span>），达到了自<span lang="EN-US">6</span>月以来的最大一次下降，使得<span lang="EN-US">BTC</span>市场产生了一次大幅度的涨幅，产生此涨幅的原因为，<span lang="EN-US">CPI</span>的大幅下降证明美联储的加息政策已经有了较好的成效，并且在此之前已有减缓降息的消息流出，此次数据的大幅下降意味着美联储大概率可能将重心转移，更加注重经济的软着陆，增加了<span lang="EN-US">12</span>月加息减缓的概率，加息减缓意味着美元指数走强力度的减缓，而对于与美元指数呈负相关性的<span lang="EN-US">BTC</span>而言，在短期此消息则是利好消息，因此出现了下图的大幅涨幅。</p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US" style="mso-no-proof: yes;"><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/57170405fcdb4044990088b00e874fb5.png" alt="" width="554" height="324"><br><!--[endif]--></span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US">1.</span>评价：此次数据超乎预期，从此数据可以看出，美联储目前的政策较为成功，这也就意味着，<span lang="EN-US">12</span>月加息放缓的概率出现了趋势性（大概率加息<span lang="EN-US">50</span>基点），对于<span lang="EN-US">BTC</span>市场而言，加息的放缓对于短中期市场是一个利好的消息，而对于长期而言，依旧利空，其原因为美联储的加息依旧会在一定程度上提升美元的价值，因此在长期（如果市场没有出现任何其他消息）依旧利空<span lang="EN-US">BTC</span>市场，但是长期利空的强度有所减少。</p>\n<p class="messagelistitem-zz7v6g" style="margin-left: 72.0pt;"><span lang="EN-US">&nbsp;</span></p>\n<p class="messagelistitem-zz7v6g"><span lang="EN-US">2.</span>事件：美联储费城联储主席哈克发言 分析：哈克昨晚发言中，较为重要的信息点有三个：<span lang="EN-US">1</span>、加息<span lang="EN-US">50</span>基点，任然意义重大。<span lang="EN-US">2</span>、预计在明年停止加息。<span lang="EN-US">3</span>、哈克支持在基金利率达到<span lang="EN-US">4.5%</span>左右时暂停加息。根据哈克的发言可以看出，在加息政策的延续上美联储依旧保持较为强势，但是根据目前的一系列经济数据与美联储官员发言来分析后续加息放缓的概率基本上可以达到<span lang="EN-US">70%</span>以上，基于第三点，哈克的发言过于主观，暂时不做出判断与评价，美联储在<span lang="EN-US">4.5%</span>是否停止加息还得根据后续的经济指标做出判断。 评价：目前停止加息依旧可能性不大，<span lang="EN-US">12</span>月放缓加息大概率可以确定，停止加息需根据后续的经济情况做出判断，目前对于<span lang="EN-US">BTC</span>市场而言，短中期利好，长期依旧利空，但长期利空强度降低。</p>\n<p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>',
          createTime: "2022-11-11 16:13:16",
          deleted: 0,
          id: "636e041cac36b023cbc53e23",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/9ee10b5f5a1b40f7814305260dfa8153.png",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221111/57170405fcdb4044990088b00e874fb5.png",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "1",
          likeUsers: ["63721ad4811c0c282faa6f19"],
          nickname: "币圈财神爷",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/4DD240E95EFA4A578DB5D33CAD19C0BF.jpg",
          status: 1,
          stickyTime: null,
          text: "事件：CPI发布",
          title: "CPI发布后行情分析",
          type: 2,
          updateTime: "2022-11-11 20:58:54",
          userId: "63607b1e54e9690c8b46762c",
        },
        {
          browseNum: "9",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">11/2--FOMC</span><span style="color:#000000; font-size:14px;">（</span><span style="color:#000000; font-size:14px;">3</span><span style="color:#000000; font-size:14px;">号凌晨）</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/>11/3--</span><span style="color:#000000; font-size:14px;">美联储加息決议，</span><span style="color:#000000; font-size:14px;">75</span><span style="color:#000000; font-size:14px;">基点概率大（不可能</span><span style="color:#000000; font-size:14px;">100</span><span style="color:#000000; font-size:14px;">基点）</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/>11/4--</span><span style="color:#000000; font-size:14px;">美国</span><span style="color:#000000; font-size:14px;">10</span><span style="color:#000000; font-size:14px;">月非农就业数据公布，高于预期则</span><span style="color:#000000; font-size:14px;">12</span><span style="color:#000000; font-size:14px;">月加息不会放缓，利空币圈</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/>11/8--</span><span style="color:#000000; font-size:14px;">中期选举日期</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/>11/10--CPI</span><span style="color:#000000; font-size:14px;">数据公布</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">；</span><span style="color:#000000; font-size:14px;"><br/><br/></span><span style="color:#000000; font-size:14px;">本周是非农和美联储利率决议双重行情了，重点关注。</span><br/><img src=\'https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/3F58755F51E54E709419C3368034D2C9.jpg\' />',
          createTime: "2022-11-02 12:08:26",
          deleted: 0,
          id: "6361ed3ab9d3485837704f8d",
          imgUrl: [
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221102/3F58755F51E54E709419C3368034D2C9.jpg",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "圣手披荆斩棘",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/19E14785EF9745F798AA3AE7ECDA954F.jpg",
          status: 1,
          stickyTime: null,
          text: "11/2--FOMC（3号凌晨） ；\n11/3--美联储加息決议，75基点概率大（不可能100基点） ；\n11/4--美国10月非农就业数据公布，高于预期则12月加息不会放缓，利空币圈 ；\n11/8--中期选举日期 ；\n11/10--CPI数据公布 ；\n\n本周是非农和美联储利率决议双重行情了，重点关注。\n￼",
          title: "11月影响币圈的关键时间",
          type: 1,
          updateTime: "2022-11-02 12:08:26",
          userId: "63607ae454e9690c8b467625",
        },
        {
          browseNum: "9",
          code: null,
          commentNum: "0",
          content:
            '<span style="color:#000000; font-size:14px;">Doge</span><span style="color:#000000; font-size:14px;">狗狗币价格、市值、排名</span><span style="color:#000000; font-size:14px;"> <br/>0.13$ 188</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">8</span><span style="color:#000000; font-size:14px;">（现价）</span><span style="color:#000000; font-size:14px;"> <br/>0.20$ 265</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">6</span><span style="color:#000000; font-size:14px;">（超越</span><span style="color:#000000; font-size:14px;">XRP</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">BUSD</span><span style="color:#000000; font-size:14px;">）</span><span style="color:#000000; font-size:14px;"> <br/>0.40$ 530</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">4</span><span style="color:#000000; font-size:14px;">（超越</span><span style="color:#000000; font-size:14px;">BNB</span><span style="color:#000000; font-size:14px;">、</span><span style="color:#000000; font-size:14px;">USDC</span><span style="color:#000000; font-size:14px;">）</span><span style="color:#000000; font-size:14px;"> <br/>0.60$ 795</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">3</span><span style="color:#000000; font-size:14px;">（超越</span><span style="color:#000000; font-size:14px;">USDT</span><span style="color:#000000; font-size:14px;">）</span><span style="color:#000000; font-size:14px;"> <br/>1.50$ 1989</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">2</span><span style="color:#000000; font-size:14px;">（超越</span><span style="color:#000000; font-size:14px;">ETH</span><span style="color:#000000; font-size:14px;">）</span><span style="color:#000000; font-size:14px;"> <br/>3.00$ 3978</span><span style="color:#000000; font-size:14px;">亿</span><span style="color:#000000; font-size:14px;"> </span><span style="color:#000000; font-size:14px;">排名</span><span style="color:#000000; font-size:14px;">1</span><span style="color:#000000; font-size:14px;">（超越</span><span style="color:#000000; font-size:14px;">BTC</span><span style="color:#000000; font-size:14px;">）</span>',
          createTime: "2022-11-02 11:11:03",
          deleted: 0,
          id: "6361dfc7b9d3483b9172a872",
          imgUrl: [],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "区块之蛙",
          pictureUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20220919/a450b96a95e04973975cc58b2c05e8bf.png",
          status: 1,
          stickyTime: null,
          text: "Doge狗狗币价格、市值、排名 \n0.13$ 188亿 排名8（现价） \n0.20$ 265亿 排名6（超越XRP、BUSD） \n0.40$ 530亿 排名4（超越BNB、USDC） \n0.60$ 795亿 排名3（超越USDT） \n1.50$ 1989亿 排名2（超越ETH） \n3.00$ 3978亿 排名1（超越BTC）",
          title: "DOGE的价格分析，有马斯克喊单也要尊重现实",
          type: 1,
          updateTime: "2022-11-02 11:11:03",
          userId: "635f8abeeda4e13bcae93abd",
        },
        {
          browseNum: "9",
          code: null,
          commentNum: "0",
          content:
            '<p>FTX在横盘期间BTC和ETH都积累了大量空头仓位，尤其是以太坊，在1350-1200之间的横盘期间持仓量净增5亿刀，所以这波可以看到FTX上的清算数据异常；目前FTX上的大饼空头仓位已经几乎被清算完毕，以太仓位还有3亿刀的底部净增仓位。</p>\n<p>&nbsp;</p>\n<p>这波空头清算有两个特点：</p>\n<p>一、清算量堪比牛市期间的历次大的拉升，以太尤其明显，远超牛市期间的每次暴力反弹的拉升；二、大饼和以太清算量都是完全集中在FTX，而且规模都是空前。 图一，图二分别表示BTC,ETH的清算量历史数据图，从图中可以看出此次清算的恐怖。</p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/a3c629ca7dc54205a2b0bca72b6310ba.jfif"></p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/0af409309f5440c89d31e016c0bdc9e3.jfif"></p>\n<p>&nbsp;</p>\n<p>所以以太的真正阻力是在底部开空的仓位被全部清算后的拉升阶段，目前还有3亿刀，以太阻力也就是大概在1750附近；大饼目前FTX的空头仓位已清算完成，所以大饼也就一直在这个位置没有选择突破，考虑到如果要清算以太的仓位，大饼也要配合拉升，所以上方阻力大概是在215的位置。</p>\n<p>&nbsp;</p>\n<p>下图是这波拉升后，FTX上大饼持仓量的变化，可以看出，FTX上随着大饼空头被爆仓5亿刀后，仓位已经完全下降，现在也就明白之前大饼在横盘之际，FTX上大饼积累的头寸仓位是空头仓位，正常在底部区域积累的仓位都会以多头为主，FTX上的用户这次比较迷之操作。</p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/74505c421dcb43379dd75f4122139ea6.jfif"></p>\n<p>&nbsp;</p>\n<p>这次之所以不同寻常，是因为根据以往的爆仓数据，okex交易所主爆多头（图一），FTX交易所相对比较均衡一些，没有太明显的偏向哪一方，但这次FTX的爆仓数据让很多人都感觉到不可思议，尤其是以太昨天拉升到1660那一波的爆仓情况。</p>\n<p>&nbsp;</p>\n<p>总结：目前通过清算数据可以得知，FTX上的用户不知什么原因在近一个月的震荡期间开了大量的空头仓位，这些数据都是完全被交易所所掌握的，所以这波的上涨目前来看是为了去清算FTX上的巨量空头仓位，以太还有3亿左右在底部开空的仓位没有被清算，剩下的空头仓位开仓价大都在1700以上了。</p>\n<p>&nbsp;</p>\n<p>下图是FTX上以太的持仓变化情况，在1350-1200之间FTX净增5亿刀仓位，然后在1360拉升到1550时，FTX空头被爆4亿刀，但FTX以太仓位继续增加了2亿刀，直到昨天以太拉升刀1660附近，仓位下降了4亿刀，目前距离1300附近累计的空头仓位还有3亿刀的净增，因为也可以看出在FTX在横盘期间净增仓位以空头为主。</p>\n<p><img src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/98fb43a8c9604063ad36d2d8e3ff2843.jfif"></p>',
          createTime: "2022-11-01 12:51:19",
          deleted: 0,
          id: "6360a5c754e9690c8b4677ad",
          imgUrl: [
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/a3c629ca7dc54205a2b0bca72b6310ba.jfif",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/0af409309f5440c89d31e016c0bdc9e3.jfif",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/74505c421dcb43379dd75f4122139ea6.jfif",
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/98fb43a8c9604063ad36d2d8e3ff2843.jfif",
          ],
          isFocus: 1,
          isLike: 1,
          isTop: 1,
          likeNum: "0",
          likeUsers: null,
          nickname: "掘金人Aexlrod",
          pictureUrl:
            "https://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221101/F821ACE9BF6443E4AE96DEFD7B3FCE62.jpg",
          status: 1,
          stickyTime: null,
          text: "多空仓位清算，将影响币价走势，点击查看分析",
          title: "近期行情上涨背景下的清算数据整理分析",
          type: 2,
          updateTime: "2022-11-01 14:49:42",
          userId: "63607b0054e9690c8b46762a",
        },
      ],
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
  },
};
</script>

<style lang="less" scoped>
.news_page {
  // height: 5.46667rem;
  padding: 0.53333rem 0.3rem;
  background: linear-gradient(1turn, #f9f9fa, #1069fb 50%);
  background-size: 100% 5.46667rem;
  background-repeat: no-repeat;
  font-size: 16px;

  .container {
    margin-bottom: 1rem;
    padding: 0.26667rem;
    background: #fff;
    border-radius: 0.11333rem 0.11333rem 0 0;

    .article_list {
      margin-bottom: 0.26667rem;
      border-bottom: 0.02667rem solid #dbdcde;
      padding: 0.4rem 0;
      .top_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top_user {
          display: flex;
          align-items: center;
          .pictureUrl {
            width: 1.06667rem;
            height: 1.06667rem;
            border-radius: 0.58667rem;
            margin-right: 0.26667rem;
            object-fit: cover;
          }
          .name {
            color: #070d1e;
            font-size: 0.37333rem;
            font-weight: 700;
            display: flex;
            align-items: center;
          }
          .time {
            color: #767983;
            font-size: 0.32rem;
          }
        }
        .focus {
          width: 1.76rem;
          height: 0.64rem;
          text-align: center;
          line-height: 0.64rem;
          color: #f87211;
          border-radius: 0.4rem;
          border: 0.02667rem solid #f87211;
        }
      }
      .title {
        font-size: 0.42667rem;
        font-weight: 700;
        color: #101b37;
        margin: 0.26667rem 0 0.13333rem 0;
      }
      .content {
        font-size: 0.37333rem;
        color: #585f72;
      }
      .imgList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.26667rem;
        position: relative;
        img {
          object-fit: cover;
          width: 2.69333rem;
          height: 2.69333rem;
          margin-right: 0.26667rem;
          border-radius: 0.21333rem;
        }
      }
      .bottom_box {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12.8px;
        .bottom_left {
          display: flex;
          align-items: center;
          color: #b5b7bc;
        }
        .bottom_right {
          display: flex;
          align-items: center;
          .bottom_right_block {
            display: flex;
            align-items: center;
            margin-right: 0.4rem;
          }
          img {
            width: 0.48rem;
            height: 0.48rem;
            margin-right: 0.05333rem;
          }
        }
      }
      .imgListHalf img {
        width: 4.21333rem;
        height: 4.21333rem;
      }
    }
  }
}
</style>
