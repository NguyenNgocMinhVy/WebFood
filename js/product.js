const products = {
  // Đồ ăn
  burger: {
    name: "Burger Bò",
    price: 45000,
    image:  "picture/burger.jpg",
    description: "Burger bò thơm ngon, được kẹp với rau tươi và nước sốt đặc biệt, cực kỳ hấp dẫn cho bữa trưa hoặc xế chiều."
  },
  chicken: {
    name: "Gà Rán Giòn",
    price: 38000,
    image: "picture/chicken.png",
    description: "Gà rán với lớp vỏ giòn rụm, thịt mềm mọng nước. Ăn kèm sốt cay hoặc tương cà đều hợp."
  },
  khoaitay: {
    name: "Khoai Tây Chiên",
    price: 22000,
    image: "picture/khoaitay.png",
    description: "Khoai tây chiên vàng giòn, thơm béo, cực kỳ hấp dẫn khi dùng nóng với tương ớt/mayonnaise."
  },
  xucxich: {
    name: "Xúc Xích Chiên",
    price: 12000,
    image: "picture/xx.png",
    description: "Xúc xích được chiên nóng giòn, ăn vặt ngon miệng cho mọi lứa tuổi."
  },
  nugget: {
    name: "Gà Nugget",
    price: 35000,
    image: "picture/nugget.png",
    description: "Gà Nugget chiên giòn, vừa miệng, thích hợp cho bữa ăn nhanh hoặc bữa phụ."
  },
  tokbokki: {
    name: "Bánh Gạo Cay Tokbokki",
    price: 40000,
    image: "picture/banhgao.png",
    description: "Tokbokki dẻo mềm, thấm đều sốt cay Hàn Quốc. Món ăn không thể thiếu với các tín đồ đồ cay!"
  },
  nemchua: {
    name: "Nem Chua Rán",
    price: 25000,
    image: "picture/nemchua.png",
    description: "Nem chua rán giòn rụm, chua nhẹ, cực ngon khi ăn kèm tương ớt và dưa chuột."
  },
  cavien: {
    name: "Cá Viên Chiên",
    price: 30000,
    image: "picture/cavien.png",
    description: "Cá viên chiên giòn, thơm ngon, thích hợp cho buổi xế chiều hoặc các buổi tụ tập bạn bè."
  },

  // Đồ uống
  trasua: {
    name: "Trà Sữa Trân Châu",
    price: 30000,
    image: "picture/trasua.png",
    description: "Trà sữa truyền thống kết hợp cùng trân châu đen dai ngon. Đồ uống quốc dân cho mọi thế hệ!"
  },
  tradao: {
    name: "Trà Đào",
    price: 25000,
    image: "picture/tradao.png",
    description: "Trà đào thơm lừng, mát lạnh, kèm miếng đào giòn ngon. Rất phù hợp cho mùa hè."
  },
  suachua: {
    name: "Sữa Chua Dẻo",
    price: 18000,
    image: "picture/suachua.png",
    description: "Sữa chua dẻo mát lạnh, vị chua nhẹ thanh mát, có thể ăn cùng trái cây hoặc siro."
  },
  milo: {
    name: "Milo Dầm",
    price: 20000,
    image: "picture/milo.png",
    description: "Milo dầm đá, phủ Milo bột, cực thích hợp cho các tín đồ thích vị đậm đà của socola."
  },
  daxaydao: {
    name: "Đá Xay Đào",
    price: 25000,
    image: "picture/daxaydao.png",
    description: "Đá xay mát lạnh vị đào, vừa giải khát vừa mang lại cảm giác tươi mới."
  },
  dabao: {
    name: "Đá Bào",
    price: 10000,
    image: "picture/dabao.png",
    description: "Đá bào ngọt mát, dùng cùng siro trái cây tạo nên món tráng miệng hấp dẫn cho mùa hè."
  },
  matcha: {
    name: "Matcha Latte (Best Seller)",
    price: 35000,
    image: "picture/matcha.png",
    description: "Matcha latte béo ngậy, thơm mùi trà xanh Nhật Bản. Thức uống không thể thiếu cho những ai yêu thích matcha."
  },
  nuocngot: {
    name: "Các Loại Nước Ngọt",
    price: 12000,
    image: "picture/nuocngot.png",
    description: "Đủ loại nước ngọt có ga: Coca, Pepsi, 7Up, Sting... giúp bữa ăn thêm tròn vị.",
    options: ["Coca", "Pepsi", "Sting", "Mirinda","7 up","Xá xị","Fanta"]
  }
};
