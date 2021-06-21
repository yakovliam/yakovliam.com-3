<template>
  <div class="container">
    <h1 class="text">404</h1>
    <p class="subtext">So, that page just...doesn't exist. Did you spam random letters in the search bar?</p>
    <div class="go-home">
      <router-link to="/">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss" scoped>

.container {

  text-align: center;

  .text {
    font-size: 5rem;
    font-weight: 900;
    text-align: center;
  }

  .subtext {
    text-align: center;
  }


  .go-home {
    padding-top: 60px;
    font-size: 2rem;

    a {
      display: inline-block;
      transition: .3s;
      font-weight: bold;
      text-decoration: none;
      color: #3f5876;
    }

    a:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}

</style>