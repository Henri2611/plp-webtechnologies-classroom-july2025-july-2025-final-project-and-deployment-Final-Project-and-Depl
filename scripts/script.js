// Hamburger 
const hamburger = document.getElementById("hamburger");
const overlayMenu = document.getElementById("overlayMenu");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  overlayMenu.classList.toggle("show");
  hamburger.classList.toggle("active");

  
});

// Close menu when a link is clicked
document.querySelectorAll(".overlay-menu a").forEach(link => {
  link.addEventListener("click", () => {
    overlayMenu.classList.remove("show"); // hide menu
  });
});

//LightBox

function openLightbox(img, link) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const seeMoreBtn = document.getElementById("lightbox-link");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  caption.innerHTML = img.alt;
  seeMoreBtn.href = link; // external site
}

function closeLightbox(event) {
  if (event.target.id === "lightbox" || event.target.className === "close") {
    document.getElementById("lightbox").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      nameError.style.visibility = "visible";
      name.classList.add("error-border");
      isValid = false;
    } else {
      nameError.style.visibility = "hidden";
      name.classList.remove("error-border");
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.visibility = "visible";
      email.classList.add("error-border");
      isValid = false;
    } else {
      emailError.style.visibility = "hidden";
      email.classList.remove("error-border");
    }

    // Message validation
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      messageError.style.visibility = "visible";
      message.classList.add("error-border");
      isValid = false;
    } else {
      messageError.style.visibility = "hidden";
      message.classList.remove("error-border");
    }

    // If valid, show success
    if (isValid) {
      alert("✅ Your message has been sent successfully!");
      form.reset();
    }
  });
});