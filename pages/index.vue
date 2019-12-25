<template>
  <div>
    <Slider :sliders="getSliderList" />
    <Choices />
    <CategoryList :categories="getCategoryList" />
    <Partners :partners="getPartnerList" />
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import Choices from '@/components/Choices'
import CategoryList from '@/components/category/CategoryList'
import Partners from '@/components/Partners'
import { mapGetters } from 'vuex'

import {
  GET_CATEGORIES,
  GET_PARTNERS,
  GET_SLIDERS
} from '@/store/types/actions.type'

export default {
  components: {
    Slider,
    Choices,
    CategoryList,
    Partners
  },
  methods: {
    getCategories(){
      this.$axios.get('/db.json')
        .then(res => {
          this.$store.dispatch('category-list/' + GET_CATEGORIES, res.data.Categories)
        })
    },
    getPartners(){
      this.$axios.get('/db.json')
        .then(res => {
          this.$store.dispatch('partners/' + GET_PARTNERS, res.data.Partners)
        })
    },
    getSliders(){
      this.$axios.get('/db.json')
        .then(res => {
          this.$store.dispatch('sliders/' + GET_SLIDERS, res.data.Sliders)
        })
    },

  },
  computed: {
    ...mapGetters({
      getCategoryList: 'category-list/getCategories',
      getPartnerList: 'partners/getPartners',
      getSliderList: 'sliders/getSliders'
    })
  },
  mounted() {
    this.getCategories()
    this.getPartners()
    this.getSliders()
  }
}
</script>
