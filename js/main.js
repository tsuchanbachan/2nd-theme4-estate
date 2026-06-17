// ハンバーガーをクリックした時につけ外し
$("#js-hamburger").click(function () {
  $("#js-hamburger").toggleClass("is-active");
  $(".header-menu").toggleClass("is-open");
});

/* リンクのクリックでもメニューを閉じる */
$(".header-menu a").click(function () {
  $("#js-hamburger").removeClass("is-active");
  $(".header-menu").removeClass("is-open");
});

/* スクロールでヘッダー背景色の変更 */
const header = document.querySelector('.header');
const about = document.querySelector('#about');

window.addEventListener('scroll', function () {

  const headerHeight = header.offsetHeight;
  const aboutTop = about.offsetTop;

  if (window.scrollY >= aboutTop - headerHeight) {
    header.classList.add('is-move');
  } else {
    header.classList.remove('is-move');
  }

});

// スライダー（swiper）
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
});

// モーダルとトップへ戻る
var goTop = $("#top-button");

// 表示/非表示をまとめる
function toggleTopButton() {
  if ($("body").hasClass("is-fixed")) {
    goTop.fadeOut(300);
    return;
  }

  // .mvが画面から完全に消えたら表示
  if ($(window).scrollTop() > $(".mv").height()) {
    goTop.fadeIn(300);
  } else {
    goTop.fadeOut(300);
  }
}

goTop.hide();

$(window).scroll(function () {
  toggleTopButton();
});

$(".modal-open").click(function (e) {
  e.preventDefault();

  $(this)
    .closest(".works-content")
    .find(".modal")
    .show();

  $("body").addClass("is-fixed");

  // モーダル中はトップボタン非表示
  toggleTopButton();
});

$(".modal-close, .modal__cancel").click(function () {
  $(this)
    .closest(".modal")
    .hide();

  $("body").removeClass("is-fixed");

  // 閉じた後、現在位置に応じて再判定
  toggleTopButton();
});

goTop.click(function () {
  $("body, html").animate({ scrollTop: 0 }, 1000);
  return false;
});

// ふわっと出現
const targets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    }
  });
});

targets.forEach((target) => {
  observer.observe(target);
});