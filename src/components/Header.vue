<template>
  <header class="header">
    <div class="content">
      <h2 class="header-text">
        <router-link to="/" class="link"> Jacob C.</router-link>
      </h2>
      <div class="link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="link">
        <router-link to="/clients">Clients</router-link>
      </div>
      <div class="contact-button-wrapper">
        <a href="mailto:jacob@yakovliam.com" class="contact-button">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  width: 100%;
  height: 100px;

  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05%);

  background-color: white;

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    height: 100%;
    align-items: center;

    .link {
      flex: 1;

      a {
        display: inline-block;
        transition: 1s;
        font-weight: bold;
        text-decoration: none;
        color: #3f5876;
      }

      a:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.2) rotate(1deg);
        color: #7192bb;
      }
    }

    .header-text {
      .link {
        text-decoration: none;
        color: #3f5876;
      }

      text-align: left;
      flex: 1;
    }

    .contact-button-wrapper {
      text-align: right;
      flex: 1;

      a {
        &:hover {
          background: rgba(245, 245, 245, 0.84);
        }

        padding: 6px 12px 6px;

        border-color: rgba(117, 117, 117, 1);
        border-radius: 99em;
        border-style: solid;
        border-width: 1px;

        text-decoration: none;
        background: 0;
        box-sizing: border-box;
        color: rgba(41, 41, 41, 1);
      }
    }

    // Small
    @media only screen and (max-width: 575px) {
      margin-left: 20px;
      margin-right: 20px;
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
}

</style>