$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;
  $("html, body").animate({
    scrollTop: elementOffset
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".feedback_form");
  const modal = document.getElementById("thankYouModal");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Отмена обычной отправки

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {

      modal.style.display = "flex";

      form.reset();

      setTimeout(() => {
        modal.style.display = "none";
      }, 5000);

    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("nav--open");
  });

  // Закрытие меню при клике на ссылку (моб. UX)
  document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = modal.querySelector(".modal-close");


  document.querySelectorAll(".card__item").forEach(item => {
    item.addEventListener("click", () => {
      const key = item.getAttribute("data-modal"); // team, building, workplace
      const contentElement = document.getElementById(`modal-content-${key}`);

      if (contentElement) {
        modalBody.innerHTML = contentElement.innerHTML;
        modal.style.display = "flex";
      } else {
        modalBody.innerHTML = "<p>Content not found.</p>";
        modal.style.display = "flex";
      }
    });
  });

  // Закрытие по крестику
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрытие кликом вне контента
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
