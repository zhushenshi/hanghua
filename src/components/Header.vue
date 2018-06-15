<template>
	<div>
		<header class="header container">
		  <h1 class="logo"><router-link to="/index"></router-link></a></h1>
		</header>
		<!--nav-->
		<nav class="navbar">
		  <div class="container">
			<div class="nav">
			  <ul>
			<li><a href="index.html"><span class="icon_home"></span>首页</a></li>
			<li><a href="about.html">关于航华</a></li>
			<li><a href="news.html">公司动态</a></li>
			<li class="nav_pd">
			  <a href="product.html">工程案例<span class="icon_pd"></span></a>
			  <div class="pd_dropdown">
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
	</div>
</template>
<script>
</script>