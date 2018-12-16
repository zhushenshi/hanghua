<template>
    <div>
        <header-view></header-view>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a><i class="iconfont icon-jiantou1"></i><a href="javascript:;">公司动态</a>
            </h2>
        </div>
        </div>
        <!--页面主体-->
        <div class="main container">
            <div class="title">公司动态</div>
            <div class="box">
                <div class="new_title"><a href="javascript:;">中国将彻底改变全球清洁能源产业</a></div>
                <div class="about_img"><img src="../assets/images/news1.jpg" alt=""/></div>
                <div class="new_text">
                    美国布鲁金斯学会网站11月28日文章，原题：中国的“一带一路”倡议将改变清洁能源产业 “条条大道通罗马”并非夸大其词：罗马帝国依赖25万英里道路维系并支持其7000万居民的生活。在21世纪，北京似乎怀有类似的雄心。作为史上最大规模的基础设施项目，“一带一路”倡议有望横跨四大洲，覆盖全球1/3的GDP、全世界1/4的贸易商品和60%以上的人口。在这一具有战略意义的贸易网络中，清洁能源产业或将受益颇丰。尽管仍然需要大量煤炭和石油，但中国将在未来20年内向低碳发电领域和其他清洁能源技术投入6万多亿美元。正如国际能源署阐述的那样，中国的清洁能源投资规模对推动低碳能源技术的势头至关重要。
                </div>
            </div>
            <div class="box">
                <div class="new_title"><a href="#">中国将彻底改变全球清洁能源产业</a></div>
                <div class="about_img"><img src="../assets/images/news1.jpg" alt=""/></div>
                <div class="new_text">
                    美国布鲁金斯学会网站11月28日文章，原题：中国的“一带一路”倡议将改变清洁能源产业 “条条大道通罗马”并非夸大其词：罗马帝国依赖25万英里道路维系并支持其7000万居民的生活。在21世纪，北京似乎怀有类似的雄心。作为史上最大规模的基础设施项目，“一带一路”倡议有望横跨四大洲，覆盖全球1/3的GDP、全世界1/4的贸易商品和60%以上的人口。在这一具有战略意义的贸易网络中，清洁能源产业或将受益颇丰。尽管仍然需要大量煤炭和石油，但中国将在未来20年内向低碳发电领域和其他清洁能源技术投入6万多亿美元。正如国际能源署阐述的那样，中国的清洁能源投资规模对推动低碳能源技术的势头至关重要。
                </div>
            </div>
        </div>
        <footer-view></footer-view>    
    </div>
</template>
<script>
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name:'About',
  data () {
    return {
      msg: '',
    }
  },
  created (){},
  methods: {
    
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>
<style scoped>
.title{
    font-size: 24px;
    line-height:30px;
    margin-top:30px;
}
.box{
    padding-left:12px;
    width:1000px;
    padding-bottom:20px;
}
a:hover{
    color:#888;
}
.box .new_title{
    font-size:17px;
    color:#000;
    line-height:40px;
    margin-top:20px;
}
.box .new_text{
    line-height:25px;
    font-size:14px;
    color:#666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.about_img{
    overflow:hidden;
}
.about_img img{
    transition: all .5s;
    margin:10px 0;
}
.about_img img:hover{
    transform:scale(1.25);
}
</style>

