<template>
  <div class="container">
      <div class="wrapper">
        <input type="text" placeholder="Search Coin" class="input" v-model="search">
      </div>
      <div class="content">
        <table class="table">
          <thead class="table__header">
            <tr>
              <th class="table__header-data">#</th>
              <th class="table__header-data">Coin</th>
              <th class="table__header-data">Price</th>
              <th class="table__header-data">Price Change</th>
              <th class="table__header-data">24 Volume</th>
            </tr>
          </thead>

          <tbody class="table__body" id="list">
            <tr class="table__body__row" v-for="(coin, index) in filteredCoins" :key="coin.id">
              <td class="table__body__row-data">{{ index + 1 }}</td>
              <td class="table__body__row-data">
                <img :src="coin.image" alt="coin image" class="coin__image">
                <router-link :to="coin.id">
                  {{coin.name}} {{ coin.symbol.toUpperCase() }}
                </router-link>
              </td>
              <td class="table__body__row-data">{{ coin.current_price }} &#8364;</td>
              <td
                class="table__body__row-data"
                v-bind:class="{'coin__priceUp': coin.price_change_percentage_24h > 0,'coin__priceDown': coin.price_change_percentage_24h < 0}"
              >
                {{ coin.price_change_percentage_24h }} %
              </td>
              <td class="table__body__row-data">{{ coin.total_volume.toLocaleString('en-US') }} &#8364;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
	export default {
  el: '#list',
  data() {
    return {
      coins: [],
      search: '',
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        this.coins = response.data;
      } catch (error) {
        throw new Error('Problem with downloading');
      }
    },
  },
  created() {
    this.getData();
  },

  computed: {
    filteredCoins() {
      return this.coins.filter((coin) => {
        return (coin.name.toLowerCase().includes(this.search.toLowerCase()) || 
          coin.symbol.toLowerCase().includes(this.search.toLowerCase()))
      })
    },

    getClass: function() {
      return this.content > 0 ? 'good' : 'danger'
    }
  },
}
</script>
