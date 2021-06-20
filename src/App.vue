<template>
  <div class="page">
    <Header/>
    <div class="inner-wrapper">
      <div class="router-wrapper">
        <Home/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/views/Home";

export default {
  name: 'App',
  components: {
    Home,
    Header,
  }
}
</script>

<style lang="scss">

.page {

  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.inner-wrapper {
  // Small
  @media only screen and (min-width: 576px) {
    margin-left: 100px;
    margin-right: 100px;
  }
  // Medium
  @media only screen and (min-width: 768px) {
    margin-left: 100px;
    margin-right: 100px;
  }
  // Large
  @media only screen and (min-width: 992px) {
    margin-left: 200px;
    margin-right: 200px;
  }
  // Extra Large
  @media only screen and (min-width: 1200px) {
    margin-left: 200px;
    margin-right: 200px;
  }
  // Extra Large
  @media only screen and (min-width: 1400px) {
    margin-left: 250px;
    margin-right: 250px;
  }
  // +Extra Large
  @media only screen and (min-width: 1600px) {
    margin-left: 350px;
    margin-right: 350px;
  }
}

.router-wrapper {
  padding-top: 1rem;
}
</style>
