<template>
  <div class="partners">
    <div class="container">
      <div class="title">PARTNERS</div>
      <div class="row">
        <div class="col-4 col-sm-3 col-lg-2" v-for="p in partners[0]" :key="p.id">
          <img :src="p.img" :style="p.style">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    partners: {type: Array},
  },
}
</script>

<style lang="scss">
.partners{
  background: #121820;

  img{max-height: 100%;}

  .title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    font-size: 22px;
    padding-top: 20px;
  }

  .row{
    text-align: center;
    img{
      cursor: pointer;
      width: 200px;
    }
  }

  @media only screen and (max-width:800px) { 
    .title{font-size: 18px;}
  }
}
</style>

