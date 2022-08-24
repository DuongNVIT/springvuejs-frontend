<template>
    <footer class="footer-wrapper">
        <div class="footer-content">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-3">
                        <div class="footer-item">
                            <div class="heading">Giới thiệu</div>
                            <ul class="content">
                                Công ty thương mại điện tử
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
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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

.content-item i{
    margin-right: 8px;
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