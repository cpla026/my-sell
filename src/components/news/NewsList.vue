<template>
  <div>
    <div class="title">缩略图居左</div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../assets/images/shuijiao.jpg" />
            <div class="mui-media-body">
              <h1>幸福</h1>
              <p class="mui-ellipsis">
                <span>发表时间: 2020-12-12</span>
                <span>点击: 0 次</span>
              </p>
            </div>
          </a>
        </router-link>
      </li>

      <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
          <router-link :to="'/home/newsinfo/' + item.id">
            <img class="mui-media-object mui-pull-left" src="../../assets/images/muwu.jpg">
            <div class="mui-media-body">
              <h1>{{item.cityName}}</h1>
      <p class='mui-ellipsis'>-->
      <!-- 如果有时间返回 可以使用定义好的时间格式化过滤器格式时间-->
      <!-- <span>发表时间: {{ item.time | dateFormat}}</span>-->
      <!--<span>发表时间: 2020-12-12</span>
                <span>点击: 0 次</span>
              </p>
            </div>
          </router-link>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>