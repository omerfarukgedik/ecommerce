<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components:{
    Header,
    Footer
  }
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');



body{
  background: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  a{ text-decoration: none; }

  img{max-width: 100%; max-height: 100%;}

  @media only screen and (max-width:991px) { 
    font-size: 14px;
  }
}


</style>
