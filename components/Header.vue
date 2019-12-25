<template>
  <div class="header">
			<div class="container">
				<div class="headerWrapper">
					<div class="title">
						<nuxt-link to="/"> <span>ZEBRA</span> </nuxt-link>
					</div>

					<div class="menu">
						<nuxt-link to="/basket">
              <button class="btn"><img src="../static/assets/img/basket.png" alt=""> 
                ${{Math.ceil(sumOfProducts)}} <span class="ml-1 badge badge-light">{{countOfProducts}}</span>
              </button>
            </nuxt-link>
					</div>
				</div>
			</div>
		</div>
</template>

<script>

</script>

<style lang="scss">

.header{
  background: #F3F5F4;
  height: 70px;
  display: flex;
  flex-direction: row;

  a{ text-decoration: none; }


  .headerWrapper{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;

    .title{
      display: flex;
      flex-direction: column;
      float: left;
      font-size: 22px;
      width: 30%;
      font-weight: bold;
    }

    .menu{
      align-items: center;
      flex-direction: column;
      width: 70%;
      .btn {
        float:right;
        background-color: DodgerBlue; /* Blue background */
        border: none; /* Remove borders */
        color: white; /* White text */
        padding: 5px; /* Some padding */
        font-size: 16px; /* Set a font size */
        cursor: pointer; /* Mouse pointer on hover */
        img{width: 18px; margin-right: 5px;}
      }
      
      /* Darker background on mouse-over */
      .btn:hover {
        background-color: RoyalBlue;
      }
    }
  }  
}
  
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getBasketList: 'basket/getBasket',
      sumOfProducts: 'basket/sumOfProducts',
      countOfProducts: 'basket/countOfProducts'
    })
  },
  
}
</script>