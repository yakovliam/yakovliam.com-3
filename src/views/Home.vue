<template>
  <div class="who-am-i">
    <div class="cover-image-wrapper">
      <img :src="coverImage" class="cover-image" alt="Cover Image"/>
    </div>
    <div class="title">
      <h2>Who am I?</h2>
    </div>
    <p>Hello 👋, I'm Jacob. I'm a passionate software engineer from the USA. I enjoy problem
      solving and the feeling of overcoming a
      challenge.</p>

    <a href="https://www.twitter.com/yakovliam">
      <img
          src="https://camo.githubusercontent.com/b0e2e241489abf2cd05efbb32932e73dd74ec674a489d1100799e789fa7d5024/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f79616b6f766c69616d3f6c6f676f3d74776974746572267374796c653d666f722d7468652d6261646765"
          alt="yakovliam"
          data-canonical-src="https://img.shields.io/twitter/follow/yakovliam?logo=twitter&amp;style=for-the-badge"
          style="max-width:100%;">
    </a>
  </div>
  <div class="my-projects">
    <div class="title">
      <h2>My Projects</h2>
    </div>
    <div class="projects-container">
      <div class="project-item">
        <h2 class="project-title">
          <a class="floating" href="https://github.com/yakovliam/licent.yakovliam.com/">Licent</a></h2>
        <div class="project-content">
          <p>Digital Licensing Service dedicated to making digital product management easy.</p>
        </div>
      </div>
      <div class="project-item">
        <h2 class="project-title"><a href="https://github.com/yakovliam/knowbeforeyougo/">KnowBeforeYouGo</a></h2>
        <div class="project-content">
          <p>A system of IoTs and apps that let you know how busy a destination is</p>
        </div>
      </div>
      <div class="project-item">
        <h2 class="project-title">
          <a class="floating" href="https://howlonguntil.christmas/">HLUC?</a></h2>
        <div class="project-content">
          <p>Find out how many days until the next Christmas!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="my-links">
    <div class="title">
      <h2>My Links</h2>
    </div>
    <div class="links-container">
      <a href="https://www.twitter.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
      </a>
      <a href="https://github.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
      </a>
      <a href="https://gitlab.com/yakovliam">
        <font-awesome-icon :icon="['fab', 'gitlab']" size="2x"/>
      </a>
      <a href="https://discord.gg/9Q3SZKb9HX">
        <font-awesome-icon :icon="['fab', 'discord']" size="2x"/>
      </a>
    </div>
  </div>
</template>

<script>
import cover from "../assets/40674666.png";

export default {
  name: 'Home',
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
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
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

.who-am-i {
  padding-top: 2rem;

  a:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  .cover-image-wrapper {
    text-align: center;

    .cover-image {
      object-fit: cover;
      border-radius: 50%;

      width: 12rem;
    }
  }
}

.my-projects {
  .projects-container {
    padding-top: 2rem;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;

    .project-item {
      text-align: center;

      border-radius: 1em;

      padding: 1rem;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);

      max-width: 20rem;

      .project-title {
      }

      .project-content {
        text-align: center;

        width: 100%;

        display: flex;
        justify-content: center;
      }
    }
  }
}

.my-links {
  a {
    padding-right: 20px;
    padding-bottom: 20px;
  }
}

</style>
