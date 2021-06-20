<template>
  <div class="who-am-i">
    <div class="title">
      <h2>Who am I?</h2>
    </div>
    <p>I'm a passionate software engineer from the U.S. I enjoy problem solving and the feeling of overcoming a
      challenge.</p>
  </div>
  <div class="my-projects">
    <div class="title">
      <h2>My Projects</h2>
    </div>
    <div class="projects-container">
      <div class="project-item">
        <h2>Licent</h2>
        <div class="project-content">
          <p>Digital Licensing Service dedicated to making digital product management easy.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 0.5rem;
}

.who-am-i {

}

.my-projects {
  .projects-container {
    padding-top: 2rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .project-item {
      text-align: center;

      border-radius: 1em;

      padding: 1rem;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);

      .project-content {
        text-align: center;
        width: 15rem;
      }
    }
  }
}
</style>
