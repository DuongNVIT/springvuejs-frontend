<template>
  <div class="login-wrapper" @click.self="hideLogin">
    <div class="login-inner">
      <div class="heading">Sign in</div>
      <div class="content">
        <input
          type="text"
          class="form-input"
          placeholder="Username"
          v-model="user.username"
        />
        <input
          type="password"
          class="form-input"
          placeholder="Password"
          v-model="user.password"
        />
        <div class="submit">
          <div class="btn-forget">Forget password</div>
          <button @click="handleLogin" class="btn-login">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "../service/authService";
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      const response = await authService.login(this.$data.user);
      if(response)
      this.hideLogin();
    },
    
    hideLogin() {
      this.$emit("hideLogin");
      Object.defineProperties
    }
  },
};
</script>

<style scoped>
.login-wrapper {
  position: fixed;
  bottom: 0;
  right: 0;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  animation: loginWrapper 0.4s ease-in;
}
.login-inner {
  position: absolute;
  background-color: #fff;
  width: 350px;
  height: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: login 0.4s ease-in-out;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

@keyframes login {
  from {
    opacity: 0;
    top: -350px;
  } to {
    opacity: 1;
    top: 50%;
  }
}

@keyframes loginWrapper {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
}

.heading {
  color: #333;
  text-align: left;
  font-size: 24px;
  padding: 15px 0 40px 0;
}

.content {
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 6px 8px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 40px;
}

.form-input:focus {
  outline: 1px solid rgba(0, 0, 0, 0.8);
}

.submit {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-forget {
  font-size: 13px;
  color: blue;
}

.btn-forget:hover {
  opacity: 0.7;
  cursor: pointer;
}

.btn-login {
  border: none;
  border-radius: 3px;
  padding: 4px 12px;
  background-color: red;
  color: white;
  opacity: 0.7;
}

.btn-login:hover {
  opacity: 1;
  cursor: pointer;
}
</style>