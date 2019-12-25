<template>
  <div class="choices">
			<div class="container">
				<div class="row ">
					<div class="box1 col-6 col-sm-3 pl-4 pt-3 pb-3">
						<span class="title">ACTIVITIES</span> <br> <br>
						<span> T SHIRTS <br> FROM <br> DRIBB <br> BLE...</span> <br> <br>
						<span class="price"> $25.00</span>
					</div>
					<div class="box2 col-6 col-sm-3 pl-4 pt-3 pb-3">
						<span class="title">AMPERSAN <br> DWICH <br> TEE</span>
						<span class="price"> $25.00</span>

					</div>
					<div class="box3 col-6 col-sm-3 pl-4 pt-3 pb-3">
						<span class="title">BALLY ROG <br> ER GLOW <br> TEE </span> <br>
						<span> DRIBB <br> BLE...</span> <br> <br>
						<span class="price"> $25.00</span>
					</div>
					<div class="box4 col-6 col-sm-3 pl-4 pt-3 pb-3 ">
						<span>20 % <br> OFF</span> <br> <br>
						<span class="price"> LETS GO</span>

					</div>

				</div>
			</div>
		</div>
</template>


<style lang="scss" scoped>
  .choices{
  padding: 1em;
  
  
    .row{
      cursor: pointer;
      font-weight: bold;
      color: #FEFDFE;

      .title{font-size: 20px;}
      .price{position: absolute;  bottom: 0; left:1em; font-size: 30px;;}
    }


    @media screen and(max-width: 770px) {
      .row{.price{font-size: 23px;}}
    }

    .box1{background: #58DBD3; .price{color: #12877F}}
    .box2{background: #E4CF9A; .price{color: #604E3B}}
    .box3{background: #FFA7CE; .price{color: #44404B}}
    .box4{
      background: #F2CB66 ; 
      font-size: 3em; 
      text-align: center;  
      .price {left: 0; margin-bottom: 15px; padding: 5px; background: #fff; color: #F2CB66;}
    }

    @media screen and(max-width: 700px){
      .box4{font-size: 2em; }
    }
}

@media screen and(max-width: 991px) {
  .choices{ padding: 0.5em}
}
</style>