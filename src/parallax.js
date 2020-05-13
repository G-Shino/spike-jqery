const speed = 3;
const $window = $(window);

let slideHeight;

const showParallax = () => {
  const scrollTop = $window.scrollTop();
  
  // $(".parallax-section-1").css({
  //   "background-position": `center ${Math.round((0 - scrollTop)/speed)}px`
  // });
  // $(".parallax-section-2").css({
  //   "background-position": `center ${Math.round((slideHeight - scrollTop)/speed)}px`
  // });
  // $(".parallax-section-3").css({
  //   "background-position": `center ${Math.round((slideHeight*2 - scrollTop)/speed)}px`
  // });
  // $(".parallax-section-4").css({
  //   "background-position": `center ${Math.round((slideHeight*3 - scrollTop)/speed)}px`
  // });
  
  $(".parallax-section").each((index, element) => {
    const pos = Math.round((slideHeight* index -scrollTop)/speed);
    $(element).css({
      "background-position": `center ${pos}px`
    })
  })
}

const initParallax = () => {
  slideHeight = $window.height();
  showParallax();
}

$window.on("scroll", showParallax)

$window.on("resize", () => {
  initParallax();
})

initParallax();