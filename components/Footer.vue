<template>
  <div class="footer">
			<div class="container">
				<div class="footerWrapper">
					<div class="left">
						<div class="logo">ZEBRA</div>
						<div class="copy">Copyright &copy; 2019.</div>
					</div>
					<div class="right">
						<ul>
							<a href=""><li><img src="../static/assets/img/social/twitter.png" alt=""></li></a>
							<a href=""><li><img src="../static/assets/img/social/linkedin.png" alt=""></li></a>
							<a href=""><li><img src="../static/assets/img/social/youtube.png" alt=""></li></a>
						</ul>
					</div>
				</div>
			</div>
		</div>
</template>

<style lang="scss">
.footer{
  background: #1B2330;
  color: #fff;
  padding: 10px;

  .footerWrapper{
    display: flex;
    flex-direction: row;
    width: 100%;

    .left{
      display: flex;
      flex-direction: column;
      width: 60%;
      .logo{font-size: 22px; font-weight: bold;}
      .copy{color: grey;}
    }

    .right{
      display: flex;
      flex-direction: column;
      width: 40%;
      align-items: right;
      vertical-align: middle;

      ul{
        list-style: none;
        display: flex;
        flex-direction: row-reverse;
        

        li{ 
          margin-left: 10px; 
          width: 24px;
          margin-top: 20px;
          @media screen and (max-width: 400px) {
            margin-left: 5px; 
            width: 20px;
            margin-top: 15px;
          }
        }
      }  
    }
  }
}  
</style>

<script>
export default {
  name: 'Footer'
  
}
</script>