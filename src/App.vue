<template>
  <div class="page">
    <Header/>
    <div class="inner-wrapper inner-container">
      <div class="router-wrapper">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style lang="scss">

.page {
  background-color: #f1f2f6;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.inner-container {
  margin-top: 2rem;
  min-height: 100vh;

  background-color: white;

  border-radius: 1em;

  padding-left: 5rem;
  padding-right: 5rem;
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
    margin-left: 350px;
    margin-right: 350px;
  }
  // +Extra Large
  @media only screen and (min-width: 1600px) {
    margin-left: 450px;
    margin-right: 450px;
  }
}

.router-wrapper {
  padding-top: 1rem;
}
</style>
