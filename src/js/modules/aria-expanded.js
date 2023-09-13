export function isAriaExpanded() {
  // Получить все элементы с классом menu__item
  const menuItems2 = document.querySelectorAll(".menu__item");
  let openedItem = null;

  // Перебрать элементы и добавить обработчики событий
  menuItems2.forEach((item) => {
    let timeoutId;

    // Функция для обработки события наведения курсора на десктопе
    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      item.classList.add("active");
      item
        .querySelector(".spoller__title")
        .setAttribute("aria-expanded", "true");
    };

    // Функция для обработки события покидания курсора на десктопе
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        item.classList.remove("active");
        item
          .querySelector(".spoller__title")
          .setAttribute("aria-expanded", "false");
      }, 200);
    };

    // Функция для обработки события клика на устройстве
    const handleClick = () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item
          .querySelector(".spoller__title")
          .setAttribute("aria-expanded", "false");
        openedItem = null;
      } else {
        if (openedItem) {
          openedItem.classList.remove("active");
          openedItem
            .querySelector(".spoller__title")
            .setAttribute("aria-expanded", "false");
        }
        item.classList.add("active");
        item
          .querySelector(".spoller__title")
          .setAttribute("aria-expanded", "true");
        openedItem = item;
      }
      item.focus();
    };

    // Проверка, является ли устройство мобильным
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    // Добавление обработчиков событий в зависимости от типа устройства
    if (isMobileDevice()) {
      item.addEventListener("click", handleClick);
    } else {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
      item.addEventListener("click", handleClick);
    }
  });

  // Обработчик клика на документе
  document.addEventListener("click", (event) => {
    const target = event.target;
    const isMenuClicked = Array.from(menuItems2).some((item) =>
      item.contains(target)
    );
    if (!isMenuClicked && openedItem) {
      openedItem.classList.remove("active");
      openedItem
        .querySelector(".spoller__title")
        .setAttribute("aria-expanded", "false");
      openedItem = null;
    }
  });

  const menuTitle = document.querySelectorAll(".spoller__title");

  menuTitle.forEach((item) => {
    item.setAttribute("aria-haspopup", "true");
    item.setAttribute("aria-expanded", "false");
  });

  const mainMenu = document.querySelector('nav[aria-label="Main menu"]');
  const menuItems = mainMenu.querySelectorAll('a[aria-haspopup="true"]');

  // Обработчик события клика на ссылке верхнего уровня
  function handleClick(event) {
    event.preventDefault();
    const menuItem = event.currentTarget;
    const isExpanded =
      menuItem
        .querySelector(".spoller__title")
        .getAttribute("aria-expanded") === "true";
    menuItem
      .querySelector(".spoller__title")
      .setAttribute("aria-expanded", !isExpanded);
  }

  // Обработчик события клика вне меню
  function handleOutsideClick(event) {
    if (!mainMenu.contains(event.target)) {
      menuItems.forEach((item) => {
        item
          .querySelector(".spoller__title")
          .setAttribute("aria-expanded", "false");
      });
    }
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  document.addEventListener("click", handleOutsideClick);

  // Обработчик события изменения размеров окна
  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      menuItems2.forEach((item) => {
        if (isMobileDevice()) {
          item.removeEventListener("mouseenter", handleMouseEnter);
          item.removeEventListener("mouseleave", handleMouseLeave);
          item.removeEventListener("click", handleClick);
          item.addEventListener("click", handleClick);
        } else {
          item.removeEventListener("click", handleClick);
          item.removeEventListener("mouseenter", handleMouseEnter);
          item.removeEventListener("mouseleave", handleMouseLeave);
          item.addEventListener("mouseenter", handleMouseEnter);
          item.addEventListener("mouseleave", handleMouseLeave);
          item.addEventListener("click", handleClick);
        }
      });
    }, 200);
  });









}

