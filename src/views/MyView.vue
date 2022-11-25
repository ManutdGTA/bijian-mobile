<template>
  <div class="page">
    <div
      class="page_top"
      :style="{
        backgroundImage: 'url(' + require('@/assets/my_bg.c953fb64.png') + ')',
      }"
    >
      <div class="userinfo">
        <div class="userinfo_top">
          <div class="login_box">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="nickname">立即登录</p>
              <div class="certification">欢迎来到币见行情</div>
            </div>
          </div>
          <!---->
        </div>
        <div class="userinfo_bottom">
          <div class="userinfo_item">
            <div>—</div>
            <p>关注</p>
          </div>
          <div class="userinfo_item">
            <div>—</div>
            <p>粉丝</p>
          </div>
          <div class="userinfo_item">
            <div>—</div>
            <p>收藏</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page_footer">
      <div class="page_footer_list">
        <div class="footer_item">
          <div class="footer_item_left" @click="handleJump('aboutus')">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABHlJREFUWEfNmH9oU1cUx8+5L0nTQrs1FdT9YNMhA3FMmE2to03r/MMxhl0Vk6xU98OVzupqYWUTOhAUxuigdG1d6exQS20irqvImH8427TMtimDjQ1hyHRjP8ua1ikkafLePeO+JG2sSd5L4h+5/95zz/3cc8/9nnsvEpEEOdQwU6B9ra3mX3/85+lQSFkHnBepa2Lsjskk3XrymTU/n21vD2ayzrSAdu16a9XsnbsOzvluTmBFgLxEkxLAIkPwMsa+WF1U6Lp48bM5vXC6gGpr3y75c36+jXN6EwAK9DqP2vkZw/5HLZYTw8Of+rTGagKVVzscssI7AaAk3hkC3ALEawhwgyFbEH2ceDEBbACibQSwbsXkPqNBeufa1SF3KqikQH19fezU4DcdRNQU5yDMEPtN+abeicsDP6VyXLGzflMoEGrkpEbVGLNFxJ4DdS+0NDQ08ETjEwJFYK4MEIF9eRCOmAvN7018deYXrbDH91e8tP+p4N3gRwBUswwF7gN1O+oTQSUEstrsnXGRUVBibd5RV3s6ICttrdWOVlL4CQBQZUZEyutxN6+0uw9o23anPSwrg1FDxWSSHN9eGfoyGcz6d+Gx237luOh/uED64ObH8Ecy2+d3OF8JhRRXDMpokOpW5tQ9QOI0/T7nux5LYJTYUa3IWA7KlwjgRXXVAF/PnzS8nCqS0Uh9GLXxPb6qZGP86bsHqKzK3sE5HY4Y48jMuHuP1jYVH5QnAaA0ajezcNJQrjWmtNJ+IZZTjGHX9Ji7ZSm/YkotRO+vhf9uRnUmbC7M36Qngdc2Q2UwrJwWDs1G6bW/O2FcCyiS6AFxSsXp8z9S/ND6mHguRWhrteOwovCOSHCwd8bjPqTlOJv+Upu9G4gahQ9JYi1To64udepYhKy2vaNEUKGutCBvs5bOCLs1R8JblLC0OQbGGM3OdkmX9IAKnQr6F7+PrB8mvJ7z1UtAolBen/7NJ2qTUGDv+PkNepxaDsnHicPRpf1HmJzvMaiL0tOslXtvCEUXtW9j2RMloiCrEarcWf9swL/4XYQWB70e9349DrMGstnPEFGdmCu/IO+58csDP6hAW7e/WqPI8gXRwRCPTXvcQsA0m9gyWYYtCsfuaOjTilCZzd7GiY6peWQw7Jm6em4kAlTl2Kdw/rnoMDCpeXJsqEeTJmrw+mkwjnjlQCZA5VXOJpkronCDxNgbU2OuszkKlOGWiZVlE6GkW5ZpUmcLZE2W1Jke+6yBkh174TgTYcwGKKUwCsfxpYMh9k7rLB2Z5lCZzd7Nl0vHkalRV0Q6Mi2uliblEyKoASIEhLXCGRGEEFF9YUgM3p/rls4lkg9dxVUMTOf6YWlSBojImUyvDMga/+1hpxL167p+iIHpXNDiI0SA6osEgWRAvJ0qQmld0ISjdK+wehVd2KV9hY05z6lLvoDKuWfQMtT9D0VA7DfrfCgGA6FGeBAPxfi8yJmndDxUTn02xINFv2OcnPNand8xw6uLCoce+HdMoqOdEx9W6WhOprb/A4p5N1LFeW2vAAAAAElFTkSuQmCC"
              alt=""
            /><span>关于我们</span>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
            class="footer_right_img"
          />
        </div>
        <div class="footer_item" @click="handleJump('contactus')">
          <div class="footer_item_left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABB5JREFUWEfNmH1sFEUUwN/sbK/0qKe0Vzha/CgEjQmaKHpNKWlzipYYE/zA5QBNDDbxo1Va0MRGDCFiNFFoq23UpCYmWjhWgpIYpbH00oba9KSQEJNGGkSF1oNer/bEKz1nd8zb3jZHvY/t0qu3f2123sdv3rx5b2YJ55xCBj3keoAekV7JCwVHV6mquhTnJAjCH7a8/J++lT8Imp2jKaBS1+aNiqK8yAHKAECc4ZwRgB5K6Ue93oOHZws2KyDX+meKr4Qn2wDAadCRL9eavdV77PPzBuXBMNDah7aUTk6yrwDArhsnAIOECO1EIL/hN67yWzlXKznAyhiAQHa2+PiJ7w/0GoEyBBSNDBqMwpCzFlHY0dN58Fg8J2UPbF4fYep+AH57dDyQa80uNRIpQ0D3l0s/TC8TId7iJUUbZXn/eLIZS9KOG89fGjoMnLuicr4fu+U1qaKUEggTmCmKZ8oQOVvsKCpNBaM71aD8Q716pERK3akSPSWQs1w6zgEq0IlFpI8mWqZEM59aPuUbbToAXb5u+cFkUUoKhHVmxO8fxq2NCezrlu9MFfJ4485yaSCa6KzA4ShMVqcSAu35Eqh8oOVZ62jXJ1rRI0JzX5en1gxQSYW7UeVqDeqG8yuel7ZUf7b7KVDi2foPUOX7sKD/V1anqGR77p8n7I6LLZoet9h2n+xofdsM0H3rqt4gkdAe1PUvq4YrN60NUIE3rb5NbGh/Fa7G2rwG6I5d4LgcZEcBYDUK2YLHYfHwp5o8y7l51+n2fe+aAbqncufr4sSFvah7ufA5COVNp1H/4jxxw897wa/bnQbCyPh+YV06DDIsChwdzPcf0vKGWGy1vo7WZjNAznVVNTwSakTdUcemgTH7Biycesvpdy4XK/RITQPZa1i9osJb0e39uzWHPrbslNupKurHWg5R4YU+r6fVDFCJy10Va+fivR5feEL5GoDfgvaoAG8GmsV3tIljt8cEbvQqQwAcKzGz5ojOoX1wZqahuQJCO0U74e7wBPNNRYoEal20CBNdA1qynZVE/oGeqdoHR8ZaRAlf0wmE9vOrmaxyeALfLVlQdqlJ7NOACqoVN+P8CxwQqfDayIdCw3wAFbys1jFFfU/zS8jTIy3Uk5lAGbdkGZfUuIYZte0RKOMKI0JlVOvQK3Bsc7UFO+xz0ctMN9fYtoCJ7pHbHl4QOnkX3rjIQnvnqSP1WFln/VzX8WPW3gwozMkBzYAfQyJzeoQ15DGJUFoO+Wah0nYNSgQkNYDFe07ZiuOuFbRNroOILpv2i2I8qEUvKYcA+JNap2bjnSsGa76bt6t0AqAxAH4DjgnKVVg+sC2eWPp+Nsz0FhuhheN9sPRCky4yf79jYqH0HMqKjNoKz9WHs9S//6KUDv8vP6zM7jwjev8CF+APUoiqiOMAAAAASUVORK5CYII="
              alt=""
            /><span>联系我们</span>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
            class="footer_right_img"
          />
        </div>
        <div class="footer_item" style="display: none">
          <div class="footer_item_left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDtJREFUWEftl2tsFGUUht8zM7ttaaq9UDVqifWCiZFQA7u9oNtui1WMl9CEKaUFRaGYCgRJGqMx2dR70gQSuQhCjKltpUusPwwkVrR2FUu7jf6AeAuxsUXBJVhW2HYvM/OZb+00hczSYbabQOL3b2fOOe+z7/luQ4wxEdfQoP+BZujGVTlUtnTVw4qi1jONLQSQSUSnCNSTnZez7/Pu987NRudNAdXUbMwePRdoA8NjCUSDkiQ19n/V+UmyUDMCrWluTv95cKSXMebQxRgQISAEIAcA8eeMQbPZpLpkoWYEKq6ofU3T2CuTMGdtkrilpMj56bZtL0bdj64uDE1E3mAMtZPvg7lz8+Yn074rAm3Y0JL2/U8nzgCUBYaoPcNWfLSn4/jlbXGWyx06lEDCqwN9B96x2rorApVVN1TEwtEjvLgAfDTg8641EuJOXRyP/MrbR0S+wb6uypQAlbpXNSiq8iEvLorClmO9B3YmEnK45ACAXAC/+X3e+SkBWuKuWx5V1YNxh0SxZaD349eNhLZu3W73DfWPEZAG4Ljf530gJUDlT6y9czwY4q3gS+nHdQ1LixobG7XLxcoq62pjitoRjxOoffDrrmdSAsSLOsvlbxhDaVyAaM/6+qrN06GWVNcviIZjPQDyeYjNLi377kjnFykDclU3lEyEo71cS3eKRPEggY0xVVuk8SVPsP8HjMP+Pu+TVmHiJcwcrqXuutWKqr6vQxkJEpH/9rz8Zd3dO8+nHIgLcKfCkWjrVPumVNkFQRB23OuY91Zba2s4GRjTDk0X4RNduRheqIEyySacWlB4T//evZ5IsiB6vqmWzZaYmTrXH1D1U8/dPBEK3xeDOhcKMggkacSERP92TkbWod7D+06bccNwcSRaZQ89smZxZCL8JgOr5BuQWQG7Tao6+mVn3/T4WzYr7qhKz/JndpF9cOZdiW8jhsOwZcUVK5s0TdvOjzCzIHqcEVD+C9o6hWl7eIxEwvNndwn7TQNNHgPt+sULwLBAwiES8AcxGgdYTCNi8SuZwTBqmWWgmqc3Zo8OB34BkBffE4h2PbiopJlfxq7WqenxloFK3Cs3qWq8VRzms8G+ruVWQApeRqEUg6Tn/hNWZE1DC/8tCPDckC559XeKDcro2xg23Iec5XI3Y4ifRWnp6Y5ve9p+sAKU06SOAOxWc7n059hucV4ioCHGUARAfbxqxRyPZ4VqruilUbMG5HDJfP7cBSDo93nj88jKyG1Sd4CQrecyxu4GoH+1+Ino5FRdhvN/7xY3GTrkcMm8lwUMCAz5vCYtnxnZ8qR2lsu/M4bbAJz2+7wFM0uZi7AM5HDJIwC4M3zu/GVO7tKojHS77OtpPzYry36xSz5JwB1WQPScWd2pi91161VVfYkweSW1QGbk0P0tuDF0ATfxcplZCJzwIJio9PV3/bBgUlIp15xD/wLpoxtDFEr/AAAAAABJRU5ErkJggg=="
              alt=""
            /><span>邀请好友</span>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
            class="footer_right_img"
          />
        </div>
        <div class="footer_item" style="display: none">
          <div class="footer_item_left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAu5JREFUWEftmFtIFGEUx8+ZGdf1jlsUKUUQRgVSoaWQmVu0Fj2EL2oEJRUUKIEvJT4kGxWUobHaxSjBxYd1I9BMUCncNoLUAinMKLq8VK4aFkVpOzMnZvVhHNeZvYxitPO439n/95v/Od85fINExMIiejACpJENvw5tsxxM571iBgBx4WQz2ZR0r/Nuw0gwGrOAsvOKTvECnUMEJhghf7ExRkOOu7v5qXIt0wrJ7CRQ7wX4plybAWTOP7T+5++JAQDQpdD9AW22QsJHD98FCIaUuMm9g5fiRuVQM4CyzAdKREG4JQUggw5EdIXjkjJl5msQMzAodABRrk8XwT1+ldupAlR8TBTEG1IAwzInenscPjg9nsJaMDx4y7cSgGVabzyW43Z9ssGLBQc6WQdc82uhhYj2+zYn+BEdRZZhW1S/ag1lmfV36OZzYCpue+0EWDy9+S9jNOz7Uss99ue8oob0BXK5AAvuCA1AdGTKGJg0sFgwUsd2z1UGmkA5e0rWEc/HqtWRZXvay6qqKq8yxlQqXCGisikY9EZzUOyxsW1qWppAW3cUPiOCTWoiJlP8qq7Wxs/ymKVl/HlBhNNTv6HAcXB41MY6tA7IvAAtKRUrRRLPThcwcVF4fNTGNmrB+NDlw9VfUWfnFVWKACvVxFYvS61wOmu+SzH5l8HY955/AgAbJXmGxfKvdUx9IDABAQUqJI+TRsM7D9/BMtA2Vs9dDEZD06FgxOSxUiN0lsMf5f+z8oqqiTAOkcZ6XS1nFrwPKTfcklsoTX8TAHzodzvT/n2gQPqQ/C3XpKx4ZbdXT8yV6rAdCqQPyTePTzSm99y3D/0/QIH0IbkbyxNM1vb268Pz5lCoxz4CFKpzYZ+yUDeOpCxU54JMmb7XoNnQhKJANQAQAwBv+t3ODaqzTO+LopqLiNjU96jlqCqQtKjnVXpuIBxKTDLuftjeNKuBqnxsEDL1ulLLwRCZsbUZqZ32av8DOPJ9SOt0LjqH/gLEr1FDk88btQAAAABJRU5ErkJggg=="
              alt=""
            /><span>意见反馈</span>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
            class="footer_right_img"
          />
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "myView",
  methods: {
    handleJump(data) {
      console.log("11");
      this.$router.push("/" + data);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background: #f9f9fa;
  // height: 100%;
  // min-height: calc(100% - 2.4rem);
  min-height: 20rem;
  padding-bottom: 1.68rem;
  box-sizing: border-box;
}
.page .page_top {
  padding: 0.8rem 0.4rem;
  height: 5.76rem;
  box-sizing: border-box;
  // background: url(bgPic) no-repeat;
  background-size: 100% 100%;
}
.page .page_top .userinfo_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page .page_top .login_box,
.page .page_top .userinfo_box {
  display: flex;
  align-items: center;
}
.page .page_top .login_box img,
.page .page_top .userinfo_box img {
  margin-right: 0.26667rem;
  width: 1.33333rem;
  height: 1.33333rem;
  border-radius: 50%;
  object-fit: cover;
}
.page .page_top .login_box .nickname,
.page .page_top .userinfo_box .nickname {
  font-size: 0.48rem;
  font-weight: 500;
  color: #171924;
  line-height: 0.74667rem;
}
.page .page_top .login_box .certification,
.page .page_top .userinfo_box .certification {
  font-size: 0.32rem;
  color: #767983;
  line-height: 0.48rem;
}
.page .page_top .userinfo_bottom {
  margin-top: 0.53333rem;
  display: flex;
  align-items: center;
}
.page .page_top .userinfo_bottom .userinfo_item {
  width: 33%;
  height: 1.6rem;
  text-align: center;
  padding-top: 0.26667rem;
  box-sizing: border-box;
}
.page .page_top .userinfo_bottom .userinfo_item div {
  font-size: 0.4rem;
  font-weight: 500;
  color: #070d1e;
  line-height: 0.61333rem;
}
.page .page_top .userinfo_bottom .userinfo_item p {
  font-size: 0.26667rem;
  color: #767983;
  line-height: 0.48rem;
}
.page .page_footer {
  margin: 0.4rem;
  margin-top: -1.22667rem;
}
.page .page_footer_list {
  background: #fff;
  border-radius: 0.21333rem;
  padding: 0.26667rem 0.4rem;
  box-sizing: border-box;
}
.page .page_footer_list .footer_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.33333rem;
}
.page .page_footer_list .footer_item .footer_item_left {
  font-size: 0.37333rem;
  display: flex;
  align-items: center;
}
.page .page_footer_list .footer_item .footer_item_left img {
  width: 0.53333rem;
  margin-right: 0.18667rem;
}
.page .page_footer_list .footer_item .footer_right_img {
  width: 0.53333rem;
}
</style>
