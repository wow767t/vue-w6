<template>
  <div class="hello">
    <h1>Scottie Chang</h1>
    <p>
    </p>
    <h3>Projects</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >#</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >#</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >#</a
        >
      </li>
    </ul>
    <h3>e-mail</h3>
    <ul>
      <li>
        <a href="mailto: wow767t@gmail.com" target="_blank" rel="noopener">wow767t@gmail.com</a>
      </li>
    </ul>
    <h3>GitHub</h3>
    <ul>
      <li>
        <a href="https://github.com/wow767t" target="_blank" rel="noopener"
          >https://github.com/wow767t</a
        >
      </li>
    </ul>
    <h3>My ArtStation</h3>
    <ul>
      <li>
        <a href="https://www.artstation.com/oneg" target="_blank" rel="noopener"
          >https://www.artstation.com/oneg</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
