<template>
  <div class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please login</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          name="email"
          v-model="email"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" v-model="remember" />
          Remember me
        </label>
      </div>
      <button
        class="w-100 btn btn-lg btn-primary"
        type="button"
        @click="loginRequest()"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    loginRequest() {
      console.log("email:pass", this.email, this.password, this.remember);
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
