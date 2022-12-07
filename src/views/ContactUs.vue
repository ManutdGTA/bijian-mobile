<template>
  <div class="page">
    <div  class="back_box">
      <div  class="back_content">
        <img
          
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAO5JREFUaEPt2b0NwjAQBWB7Hyo2YC2oYS02oGKfIBeRInfJvZ+cuNRc9L57LpDTW/KnJ8/fCuBusBqoBoIbqCN0ZIGX6+0+5r6f9+vI/HZG3sAI39vyHCGW1h9RhBSwDZ8OwAg/liBpgBVeAmCGpwPY4akARXgaQBWeAlCGhwPU4aEAR3gYwBUeAnCGDwPc4UOAM4T/b8DQn6GF8L9RNyIMcDcBATgRMIALAQU4EHCAGkEBKBE0gApBBSgQdAAbIQEwETIACyEFzIh0l7vrtXjq6/Xo94B5Xn6ECjBtoBpAH4m976sG9m4M/fv0DfwAET7aMYzoRw8AAAAASUVORK5CYII="
          alt=""
          class="back_icon"
          @click="handleJump"
        />
        <div  class="back_item">
          <img
            
            src="data:image/png;base64,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"
            alt=""
            class="logo"
          />
        </div>
      </div>
    </div>
    <div class="content_box">
      <div class="contact">
        <div class="contact_methods">官网地址</div>
        <div class="ip_address">
          <a href="http://bjhq.vip/">http://bjhq.vip/</a
          ><img
            
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      <div class="contact">
        <div class="contact_methods">官方客服</div>
        <div class="ip_address">
          <span >business@bjhq.vip</span
          ><img
            
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      <div class="contact">
        <div class="contact_methods">广告合作</div>
        <div class="ip_address">
          <span >ad@bjhq.vip</span
          ><img
            
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      <div class="contact">
        <div class="contact_methods">Telegram交流群</div>
        <div class="ip_address">
          <span >ad@bjhq.vip</span
          ><img
            
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALpJREFUWEft1jEOgzAMhWFHXamqjBEXZShi6dCz5GKMLGyVcOWBhc1+T4qEwgH4P0xkJdVaH9LwSR3QJ+CdwDOXWUV++7Z+GWfXdQgtLiqLhTXJm4FwAYZcpqTyOb+cgXABLMxGuAFsRAjARIQBLAQEYCBgAIqgABAEDWCIVx6nQw/XnrgPILqgKBOIxu23wQAkDgPQOARgxMMAVjwEYMbdAHbcDWh+JTNx00sp4xZ8fQe8iFBUBzSfwB+tXtxB7ymBhwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
    </div>
    <div  class="detailfooter">
      <div  class="detailfooter_box">
        <div  class="detailfooter_item">
          <img
            
            src="data:image/png;base64,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"
            alt=""
          />
          <div  class="detailfooter_info">
            <p  class="title">币见行情APP</p>
            <p  class="tips">最快最全最实时行情软件</p>
          </div>
        </div>
        <div  class="detailfooter_btn">打开APP</div>
      </div>
      <div
        
        class="van-overlay"
        style="z-index: 2022; display: none"
      >
        <div  class="openApp_box">
          <img  src="../assets/blackImg.7cd79bc9.png" alt="" />
          <div  class="open_text">
            请点击右上角按钮，选择在浏览器打开
          </div>
          <i
            
            class="van-icon van-icon-close"
            style="font-size: 38px"
            ><!----></i
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  methods: {
    handleJump() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background: #f9f9fa;
  min-height: 100%;
  padding-bottom: 1.6rem;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  font-size: 0.32rem;
}
.back_box {
  position: sticky;
  top: 0;
  width: 100%;
  height: 1.17333rem;
  background: #fff;
  border-bottom: 0.02667rem solid #ecf0f4;
  box-sizing: border-box;
  z-index: 999;
}
.back_box .back_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  height: 1.17333rem;
}
.back_box .back_icon {
  width: 0.64rem;
  height: 0.64rem;
  position: relative;
}
.back_box .back_content .back_item {
  flex: 1;
  margin-left: -0.64rem;
}
.back_box .back_content .back_item img {
  width: 3rem;
  position: relative;
  left: 30%;
}
.page .content_box {
  margin: 0.26667rem 0.26667rem 0 0.26667rem;
  background: #fff;
  padding: 0 0.4rem;
  border-radius: 0.21333rem;
}
.page .content_box .contact {
  height: 1.33333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page .content_box .contact .contact_methods {
  font-size: 0.37333rem;
  font-weight: 400;
  color: #101b37;
}
.page .content_box .contact .ip_address {
  display: flex;
  align-items: center;
  font-size: 0.37333rem;
  font-weight: 400;
  color: #7c8291;
}
.page .content_box .contact .ip_address a {
  color: #7c8291;
}
.page .content_box .contact .ip_address img {
  width: 0.42667rem;
  height: 0.42667rem;
}
.detailfooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.6rem;
  z-index: 1111;
  background: #f2f9ff;
}
.detailfooter .detailfooter_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.26667rem 0.53333rem 0.26667rem 0.4rem;
}
.detailfooter .detailfooter_item {
  display: flex;
  align-items: center;
}
.detailfooter .detailfooter_box img {
  width: 1.06667rem;
  height: 1.06667rem;
}
.detailfooter .detailfooter_info {
  margin-left: 0.26667rem;
}
.detailfooter .detailfooter_item .title {
  font-size: 0.37333rem;
  font-weight: 500;
  color: #070d1e;
  line-height: 0.58667rem;
}
.detailfooter .detailfooter_item .tips {
  font-size: 0.32rem;
  color: #767983;
  line-height: 0.53333rem;
}
.detailfooter .detailfooter_btn {
  width: 2.13333rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #1069fb;
  border-radius: 0.48rem;
  border: 0.02667rem solid #fff;
  font-size: 0.37333rem;
  color: #fff;
  text-align: center;
}
.back_box .back_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  height: 1.17333rem;
}
</style>
