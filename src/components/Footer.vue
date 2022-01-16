<template>
  <footer class="footer">
    <div class="copyright">
      <h4>Copyright</h4>
      <p>&copy; {{ year }} Yakovliam (Jacob C)</p>
    </div>
    <div class="links-container">
      <a href="https://www.twitter.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
      </a>
      <a href="https://github.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
      </a>
      <a href="https://gitlab.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'gitlab']" size="lg"/>
      </a>
      <a href="https://discord.gg/9Q3SZKb9HX">
        <font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>

a {
  display: inline-block;
  transition: .3s;
  font-weight: bold;
  text-decoration: none;
  color: #677fa1;
}

a:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2) rotate(-5deg);
}

.footer {
  text-align: center;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #2c4052;
  color: white;

  padding: 20px;

  .copyright {
    p, h4 {
      display: inline-block;
    }

    p {
      margin-left: 10px;
    }
  }

  .links-container {
    a {
      padding: 10px;
    }
  }


  // Small
  @media only screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
  }
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

</style>