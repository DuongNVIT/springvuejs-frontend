<template>
  <div class="buy-wrapper">
    <div class="grid wide">
        <div class="buy-inner">
            <div class="buy-heading">Customer information</div>
            <div class="buy-content">
                <div class="form-group">
                    <label for="fullname" class="input-label">Full name</label>
                    <input id="fullname" type="text" class="form-input" placeholder="Full name">
                </div>
                <div class="form-group">
                    <label for="phone" class="input-label">Phone number</label>
                    <input id="phone" type="text" class="form-input" placeholder="Phone number">
                </div>
                <div class="form-group">
                    <label for="address" class="input-label">Address</label>
                    <input id="address" type="text" class="form-input" placeholder="Address">
                </div>
                <div class="btn-buy-wrapper">
                    <button class="btn-buy">Buy</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Buy"
}
</script>

<style scoped>
.buy-inner {
    background-color: #fff;
    border-radius: 3px;
    padding: 16px;
}

.buy-heading {
    color: red;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin: 0px 0 30px;
}

.buy-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -10px;
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

.btn-buy-wrapper {
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
    color: white
}

.btn-buy:hover {
    opacity: 0.7;
    cursor: pointer;
}


</style>