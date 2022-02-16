<template>
  <div>
    <ul class="coin">
      <li class="coin__data"><strong>Name: </strong> {{ info.name }}</li>
      <li class="coin__data"><strong>Symbol: </strong> {{ info.symbol.toUpperCase() }}</li>
      <li class="coin__data"><strong>Logo </strong>:
      <img :src="info.image.thumb" alt="">
      </li>
      <li class="coin__data"> <strong>Url: </strong>
        <a :href="info.links.homepage[0]" target="blank">{{ info.links.homepage[0] }}</a>
      </li>
      <li class="coin__data"> <strong>Genesis date: </strong>{{ info.genesis_date }}</li>
      <li class="coin__data">
        <strong>Description: </strong>
        <br>
        {{ info.description.en }}</li>
    </ul>
  </div>
</template>

<script>
import filteredCoins from '@/views/Home.vue'
import axios from 'axios';

export default {
  data() {
    return {
      coins: filteredCoins,
      info: [],
    };
  },

  props: {
    id: {type: String, required: true}
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum');
        this.info = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },

  computed: {
    coinId() {
      return this.coins.find(
        (coin) => coin.id === this.route.props.id
      )
    }
  }
}
</script>

<style lang="scss">
.coin {
  font-size: 14px;

  &__data {
    margin-bottom: 20px;
  }
}
</style>
