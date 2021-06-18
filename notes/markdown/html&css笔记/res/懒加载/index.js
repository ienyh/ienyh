const images = document.querySelectorAll("img");

// window.addEventListener("scroll", e => {
//   // 先判断每张图片的位置是否在可视区域
//   images.forEach(image => {
//     const imageTop = image.getBoundingClientRect().top;
//     if (imageTop < window.innerHeight) {
//       const data_src = image.getAttribute("data-src");
//       image.setAttribute("src", data_src);
//     }
//     console.log("scroll");
//   });
// });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const data_src = image.getAttribute("data-src");
      image.setAttribute("src", data_src);
      // 图片被加载后取消观察
      observer.unobserve(image);
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});
