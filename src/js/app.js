import * as flsMob from "./modules/mobile.js";
flsMob.isMob();

// import * as flsSlick from "./modules/slick.js";
// flsSlick.isSlick();

// import * as flsScript from "./modules/script.js";
// flsScript.isScript();

import * as flsBurger from "./modules/burger.js";
flsBurger.isBurger();

import * as flsHeaderScroll from "./modules/header_scroll.js";
flsHeaderScroll.isHeaderScroll();

import * as flsWebp from "./modules/webp.js";
flsWebp.isWebp();

import * as flsdynamicAdapt from "./modules/dynamic_adapt.js";
flsdynamicAdapt.isdynamicAdapt();

// import * as flsAnchor from "./modules/anchor.js";
// flsAnchor.isAnchor();

// import * as flsSpoller from './modules/spoller.js'
// flsSpoller.isSpoller()

// import * as flsSpollers from "./modules/spollers.js";
// flsSpollers.isSpollers();

import * as flsAriaExpanded from './modules/aria-expanded.js'
flsAriaExpanded.isAriaExpanded()

// import * as flsSearch from './modules/search.js'
// flsSearch.isSearch()

// import * as flsRating from "./modules/rating.js";
// flsRating.isRating();

import * as flsPopup from "./modules/popup.js";
flsPopup.isPopup();

// import * as flsSelect from "./modules/select.js";
// flsSelect.isSelect();

// import * as flsQuantity from "./modules/quantity.js";
// flsQuantity.isQuantity();

// import * as flsMyTabs from "./modules/mytabs.js";
// flsMyTabs.isMyTabs();

// import * as flsTabs from "./modules/tabs.js";
// flsTabs.isTabs();

// import tippy from 'tippy.js';
// tippy('[data-tippy-content]');

// import * as flsNumb from "./modules/wNumb.js";
// flsNumb.isNumb();

// import * as flsVideoButton from "./modules/video_button.js";
// flsVideoButton.isVideoButton();

// import * as flsVideoPlayer from "./modules/video_player.js";
// flsVideoPlayer.isVideoPlayer();

// import * as flsHidden from "./modules/hidden.js";
// flsHidden.isHidden();

// import * as flsValidation from './modules/validation.js'
// flsValidation.isValidation()

// import * as flsParallaxMouse from './modules/parallax-mouse.js'
// flsParallaxMouse.isParallaxMouse()

// import * as flsShowMore from './modules/show_more.js'
// flsShowMore.isShowMore()

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
  Thumbs,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax, Thumbs]);

if (document.querySelector(".reviews")) {
  new Swiper(".reviews__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    watchOverflow: true,
    speed: 800,
    loop: true,
    // effect: "fade",
    // parallax: true,
    // loopAdditionalSlides: 5,
    // preloadImages: false,
    pagination: {
      el: ".reviews-pagination",
      // type: 'fraction', // Это для отображения счетчика в формате "текущий слайд / общее количество слайдов"
      type: "custom", // Используем пользовательскую функцию форматирования
      renderCustom: function (swiper, current, total) {
        return current + " of " + total; // Форматируем счетчик как "текущий слайд of общее количество слайдов"
      },
      // el: '.control-slide-top__dotts',
      // clickable: true
      // renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: ".reviews__arrow_right",
      prevEl: ".reviews__arrow_left",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 1.8,
      },
      550: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".brands")) {
  new Swiper(".brands__slider", {
    slidesPerView: "auto",
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    on: {
      init: function () {
        this.slides.css("transition-duration", "0s");
      },
    },
  });

}

/*
// Плавная прокрутка

   new Swiper('.brands__slider', {
    slidesPerView: 'auto',
    spaceBetween: 70,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    on: {
      init: function () {
        this.slides.css('transition-duration', '0s');
      },
    },
  });
// для SCSS
  &__swiper {
        transition-timing-function: linear;
    }

      &__slide {
        width: auto;
    }

*/

// import * as flsRange from "./modules/range.js";
// flsRange.isRange();

// import AirDatepicker from 'air-datepicker';
// // new AirDatepicker('#date');
// new AirDatepicker('#date', {
//     timepicker: true,
//     // timeFormat: 'hh:mm aa'
// });
