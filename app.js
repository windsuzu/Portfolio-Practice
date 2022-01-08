// use for animation setting
// =========================
// const text = document.querySelectorAll(".paths");
// for (let i = 0; i < text.length; i++) {
//   console.log(`text number ${i}: length ${text[i].getTotalLength()}`);
// }
// =========================

/**
 * Listen scroll event
 */
$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

/**
 * change navigation active when scrolling
 * https://stackoverflow.com/questions/43579454/change-navigation-active-when-scrolling
 */
function onScroll(event) {
  let scrollPos = $(document).scrollTop();
  $(".nav_text a").each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav_text a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
