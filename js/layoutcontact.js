document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="site-header">
      <a href="index.html" class="logo">
        <img src="picture/tải xuống.png" alt="Logo Minh Phát" />
      </a>
      <nav class="navbar">
        <ul>
          <li><a href="index.html">Trang chủ</a></li>
          <li><a href="cart.html">Giỏ Hàng</a></li>
          <li><a href="contact.html" class="active">Liên hệ</a></li>
          <li><a href="login.html">Đăng xuất</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer class="main-footer">
      <p>📞 Hotline: 0855 77 3933 | 📍 Giao hàng nội thành - TPHCM</p>
      <p>Hãy đặt hàng ngay khi các bé có chiếc bụng đói nhé!</p>
    </footer>
  `;

  document.getElementById("main-header").innerHTML = headerHTML;
  document.getElementById("main-footer").innerHTML = footerHTML;
});
