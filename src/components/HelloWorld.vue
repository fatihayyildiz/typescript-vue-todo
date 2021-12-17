<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project integrated with API endpoint which written at
      <a href="https://nestjs.com" rel="noopener" target="_blank">Nest.js</a
      ><br />
      Check out the
      <a
        href="https://github.com/fatihayyildiz/typescript-vue-todo"
        target="_blank"
        rel="noopener"
        >front-end project repo</a
      >
      and
      <a
        href="https://github.com/fatihayyildiz/nest-todo-api"
        target="_blank"
        rel="noopener"
        >API project repo</a
      >
    </p>
    <h3>Features</h3>
    <ul>
      <li>Login / Register</li>
      <li>Authentication / Authorization</li>
      <li>Permanently store your Todos</li>
      <li>CRUD of Todos</li>
    </ul>
    <h3>Miscellaneous</h3>
    <ul>
      <li>Deploys with GH Actions</li>
      <li>Serves at Github Pages</li>
      <li>Using cookies</li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener"
          >typescript</a
        >
      </li>
      <li>
        <a href="https://github.com/axios/axios" target="_blank" rel="noopener"
          >axios</a
        >
      </li>
      <li>
        <a href="https://github.com/axios/axios" target="_blank" rel="noopener"
          >test library</a
        >
      </li>
      <li>
        <a href="https://sass-lang.com" target="_blank" rel="noopener">sass</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
