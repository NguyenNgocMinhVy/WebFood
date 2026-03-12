document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header class="main-header">
            <a href="index.html">
                <img src="picture/tải xuống.png" alt="Logo Ăn Vặt Minh Phát" class="logo">
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Trang chủ</a></li>
                    <li><a href="cart.html">Giỏ Hàng</a></li>
                    <li><a href="contact.html">Liên hệ</a></li>
                    <li><a href="login.html">Đăng xuất</a></li>
                </ul>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <p>📞 Hotline: 0855 77 3933 | 📍 Giao hàng nội thành - TPHCM</p>
            <p>Hãy đặt hàng ngay khi các bé có chiếc bụng đói nhé!</p>
        </footer>
    `;

    // Chèn header và footer vào các phần tử tương ứng trong trang
    const headerContainer = document.getElementById("main-header");
    const footerContainer = document.getElementById("main-footer");

    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
