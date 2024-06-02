const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true,
  });
  
  const body = document.getElementById("container");
  const closeBtn = document.getElementById("close-btn");
  
  closeBtn.addEventListener("click", function () {
    body.style.display = "block";
  });
  
  function togglePopup() {
    body.style.display = "none";
    document.getElementById("popup-1").classList.toggle("active");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const textDivs = document.querySelectorAll(".text");
    const mainImage = document.getElementById("main-image");
  
    textDivs.forEach((div) => {
      div.addEventListener("click", function () {
        textDivs.forEach((d) => d.classList.remove("active"));
  
        this.classList.add("active");
        const newImage = this.getAttribute("data-image");
        mainImage.src = newImage;
      });
    });
  });
  
  function openExternalLink() {
    window.open("https://www.fylehq.com/", "_blank");
  }
  
  const page2ImagesContainer = document.querySelector(".page2-images");
  
  setInterval(() => {
    const imageContainers = Array.from(
      page2ImagesContainer.querySelectorAll(".image-container")
    );
  
    const firstContainer = imageContainers.shift();
    page2ImagesContainer.appendChild(firstContainer);
  }, 3000);
  
  const carouselIconsContainer = document.querySelector(".carousel-icons");
  
  const carouselIcons = Array.from(
    carouselIconsContainer.querySelectorAll("img")
  );
  
  let currentIndex = 0;
  
  setInterval(() => {
    carouselIcons.forEach((icon, index) => {
      const newIndex = (index + 1) % carouselIcons.length;
      icon.style.order = (newIndex + currentIndex) % carouselIcons.length;
    });
  
    currentIndex = (currentIndex + 1) % carouselIcons.length;
  }, 3000);
  