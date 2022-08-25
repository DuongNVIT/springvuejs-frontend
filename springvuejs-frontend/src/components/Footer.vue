<template>
    <footer class="footer-wrapper">
        <div class="footer-content">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-3">
                        <div class="footer-item">
                            <div class="heading">Giới thiệu</div>
                            <ul class="content">
                                <div class="content-item">
                                    Công ty thương mại điện tử
                                </div>
                                <div class="content-item">
                                    Mua bán các sản phẩm
                                </div>
                                <div class="content-item">
                                    Nhận code web
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="col l-3">
                        <div class="footer-item">
                            <div class="heading">Địa chỉ</div>
                            <ul class="content">
                                <div class="content-item">
                                    <i class="fa-solid fa-location-dot"></i
                                    >Vinh, Nghệ An
                                </div>
                                <div class="content-item">
                                    <i class="fa-solid fa-school"></i>Đại học Bách Khoa Hà Nội
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="col l-3">
                        <div class="footer-item">
                            <div class="heading">Liên lạc</div>
                            <ul class="content">
                                <div class="content-item">
                                    <i class="fa-solid fa-phone"></i>0522081512
                                </div>
                            </ul>
                            <ul class="content">
                                <div class="content-item">
                                    <i class="fa-solid fa-envelope"></i>nguyenduong985911@gmail.com
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="col l-3">
                        <div class="footer-item">
                            <div class="heading">Follow</div>
                            <ul class="content">
                                <div class="content-item">
                                    <i class="fa-brands fa-facebook"></i>nguyenduong985911
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <i class="fa-solid fa-copyright"></i>Công ty ITShop
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer-wrapper {
    /* position: fixed;
    bottom: 0;
    left: 0;
    right: 0; */
    /* position: sticky;
    top: 100%; */
    margin-top:auto; 
}

.footer-content {
    background-color: rgba(255, 0, 0, 0.7);
}

.footer-item {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 20px;
}

.heading {
    font-size: 18px;
    text-align: left;
    margin-bottom: 16px;
}

.content {
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 14px
}

.content-item {
    margin-bottom: 8px;
}

.content-item i{
    width: 20px;
    margin-right: 8px;
    text-align: center;
}

.footer-bottom {
    background-color: red;
    color: #fff;
    font-size: 16px;
    padding: 12px 0;
}

.footer-bottom i {
    margin-right: 8px;
}
</style>