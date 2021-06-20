<template>
  <header class="header">
    <div class="content inner-wrapper">
      <h2 class="header-text">Jacob C.</h2>
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
  height: 65px;

  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05%);

  .content {
    align-items: center;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .header-text {
      text-align: left;
      flex: 1;
    }

    .contact-button-wrapper {
      text-align: right;
      flex: 2;

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
  }
}

</style>