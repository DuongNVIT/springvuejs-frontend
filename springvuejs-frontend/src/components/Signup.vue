<template>
  <div class="signup-wrapper" @click.self="hideSignup">
    <div class="signup-inner">
      <div class="signup-heading">Sign up</div>
      <div class="signup-content">
        <input type="text" class="form-input" placeholder="Username" />
        <input type="text" class="form-input" placeholder="Password" />
        <input type="text" class="form-input" placeholder="Confirm password" />
        <div class="submit">
          <button class="btn-signup">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  methods: {
    hideSignup() {
      this.$emit("hideSignup");
    }
  }
};
</script>

<style scoped>
.signup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  animation: signupWrapper 0.4s ease-in;
}
.signup-inner {
  background-color: #fff;
  width: 350px;
  padding: 15px 20px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: signup 0.4s ease-in-out;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

@keyframes signup {
  from {
    opacity: 0;
    top: -350px;
  } to {
    opacity: 1;
    top: 50%;
  }
}

@keyframes signupWrapper {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
}

.signup-heading {
  color: #333;
  text-align: left;
  font-size: 24px;
  padding: 15px 0 40px 0;
}

.signup-content {
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
  justify-content: end;
}

.btn-forget {
  font-size: 10px;
  color: blue;
}

.btn-forget:hover {
  opacity: 0.7;
  cursor: pointer;
}

.btn-signup {
  border: none;
  border-radius: 3px;
  padding: 4px 12px;
  background-color: red;
  color: white;
  opacity: 0.7;
}

.btn-signup:hover {
  opacity: 1;
  cursor: pointer;
}
</style>