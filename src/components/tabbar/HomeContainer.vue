<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://img3.imgtn.bdimg.com/it/u=3771844755,1959515242&fm=200&gp=0.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img1.imgtn.bdimg.com/it/u=1359619667,895430210&fm=27&gp=0.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531676819457&di=dc6c45e314479eb84fc4aa556bf2caac&imgtype=0&src=http%3A%2F%2Ffile31.mafengwo.net%2FM00%2FD6%2F00%2FwKgBs1ZAhWiAcu-oAEGs9VRhF3A12.groupinfo.w680.jpeg"
          alt
        />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <!-- 可以使用img 引入 -->
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

    <h1>Home 组件</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #2ac845;
    }
    &:nth-child(2) {
      background-color: #007aff;
    }
    &:nth-child(3) {
      background-color: #f0ad4e;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>