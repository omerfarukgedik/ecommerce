<template>
	<div class="catName">
      <nuxt-link 
        style="text-decoration: none; color: black; " 
        :to="'/category/' + category.id" > 
        <span class="name">{{category.name}}</span>  
      </nuxt-link>
  </div>
</template>

<script>
export default {
  props:{
    category: { type: Object, required: true },
  }
}
</script>

<style lang="scss" scoped>

.name{
  display: flex;
  flex-direction: columun;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
  
</style>