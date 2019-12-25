<template>
  <div class="p-2">

    <button type="button" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalCenter">+ Add New</button>

    <h4 class="text-center pt-5 pb-5" v-if="productFilter <= 0"> Bu kategoride ürün bulunmamaktadır.</h4>

    <div class="pWrapper mt-2" v-for="p in productFilter" :key="p.id">
      <span class="name">{{ p.name }}</span>
      <div class="price" @click="addBasket(p)"> 
        <div class="btn"> ${{p.price}} <br /> Add Basket</div> 
      </div>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add New Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="product.id"  type="number" class="form-control" placeholder="Id" required>
            <input v-model="product.name" type="text" class="form-control mt-2" placeholder="Product Name" required>
            <input v-model="product.price" type="number" class="form-control mt-2" placeholder="Salary" required><br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addProduct" data-dismiss="modal" aria-label="Close">Add Product</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
  
</style>

<script>
import { mapGetters } from 'vuex'
import {
  GET_PRODUCTS,
  GET_BASKET,
  GET_INCREASE
} from '@/store/types/actions.type'

export default {
  data(){
    return{
      product: {
        id: "",
        name: "",
        price: "",
        catId: this.$route.params.id
      },
    }
  },
  computed: {
     ...mapGetters({
      getProductsList: 'product-list/getProducts',
      getBasketList: 'basket/getBasket'
     }),
     productFilter: function () {
        return this.getProductsList.filter(p => p.catId===this.$route.params.id)
      }
  },
  created() {
    this.getProducts()
  },
  methods:{
    getProducts(){
      this.$axios.get('/db.json')
        .then(res => {
          this.$store.dispatch('product-list/' + GET_PRODUCTS, res.data.Products)
        })
    },
    addProduct(){
      if(this.product.id !== "" && this.product.name !== "" && this.product.price !== ""){
        this.$store.dispatch('product-list/' + GET_PRODUCTS, this.product)
        this.$toast.success('Product successfully added').goAway(1000)
        this.$router.push('/category/'+ this.$route.params.id)
        
      }else{ this.$toast.error('Tüm alanları doldurun.').goAway(1000)}
    },
    addBasket(product){
      let count = this.getBasketList.filter((x) => x.id == product.id);
      if(count.length > 0)
      {
        console.log("ürün bulundu")
        this.$store.dispatch('basket/' + GET_INCREASE, product)
      }else{
        console.log("ürün yok")
        this.$store.dispatch('basket/' + GET_BASKET, product)
      }
      
      this.$toast.success('Successfully added to basket').goAway(1000)
    }
  }
}
</script>



<style lang="scss" scoped>
.pWrapper{
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;

  .name{display: flex; flex-direction: column; width: 80%; float: left;}
  .price{display: flex; flex-direction: column; width: 20%; float: right; color: coral; justify-content: right;
    .btn{padding: 5px; background: darkgreen; color:darkkhaki; font-size: 14px;}
  }
  
}
  
</style>