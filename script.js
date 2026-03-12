// Dùng chung hàm lấy tham số URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

$(document).ready(function () {
  const productId = getQueryParam("product");  // Chỉ lấy tham số 'product'
  const product = products[productId];

  if (!product) {
    $('.product-detail').html('<h2 style="text-align:center;">Sản phẩm không tồn tại.</h2>');
    return;
  }

  // Gán dữ liệu vào HTML
  document.title = product.name;
  $('#product-img').attr('src', product.image).attr('alt', product.name);
  $('#product-name').text(product.name);
  $('#product-price').text(product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
  $('#product-description').text(product.description);

  // Bật/tắt mô tả
  $('.toggle-description').click(function () {
    $('.description-text').toggle();
  });
});

// Hàm Thêm vào giỏ hàng
function addToCart() {
  alert("Thêm vào giỏ hàng");
}
