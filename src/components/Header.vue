<template>
	<header>
		<nav class="navbar">
			<div class="container">
				<div class="nav">
					<ul>
						<li><h1 class="logo"><router-link to="/index"></router-link></h1></li>
						<li><router-link to="/index"><i class="iconfont icon-home"></i>首页</router-link></li>
						<li><router-link to="about">关于航华</router-link></li>
						<li><router-link to="new">公司动态</router-link></li>
						<li class="nav_more">
						<router-link to="/product">解决方案<span class="icon_list"><i class="iconfont icon-ai-arrow-down"></i></span></router-link>
						<div class="nav_dropdown">
							<router-link to="/product">学校工程</router-link>		
							<router-link to="/product">医院工程</router-link>		
							<router-link to="/product">酒店工程</router-link>		
							<router-link to="/product">住宅工程</router-link>		
						</div>
						</li>
						<li><router-link to="/introduce">团队简介</router-link></li>
						<li><router-link to="/contact">联系我们</router-link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>
<script>
import('../fonts/icon-font/iconfont.css')
</script>
<style scoped>
header{
	min-width: 1200px;
}
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
	height:60px;
	color: #fff;
	font-size: 16px;
	padding: 0 36px;
}
.navbar	.nav>ul>li:hover>a {
	background: #07254e;
}
.navbar	.nav>ul>li>a i{
	position:relative;
	bottom:2px;
	margin-right: 3px;
}
.navbar .nav ul li.nav_more .icon_list {
	display: inline-block;
	vertical-align: middle;
	margin-left:12px;
	transition:all 0.3s;
}
.navbar .nav ul li.nav_more:hover .icon_list{
	transform: rotate(180deg);
}
.navbar .nav ul li.nav_more .nav_dropdown {
	position: absolute;
	top:60px;
	width:100%;
	background: #1a1a1a;
	box-shadow: 1px 1px 3px #999;
	display: none;
	z-index: 100;
}
.navbar .nav ul li.nav_more .nav_dropdown>a {
	display: block;
	line-height: 40px;
	text-align: center;
	color:#ffffff;
	border-bottom:1px solid #333333;
	background: #1a1a1a;
}
.navbar .nav ul li.nav_more .nav_dropdown>a:hover {
	background: #07254e;
}
.navbar .nav ul li.nav_more .nav_dropdown>a:last-child {
	border-bottom:none;
}
.navbar .nav ul li.nav_more:hover .nav_dropdown {
	display: block;
}
</style>
