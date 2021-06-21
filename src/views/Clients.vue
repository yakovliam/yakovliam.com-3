<template>
  <div class="clients">
    <div class="title">
      <h2>Notable Clients</h2>
    </div>
    <p>Over my years of development, I've worked with many online creators.</p>
    <p>Here is a list I've compiled of notable people.</p>
    <div class="clients-container">
      <ul>
        <li>
          <a href="https://www.youtube.com/channel/UCewMTclBJZPaNEfbf-qYMGA">JackSucksAtLife</a> <i>(1.5 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC_tvR3xgVNReKaxSbpCG-mQ">ShotGunRaids</a> <i>(1.5 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCaawTX2yTGhd3xKwKfpXZTQ">Spifey</a> <i>(2 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC5p_l5ZeB_wGjO_yDXwiqvw">TommyInnit</a> <i>(10 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ">DaniDev</a> <i>(2 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCp5LUwfn3LY4IGCizSYpt0g">DuckyTheGamer</a> <i>(1 Million
          Subscribers)</i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCu17Sme-KE87ca9OTzP0p7g">VintageBeef</a> <i>(1 Million
          Subscribers)</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cover from "../assets/40674666.png";

export default {
  name: 'Clients',
  data() {
    return {
      coverImage: cover,
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
  color: #3f5876;
}

a:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

img {
  transition: .3s;
}

img:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1) rotate(2deg);
}

.title {
  padding-top: 0.5rem;
}

.clients {
  .clients-container {
    padding-top: 10px;

    ul {
      list-style: '👉  ';

      li {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
