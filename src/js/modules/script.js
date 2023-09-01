export function isScript() {
  $(document).ready(function () {
    $(".slider-theater").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      // variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    $(".slider-updates").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 478,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });


  $(document).ready(function () {
    $(".slider-reviews").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
}


var accordionTitles = document.querySelectorAll(".accordion__title");

accordionTitles.forEach(function (title) {
  title.addEventListener("click", function () {
    var target = this.getAttribute("data-accordion-target");
    var content = document.querySelector(target);
    var expanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !expanded);
    content.setAttribute("aria-hidden", expanded);

    if (!expanded) {
      this.focus();
    }
  });

  title.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.click();
    }
  });
});







