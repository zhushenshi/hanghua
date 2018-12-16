<template>
  <div>
    <header-view></header-view>
            <!--面包屑导航-->
    <div class="breadcrumb">
    <div class="container">
        <h2>
        <a href="">首页</a><i class="iconfont icon-jiantou1"></i><a href="javascript:;">解决方案</a>
        </h2>
    </div>
    </div>
    <div class="main container">
        <ul>					
            <li>
                <a href="javascript:;">
                    <div class="pic" style="height: 150px;">
                        <img src="../assets/images/school.jpg" alt="">
                    </div>
                    <div class="cont">
                        <div class="t">学校工程解决方案</div>
                        <div class="con">
                        安徽航华通过与学校联合，打造校园太阳能热水解决方案，从水温、水质、水压、供水时间、运行等方面入手，打造绿色低碳校园，最大化利用太阳能进行热水供应，极大地节省了常规能源的付出，安全低碳，节能环保。									</div>
                        <div class="more">查看详情 &gt;&gt;</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic" style="height: 150px;">
                        <img src="../assets/images/hospital.jpg" alt="">
                    </div>
                    <div class="cont">
                        <div class="t">医院工程解决方案</div>
                        <div class="con">
                        随着医院数量的不断增多，建立绿色医院，倡导节能建筑已经成为全社会的共识。医院热水需求量大，能耗大，通过清洁能源的引进，可以实现运行成本的降低。安徽航华绿色医院解决方案，提供安全、稳定热水，守护患者健康。									</div>
                        <div class="more">查看详情 &gt;&gt;</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic" style="height: 150px;">
                        <img src="../assets/images/hotel.jpg" alt="">
                    </div>
                    <div class="cont">
                        <div class="t">酒店工程解决方案</div>
                        <div class="con">
                        深入探究顾客用热水需求，降低装修和运营成本，节能减排、低碳环保，塑造酒店形象，增加酒店经济效益，安徽航华绿色酒店解决方案，对比经济型酒店和星级酒店的不同需要，量身定制清洁能源，洗浴更舒适，打造全新竞争力。									</div>
                        <div class="more">查看详情 &gt;&gt;</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic" style="height: 150px;">
                        <img src="../assets/images/house.jpg" alt="">
                    </div>
                    <div class="cont">
                        <div class="t">住宅工程解决方案</div>
                        <div class="con">
                        如今，房地产已经走向了精装修时代，热水也随之升级，以符合当下消费趋势。安徽航华充分考虑用户需求，从用户调研、前端设计到安装施工、售后服务，全方位提升热水品质，以技术驱动提升用户体验，实现了热水的全新升级。									</div>
                        <div class="more">查看详情 &gt;&gt;</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'
export default {
  name:'Product',
  data () {
    return {
    }
  },
  mounted (){     
  },
  methods: {
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main ul{
    margin-top:15px;
    padding-left:10px;
}
ul li{
    position: relative;
    margin-top:15px;
}
.pic{
    width: 360px;
    height: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
    overflow: hidden;
}
.pic img{
    transition: all 0.5s ease-in-out;
    width: 100%;
    height: auto;
    position: absolute;
    top:0;
    bottom:0;
    margin:auto;
}
.cont{
    padding-top: 15px;
    padding-left: 398px;
    padding-right: 54px;
}
.cont .t{
    font-size: 24px;
    line-height: 36px;
    color: #333;
    transition: color 0.5s ease-in-out;
}
.cont .con{
    font-size: 14px;
    line-height: 26px;
    color: #666;
    height: 52px;
    overflow: hidden;
    margin-top: 10px;
}
.cont .more{
    width: 120px;
    height: 34px;
    margin-top: 27px;
    background: #c8a063;
    font-size: 14px;
    line-height: 34px;
    color: #fff;
    text-align: center;
}
</style>