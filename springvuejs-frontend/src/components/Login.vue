<template>
  <div class="login-wrapper">
    <div class="login-inner">
      <div class="login-heading">Sign in</div>
      <div class="login-content">
        <input type="text" class="form-input" placeholder="Username" />
        <input type="text" class="form-input" placeholder="Password" />
        <div class="submit">
          <div class="btn-forget">Forget password</div>
          <button class="btn-login">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>

.login-wrapper {
  margin-left: 300px;
}
.login-inner {
  background-color: #fff;
  width: 350px;
  padding: 15px 20px;
  border-radius: 3px;
}

.login-heading {
  color: #333;
  text-align: left;
  font-size: 20px;
  padding: 15px 0 25px 0;
}

.login-content {
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 6px 8px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 20px;
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
  font-size: 10px;
  color: blue
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
  cursor: pointer
}

</style>