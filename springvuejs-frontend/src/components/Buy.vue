<template>
  <div class="wrapper">
    <div class="grid wide">
      <div class="inner">
        <div class="heading">Customer information</div>
        <div class="row">
          <div class="col l-4">
            <div class="user-avatar">
              <img
                src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
                alt=""
                class="avatar"
              />
              <label for="upload-avatar" class="up-avatar"><i class="fa-solid fa-camera"></i></label>
              <input type="file" id="upload-avatar" style="display: none;"/>
            </div>
          </div>
          <div class="col l-8">
            <div class="content">
              <div class="form-group">
                <label for="fullname" class="input-label">Full name</label>
                <input
                  id="fullname"
                  type="text"
                  class="form-input"
                  placeholder="Full name"
                />
              </div>
              <div class="form-group">
                <label for="phone" class="input-label">Phone number</label>
                <input
                  id="phone"
                  type="text"
                  class="form-input"
                  placeholder="Phone number"
                />
              </div>
              <div class="form-group">
                <label for="address" class="input-label">Address</label>
                <input
                  id="address"
                  type="text"
                  class="form-input"
                  placeholder="Address"
                />
              </div>
              <div class="btn-wrapper">
                <button class="btn-buy">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
};
</script>

<style scoped>
.wrapper {
  margin-top: 100px;
}
.inner {
  background-color: #fff;
  border-radius: 3px;
  padding: 40px;
}

.heading {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin: 0px 0 30px;
}

.user-avatar {
    position: relative;
}

.user-avatar img {
    width: 100%;
    border-radius: 3px;
}

.up-avatar {
}

.up-avatar i {
    font-size: 25px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 10px);
}

.up-avatar i:hover {
    cursor: pointer;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.input-label {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

.form-input {
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 4px;
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.form-input:focus {
  outline: 1px solid rgba(0, 0, 0, 0.8);
}

.btn-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.btn-buy {
  font-size: 14px;
  border: none;
  padding: 6px 24px;
  border-radius: 3px;
  background-color: red;
  color: white;
}

.btn-buy:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>