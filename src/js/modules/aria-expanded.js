export function isAriaExpanded() {
  // Получить все элементы с классом menu__item
  const menuItems = document.querySelectorAll(".menu__item");
  let openedItem = null;

  // Перебрать элементы и добавить обработчики событий
  menuItems.forEach((item) => {
    // Функция для обработки события клика
    const handleClick = () => {
      if (openedItem === item) {
        // Если меню уже открыто, то закрываем его
        item.classList.remove("active");
        openedItem = null;
      } else {
        if (openedItem) {
          // Закрываем предыдущее открытое меню
          openedItem.classList.remove("active");
        }
        // Открываем текущее меню
        item.classList.add("active");
        openedItem = item;
      }
    };

    // Функция для обработки события наведения курсора
    const handleMouseEnter = () => {
      // Открываем меню при наведении
      item.classList.add("active");
    };

    // Функция для обработки события покидания курсора
    const handleMouseLeave = () => {
      // Закрываем меню при покидании
      if (openedItem !== item) {
        item.classList.remove("active");
      }
    };

    // Добавление обработчиков событий
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
    item.addEventListener("click", handleClick);
  });

  // Обработчик события клика на документе
  document.addEventListener("click", (event) => {
    const target = event.target;
    const isMenuClicked = Array.from(menuItems).some((item) =>
      item.contains(target)
    );
    if (!isMenuClicked && openedItem) {
      openedItem.classList.remove("active");
      openedItem = null;
    }
  });
}

//========================================

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".header__phone").classList.add("loaded");
    document.querySelector(".header__service-btn").classList.add("loaded");
  }, 300);
});
