const showTab = (selector) => {
  console.log(selector)
  
  $(".tabs-menu li").removeClass("active");
  $(`.tabs-menu a[href="${selector}"`).parent("li").addClass("active");
  $(".tabs-content > section").hide();
  $(selector).show();
}

$(".tabs-menu a").on("click", (e) => {
  e.preventDefault();
  const selector = $(e.target).attr("href");
  showTab(selector);
})

showTab("#tabs-1");