
  const images = [
    "picture/hotpot1.png",
    "picture/hotpot2.png",
    "picture/hotpot3.png"
  ];

  let currentIndex = 0;

  const slideImage = document.getElementById("slideImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function showImage(index) {
    if (index < 0) {
      currentIndex = images.length - 1;
    } else if (index >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slideImage.src = images[currentIndex];
  }

  prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Khởi đầu
  showImage(currentIndex);

