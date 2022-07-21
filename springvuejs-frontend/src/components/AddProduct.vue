<template>
  <!-- <div class="wrapper" @click="closeAddProduct(false)"> -->
  <div class="wrapper" @click.self="closeAddProduct(false)">
    {{close}}
    <!-- <div class="inner" @click.stop> -->
    <div class="inner">
      <h1 class="heading">Thêm mới sản phẩm</h1>
      <div class="grid">
        <div class="row">
          <div class="col l-3">
            <div class="avatar">
              <label for="upload" class="upload-avatar"
                ><i class="fa-solid fa-camera"></i
              ></label>
              <input type="file" id="upload" style="display: none" />
              <img
                src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
                alt=""
                class="avatar"
              />
            </div>
          </div>
          <div class="col l-9">
            <div class="form-group">
              <label for="" class="form-label">Tên sản phẩm</label>
              <input
                type="text"
                class="form-input"
                placeholder="Nhập tên sản phẩm"
              />
            </div>
            <div class="form-group">
              <label for="" class="form-label">Giá cũ</label>
              <input type="text" class="form-input" placeholder="Nhập giá cũ" />
            </div>
            <div class="form-group">
              <label for="" class="form-label">Giá mới</label>
              <input
                type="text"
                class="form-input"
                placeholder="Nhập giá mới"
              />
            </div>
            <div class="form-group">
              <label for="" class="form-label">Danh mục sản phẩm</label>
              <select name="" id="" class="form-select">
                <option value="tivi">Ti vi</option>
                <option value="tulanh">Tủ lạnh</option>
                <option value="giaydep">Giày dép</option>
                <option value="quanao">Quần áo</option>
              </select>
            </div>
            <div class="btn-wrapper">
                <button class="btn-add">Thêm sản phẩm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  methods: {
    closeAddProduct(close) {
        this.$emit('closePopup', close);
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: appear 0.2s ease-in;
}

@keyframes appear {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

.inner {
  padding: 30px;
  background-color: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.heading {
    font-size: 20px;
    text-align: left;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 0 8px;
    margin-bottom: 20px;
}

.avatar {
    position: relative;
    height: 100%;
}

.avatar img {
    width: 100%;
}

.avatar i {
    position: absolute;
    bottom: 10px;
    font-size: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.avatar i:hover {
    cursor: pointer;
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 16px;
}

.form-label {
    margin-bottom: 4px;
    font-size: 15px;
}

.form-input,
.form-select {
    padding: 4px 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.form-input:focus,
.form-select {
    outline: 1px solid rgba(0, 0, 0, 0.7);
}

.btn-wrapper {
    display: flex;
    justify-content: end;
}

.btn-add {
    border: none;
    padding: 6px 8px;
    background-color: red;
    color: white;
    border-radius: 3px;
}

.btn-add:hover {
    opacity: 0.7;
    cursor: pointer;
}

</style>