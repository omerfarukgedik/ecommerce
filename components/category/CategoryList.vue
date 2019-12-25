<template>
  <div class="categories transparent">
			<span class="title">CATEGORIES</span> 
			<div class="categoryWrapper">
				<div class="category" v-for="c in categories" :key="c.id">
          <Category :category="c" />
				</div>
			</div>
		

		</div>
</template>

<script>
import Category from '@/components/category/Category'
export default {
  props:{
    categories: {type: Array, required: true},
  },
  components:{
    Category
  }
}
</script>

<style lang="scss">
.categories{
  
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 300px;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before{
    content: '';
    background: url('../../static/assets/img/zebra.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  .title{
    color: #000;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .categoryWrapper{
    display: flex;
    flex-direction: row;

    .category{
      font-weight: bold;;
      margin-left: 50px;
      padding: 20px;
      position: relative;
      font-size: 22px;
      display: flex;
      flex-direction: columun;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      

      &:before{
        content: '';
        background: #5FC5CA;
        position: absolute;
        opacity: 0.7;
        width: 100%;
        height: 100px;
        border-radius: 50%;
        z-index: -1;
      }

      
      
    }
  }

  
}

@media screen and(max-width: 991px) {
  .categories{
    height: 200px;
    .categoryWrapper{
      .category{
        font-weight: bold;;
        margin-left: 10px;
        padding: 10px;
        position: relative;
        font-size: 12px;

        &:before{
          height: 70px;
        }
      }
    }
  }

  }
</style>