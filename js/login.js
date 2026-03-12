document.addEventListener('DOMContentLoaded', () => {
  const authLink = document.getElementById('auth-link');

  // Hàm cập nhật nút đăng nhập/đăng xuất theo trạng thái
  function updateAuthLink() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (isLoggedIn && loggedInUser) {
      authLink.textContent = 'Đăng xuất';
      authLink.href = '#';

      // Gỡ sự kiện click cũ trước khi thêm mới để tránh bị trùng
      authLink.onclick = null;

      authLink.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        alert('Bạn đã đăng xuất thành công!');
        updateAuthLink(); // cập nhật lại nút sau khi đăng xuất
        // Nếu bạn muốn reload trang để làm mới giao diện:
        // location.reload();
      };
    } else {
      authLink.textContent = 'Đăng nhập';
      authLink.href = 'login.html';
      authLink.onclick = null; // Bỏ sự kiện onclick nếu có
    }
  }

  updateAuthLink();
});
