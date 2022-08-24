<template>
    <div class="signup-wrapper" @click.self="hideSignup">
        <div class="su-w">
            <div class="signup-inner" v-if="!loading && !signupSuccess">
                <div class="signup-heading">Đăng ký</div>
                <div class="signup-content">
                    <input
                        type="text"
                        class="form-input"
                        placeholder="Email"
                        v-model="user.email"
                    />
                    <input
                        type="text"
                        class="form-input"
                        placeholder="Tên đăng nhập"
                        v-model="user.username"
                    />
                    <input
                        type="text"
                        class="form-input"
                        placeholder="Họ và tên"
                        v-model="user.fullname"
                    />
                    <input
                        type="password"
                        class="form-input"
                        placeholder="Mật khẩu"
                        v-model="user.password"
                    />
                    
                    <p v-if="message" class="signup-message">{{ message }}</p>
                    <div class="submit">
                        <button class="btn-signup" @click="handleSignup">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
            <img
                v-if="loading"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                alt=""
                class="loading signup-inner"
            />
            <div
                class="signup-inner"
                style="min-width: 600px"
                v-if="signupSuccess"
            >
                <h1 class="success">Đăng ký thành công</h1>
                <div class="email-pass">
                    Kiểm tra email <span>{{ user.email }}</span> để lấy mật khẩu
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import authService from "../service/authService";
export default {
    name: "Signup",
    data() {
        return {
            user: {
                password: "",
                email: "",
                username: "",
                fullname: "",
                status: 0
            },
            message: "",
            loading: false,
            signupSuccess: false,
        };
    },
    methods: {
        hideSignup() {
            this.$emit("hideSignup");
        },
        async handleSignup() {
            try {
                this.$data.loading = true;
                console.log(this.$data.user)
                const res = await authService.signup(this.$data.user);
                this.$data.loading = false;
                this.$data.signupSuccess = true;
                console.log(res);
                // this.hideSignup();
            } catch (e) {
                this.$data.loading = false;
                console.log(e.message);
                console.log(e.response.data);
                this.$data.message = e.response.data.message;
            }
        },
    },
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

.su-w {
  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: signup 0.4s ease-in-out;
}

.signup-inner {
    background-color: #fff;
    width: 350px;
    padding: 15px 20px;
    border-radius: 3px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

.signup-inner .success {
    font-size: 30px;
    color: green;
}

.signup-inner .email-pass {
    font-size: 20px;
}

.signup-inner .email-pass span {
    text-decoration: underline;
    font-weight: bold;
}

@keyframes signup {
    from {
        opacity: 0;
        top: -350px;
    }
    to {
        opacity: 1;
        top: 50%;
    }
}

@keyframes signupWrapper {
    from {
        opacity: 0;
    }
    to {
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

.signup-message {
    color: red;
    margin: 0;
    text-align: left;
    margin-top: -20px;
    margin-bottom: 15px;
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