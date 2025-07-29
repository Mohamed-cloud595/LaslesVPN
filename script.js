const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".arrow.prev");
const nextBtn = document.querySelector(".arrow.next");

let currentIndex = 0;

function updateSlider(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    dots[i].classList.remove("active");
  });

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateSlider(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
});

updateSlider(currentIndex);
