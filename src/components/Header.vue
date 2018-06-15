<template>
	<header>
		<nav class="navbar">
		  <div class="container">
			<div class="nav">
			  <ul>
			<li><h1 class="logo"><router-link to="/index"></router-link></a></h1></li>
			<li><a href="index.html"><span class="icon_home"></span>首页</a></li>
			<li><a href="about.html">关于航华</a></li>
			<li><a href="news.html">公司动态</a></li>
			<li class="nav_more">
			  <a href="product.html">工程案例<span class="icon_list"><i class="iconfont icon-ai-arrow-down"></i></span></a>
			  <div class="nav_dropdown">
				<a href="product.html?type=1">工程案例1</a>
				<a href="product.html?type=2">工程案例2</a>
				<a href="product.html?type=2">工程案例3</a>
				<a href="product.html?type=2">工程案例4</a>
				<a href="product.html?type=2">工程案例5</a>
				
			  </div>
			</li>
			<li><a href="contact.html">联系我们</a></li>
			  </ul>
			</div>
			<div class="s_cart">
			  <!-- <a href="cart.html">
			<span class="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span class="icon_sj"></span>
			  </a> -->
			  <div class="cart_dropdown">
			<!--<h3>您的购物车为空~</h3>-->
			<ul>
			  <li>
				<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>
				<div>
				  <span>-</span><input type="text" value="2"/><span>+</span>
				</div>
				<strong>¥1599.00</strong>
				<em></em>
			  </li>
			  <li>
				<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>
				<div>
				  <span>-</span><input type="text" value="2"/><span>+</span>
				</div>
				<strong>¥1599.00</strong>
				<em></em>
			  </li>
			</ul>
			<div class="cd_js clearfloat">
			  <span>共计：<strong>0.00</strong></span>
			  <a href="#">结算</a>
			</div>
			  </div>
			</div>
		  </div>
		</nav>
	</header>
</template>
<script>
import('../fonts/icon-font/iconfont.css')
</script>
<style scoped>
.navbar {
	height: 60px;
	background: #1a1a1a;
}
.navbar .nav{
	float: left;
}
.navbar .nav ul li 	.logo {
	width:150px;
	height:60px;
	background: url(../assets/images/logo.png)  no-repeat;
	background-size:contain;
}
.navbar .nav>ul>li {
	float:left;
	position: relative;
}
.navbar .nav ul li .logo a{display:block;width:100%;height:100%;}
.navbar	.nav>ul>li>a {
	display: block;
	line-height: 60px;
	color: #fff;
	font-size: 16px;
	padding: 0 36px;
}
.navbar	.nav>ul>li:hover>a {
	background: #07254e;
}
	.icon_home {
			width:17px;
			height: 15px;
			/* background: url(../../assets/images/iconlist.png) 0 -130px no-repeat; */
			display: inline-block;
			vertical-align: middle;
			margin-top:-4px;
			margin-right:13px;
	}
	.nav>ul>li.cur>a {
			background:#f39700 ;
	}
		
	
	.icon_list {
			display: inline-block;
			vertical-align: middle;
			margin-left:12px;
			transition:all 0.3s;
	}
	.nav_more:hover .icon_list{
			transform: rotate(180deg);
	}

	.s_cart {
			float: right;
			position: relative;
	}
	.s_cart>a {
			display: block;
			height: 40px;
			line-height: 40px;
			color: #fff;
			font-size: 13px;
			padding: 0 8px 0 10px;
			background: #2080bd;
	}
	.s_cart>a>strong {
			font-weight: lighter;
			color:#fc9;
	}
	.s_cart .icon_cart {
			width:22px;
			height: 16px;
			/* background: url(../../assets/images/iconlist.png) 0 -160px no-repeat; */
			margin-right:10px;
			display: inline-block;
			vertical-align:middle;
			margin-top:-3px;
	}
	.s_cart .icon_sj {
			width:7px;
			height: 4px;
			/* background: url(../../assets/images/iconlist.png) 0 -250px no-repeat; */
			margin-left:10px;
			display: inline-block;
			vertical-align: middle;
			margin-top:-2px;
	}

	.nav_dropdown {
			position: absolute;
			top:60px;
			width:100%;
			background: #1a1a1a;
			box-shadow: 1px 1px 3px #999;
			display: none;
			z-index: 100;
	}
	.nav_dropdown>a {
			display: block;
			line-height: 40px;
			text-align: center;
			color:#ffffff;
			/* border-bottom:1px solid #ccc; */
			background: #1a1a1a;
	}
	.nav_dropdown>a:hover {
			background: #2080bd;
	}
	.nav_dropdown>a:last-child {
			border-bottom:none;
	}
	.nav_more:hover .nav_dropdown {
			display: block;
	}

	.cart_dropdown {
			width:260px;
			background: #fff;
			box-shadow: 1px 1px 3px #999;
			position: absolute;
			top:40px;
			right: 0;
			display: none;
			z-index: 100;
	}
	.cart_dropdown>h3 {
			font-size: 18px;
			text-align: center;
			font-weight: lighter;
			padding: 30px 0;
	}
	.cart_dropdown ul {
			float: none;
	}
	.cart_dropdown ul li {
			padding:10px;
			border-bottom: 1px dotted #ccc;
			float: none;
	}
	.cart_dropdown ul li a,.cart_dropdown ul li div,.cart_dropdown ul li strong,.cart_dropdown ul li em {
			display: inline-block;
			vertical-align: middle;
			margin-left:16px;
	}
	.cart_dropdown ul li a {
			border:1px solid #eee;
			padding: 4px;
			width: 40px;
			height: 40px;
			margin-left:0;
	}
	.cart_dropdown ul li a:hover {
			border:1px solid #ccc;
	}
	.cart_dropdown ul li a img {
			width:40px;
			height:40px;
	}
	.cart_dropdown ul li span {
			width: 20px;
			height:20px;
			background: #e8e8e8;
			text-align: center;
			line-height: 20px;
			display: inline-block;
			vertical-align: middle;
	}
	.cart_dropdown ul li span:hover {
			cursor: pointer;
			background: #eee;
	}
	.cart_dropdown ul li input {
			width: 28px;
			height:18px;
			border:1px solid #ccc;
			text-align: center;
			vertical-align: middle;
	}
	.cart_dropdown ul li strong {
			font-size: 13px;
			color:#f63;
	}
	.cart_dropdown ul li em {
			border:1px solid transparent;
			border-radius: 3px;
			padding: 2px;
			width: 14px;
			height: 14px;
			/* background: url(../../assets/images/iconlist.png) 2px -298px no-repeat; */
			cursor: pointer;

	}
	.cart_dropdown ul li em:hover {
			border:1px solid #ddd;
	}
	.cd_js {
			padding:10px;
			display: none;
	}
	.cd_js>span {
			float: left;
			font-size: 13px;
	}
	.cd_js>span>strong {
			color:#f63;
	}
	.cd_js>a {
			float: right;
			border-radius: 3px;
			width: 60px;
			height: 30px;
			background: #f63;
			color:#fff;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
	}
</style>
