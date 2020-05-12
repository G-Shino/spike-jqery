const updateButton = () => {
  if ($(window).scrollTop() >= 300){
    $(".back-to-top").slideDown("slow");
  }else{
    $(".back-to-top").slideUp("slow");
  }
}

$(window).on("scroll", updateButton);

$(".back-to-top").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 600)
})


updateButton();