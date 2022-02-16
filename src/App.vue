<template>
  <div id="app">
    <router-link to="/home">Home</router-link>

    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
}

body {
  background-color: rgb(206, 201, 201);
  font-size: 14px;
}

.table__body__row {
  cursor: pointer;

  &:hover {
    background-color: #dee1eb;
  }

  &-data{
    padding: 20px;
  }
}

.container {
  margin: 20px;
  max-width: 960px;
}

.input {
  width: 80%;
  padding: 4px;
  border: 1px solid black;
  border-radius: 5px;
}

.wrapper {
  margin-bottom: 20px;
}

.table {
  text-align: left;
  border-collapse: collapse;

  &__header {
    border-bottom: 1px solid black;
  }

  &__header-data {
    padding: 20px;
  }
}

.coin{
  &__image {
    width: 25px;
    margin-right: 10px;
  }

  &__priceUp {
    color: green;
    font-weight: bold;
  }

  &__priceDown {
    color: red;
    font-weight: bold;
  }
}
</style>
