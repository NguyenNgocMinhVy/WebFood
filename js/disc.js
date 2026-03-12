  document.getElementById('preorderForm').addEventListener('submit', function(e) {
    const form = this;
    const name = form.hoten.value.trim();
    const phone = form.sdt.value.trim();
    const address = form.noidung.value.trim();

    if (!name || !phone || !address) {
      e.preventDefault();
      alert('Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ giao hàng.');
      return false;
    }
    
    // Phone number validation example
    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(phone)) {
      e.preventDefault();
      alert('Số điện thoại không hợp lệ. Vui lòng nhập 10 đến 12 chữ số.');
      return false;
    }

    alert(`Cảm ơn ${name} đã đặt trước món mới! Chúng tôi sẽ liên hệ lại qua số ${phone}.`);
    // Form sẽ gửi tự động lên FormSubmit.co nếu mọi thứ hợp lệ
  });