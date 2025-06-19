const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;
let imgArray = Array.from(images);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex >= imgArray.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = imgArray.length - 1;
  lightboxImg.src = imgArray[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery .image");
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
