export function isShowMore() {


  const showMoreBrend = document.querySelector(".show-more-brends");
  const BrandItems = document.querySelectorAll(
    ".menu__sub-item-brand"
  );

  if (showMoreBrend && BrandItems.length > 0) {
    const productsLengthBra = BrandItems.length;
    let itemsBra = 2;

    showMoreBrend.addEventListener("click", () => {
      showMoreBrend.innerHTML = "loading"; // Изменение текста кнопки

      // Задержка на 1 секунду (или любую другую необходимую задержку)
      setTimeout(() => {
        itemsBra += 2;
        const arrayBra = Array.from(
          document.querySelector(".menu__sub-list-brand").children
        );
        const visItemsBra = arrayBra.slice(0, itemsBra);

        visItemsBra.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });

        if (visItemsBra.length > 0) {
          visItemsBra[visItemsBra.length - 1].focus(); // Установка фокуса на последний видимый элемент
        }

        if (visItemsBra.length === productsLengthBra) {
          showMoreBrend.style.display = "none";
        }

        showMoreBrend.innerHTML = "More brands"; // Восстановление исходной метки кнопки после загрузки
      }, 1000); // Задержка в 1 секунду (1000 миллисекунд)
    });
  }

  //======================================================
}
