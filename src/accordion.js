$(".accordion-title a").on("click", (e) => {
  e.preventDefault();
  const content = $(e.target).closest("section").find(".accordion-content");
  if(!content.is(":visible")){
    $(".accordion-content:visible").slideUp()
    content.slideDown();
  }
})
