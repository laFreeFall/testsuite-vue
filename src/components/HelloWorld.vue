<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <form>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click.prevent="register">go</button>
  </form>
    <form v-if="!$auth.check()">
      <p>login</p>

      <input type="text" v-model="email">
      <input type="text" v-model="password">
      <button @click.prevent="login">go</button>
    </form>
    <div v-if="$auth.check()" class="pull-right">
      <p>{{ name }} ({{ email }})</p>
      <a href="#" @click.prevent="$auth.logout()">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      name: 'admin adminovich123',
      email: 'admin@mail.com',
      password: 'admin',
      error: false,
      errors: {},
      success: false,
    };
  },
  methods: {
    register() {
      console.log([this.email, this.password]);
      const app = this;

    },
    login() {

    },
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
