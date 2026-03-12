document.addEventListener("DOMContentLoaded", function() {
    // Debug check auth-link
    const authLink = document.getElementById("auth-link");
    if (!authLink) {
        console.error("Không tìm thấy phần tử #auth-link");
        return;
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log("isLoggedIn =", isLoggedIn);

    if (isLoggedIn) {
        authLink.textContent = "Đăng xuất";
        authLink.href = "#";

        authLink.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
            localStorage.removeItem("loggedInUser");

            alert("Bạn đã đăng xuất!");
            window.location.reload();
        };
    } else {
        authLink.textContent = "Đăng nhập";
        authLink.href = "login.html";
        authLink.onclick = null;
    }

    // Hàm hiển thị tab
    function showTab(event, tabName) {
        event.preventDefault();
        const tabs = document.querySelectorAll('.tab-content');
        const buttons = document.querySelectorAll('.tab-button');
        tabs.forEach(tab => tab.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
        event.currentTarget.classList.add('active'); // dùng currentTarget cho chính xác

        document.getElementById('searchInput').value = '';
        filterProducts();
    }

    // Hàm lọc sản phẩm theo tìm kiếm
    function filterProducts() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toLowerCase();
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab) {
            console.warn("Không tìm thấy tab active");
            return;
        }
        const products = activeTab.querySelectorAll('.product');
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            product.style.display = productName.includes(filter) ? '' : 'none';
        });
    }

    // Gắn sự kiện tìm kiếm
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    } else {
        console.error("Không tìm thấy phần tử #searchInput");
    }

    // Gắn sự kiện click cho các tab button
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Log debug xem text nút bấm là gì
            console.log("Click tab button:", this.textContent.trim());

            if (this.textContent.includes('Thức ăn')) {
                showTab(event, 'food');
            } else if (this.textContent.includes('Nước uống')) {
                showTab(event, 'drink');
            } else {
                console.warn("Không xác định được tabName cho button:", this.textContent);
            }
        });
    });
});
// Typewriter effect
const textsNew = [
  "Sắp ra mắt món mới...",
  "Vị ngon bùng nổ!",
  "Chỉ còn ít ngày nữa thôi!"
];
let idx = 0, char = 0;
let isDeletingNew = false;

function typeWriterNew() {
  const el = document.getElementById("typewriter-new");
  const txt = textsNew[idx];

  if (!el) return;

  if (isDeletingNew) {
    char--;
  } else {
    char++;
  }

  el.innerHTML = txt.substring(0, char) + "<span class='cursor'>|</span>";

  if (!isDeletingNew && char === txt.length) {
    isDeletingNew = true;
    setTimeout(typeWriterNew, 1500);
  } else if (isDeletingNew && char === 0) {
    isDeletingNew = false;
    idx = (idx + 1) % textsNew.length;
    setTimeout(typeWriterNew, 500);
  } else {
    setTimeout(typeWriterNew, isDeletingNew ? 50 : 100);
  }
}
typeWriterNew();

// Countdown
const launchDate = new Date("2025-10-01T09:00:00").getTime();

function updateCountdownNew() {
  const now = new Date().getTime();
  const distance = launchDate - now;
  const el = document.getElementById("countdown-new");
  if (!el) return;

  if (distance < 0) {
    el.innerHTML = "🎉 Món mới đã ra mắt!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  el.innerHTML = `
    <span>${days} ngày</span>
    <span>${hours} giờ</span>
    <span>${minutes} phút</span>
    <span>${seconds} giây</span>
  `;
}
updateCountdownNew();
setInterval(updateCountdownNew, 1000);
