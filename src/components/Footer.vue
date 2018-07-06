<template>
<div class="container">
  <div class="f_con clearfloat">
    <ul>
      <li>
        <h3>走进航华</h3>
          <router-link to="/about">公司简介</router-link>
          <router-link to="/about">航华精神</router-link>
          <router-link to="/about">品牌历程</router-link>
      </li>
      <li>
        <h3>成为合作伙伴</h3>
        <a href="jacvscript:;">成为核心供应商</a>
        <a href="jacvscript:;">电商经销入口</a>
        <a href="jacvscript:;">成为线下代理商</a>
      </li>
      <li>
        <h3>售后服务</h3>
        <router-link to="/contact">电话售后</router-link>
        <router-link to="/contact">售后政策</router-link>
        <router-link to="/contact">意见反馈</router-link>
      </li>
      <li>
        <h3>加入航华</h3>
        <a href="jacvscript:;">招聘贤才</a>
        <a href="jacvscript:;">联系我们</a>
        <a href="jacvscript:;">网站地图</a>
      </li>
    </ul>
    <span class="qrcode"></span>
    <div class="kefu">
      <h4>4000-585-116</h4>
      <span>周一至周五9:00-17:30</span>
      <a href="#">金 牌 客 服</a>
    </div>
  </div>
  <div class="copyright">
    Copyright © 2018 Apple Inc 保留所有权利。使用条款|客户隐私政策        © 安徽航华科技有限公司  京公安网安备 11010500896 | 京ICP备 12050755
  </div>
</div>
</template>


<style scoped>
.footer {
    margin-top: 60px;
    background: #f1f1f1;
    
}
.f_con {
    margin-top:30px;
    margin-top: 12px;
    padding-bottom: 12px;
    border-top:1px solid #ddd;
}
.f_con ul li {
    float: left;
    margin-right: 80px;
}
.f_con ul li h3 {
    font-size: 14px;
    color:#000;
    font-weight: lighter;
    line-height: 28px;
}
.f_con ul li a {
    display: block;
    color: #999;
    line-height:25px;
    font-size:14px;
}
.f_con ul li a:hover {
    color:#000;
}
.f_con>span {
    float: left;
    width: 100px;
    height: 100px;
    background: url(../assets/images/qrcode.png) 0 0 no-repeat;
}
.kefu {
    float: right;
    margin-right: 26px;
    text-align: center;
}
.kefu>h4 {
    font-size: 24px;
    font-weight: lighter;
    line-height: 36px;
}
.kefu>span {
    color:#999;
}
.kefu>a {
    display: block;
    margin: 8px auto 0;
    width: 120px;
    height: 26px;
    color:#fff;
    font-size: 14px;
    line-height: 26px;
}

.copyright {
    border-top:1px solid #ddd;
    line-height: 65px;
    text-align: center;
    color:#999;
}
</style>
