const initialSize = 60;

const padding = 100;

const animDuration = 300;

const showImage = (img) => {
  const $img = $(img);
  
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  
  const windowAspectRatio = windowWidth/windowHeight;
  const imageAspectRatio = img.width/img.height;
  
  let dispWidth;
  let dispHeight;
  if (windowAspectRatio>imageAspectRatio){
    dispHeight = windowHeight-padding;
    dispWidth = dispHeight * imageAspectRatio;
  }else{
    dispWidth = windowWidth - padding;
    dispHeight = dispWidth / imageAspectRatio;
  }
  
  $img.css({
    width: `${dispWidth}px`,
    height: `${dispHeight}px`,
    display: "none"
  })
  
  $(".popup-content").html(img);
  
  $(".popup-content").animate(
    {
      width: `${dispWidth}px`,
      height: `${dispHeight}px`,
      "margin-left": `${-dispWidth/2}px`,
      "margin-top": `${-dispHeight/2}px`
    }, animDuration,"swing", () => {
      $img.fadeIn(animDuration)
    })
}

const showPopup = (imageUrl) => {
  $(".popup-content").html("");
  $(".overlay").fadeIn(animDuration);
  
  $(".popup-content").css({
    width: `${initialSize}px`,
    height: `${initialSize}px`,
    "margin-left": `${-initialSize/2}px`,
    "margin-top": `${-initialSize/2}px`
  })
  
  const img = new Image();
  img.onload = () => {
    showImage(img);
  }
  img.src = imageUrl;
}

const closePopup = () => {
  $(".overlay").fadeOut(animDuration);
}

$(".popup").on("click", (e) => {
  e.preventDefault();
  const imageUrl = $(e.currentTarget).attr("href");
  showPopup(imageUrl)
})

$(".overlay").on("click", (e) => {
  e.preventDefault();
  closePopup();
})
