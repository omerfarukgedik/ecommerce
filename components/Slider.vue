<template>
  <div id="carouselExampleIndicators" class="carousel" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" v-for="s in sliders" :key="s.id" :data-slide-to="s.id" class="active"></li>
    </ol>

    <div class="carousel-inner imgSlide">
      <div :class="s.class" v-for="s in sliders" :key="s.id">
        <img :src="s.img"  class="d-block w-100 ">
      </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    sliders: { type: Array, required: true },
  }
}
</script>

<style lang="scss" scoped>

  .imgSlide {
    background-position: center;
    background-size: cover;
    height: 300px;
    width: 100%;
    img{
        object-fit: contain
    }
  }

  @media screen and(max-width: 600px) {
    .imgSlide{
      img{
        height: 200px;
      }
    }
  }
  
</style>