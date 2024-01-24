$(document).ready(function () {
    $(".next").on("click", function () {
      let currentImg = $(".active");
      let nextImg = currentImg.next();
      let indicators = $(".indicator");
  
      count = $(this).data("count") || 0;
      $(this).data("count", ++count);
      console.log(count);
  
      if (count === 4) {
        location.reload();
      }
  
      if (nextImg.length) {
        currentImg.removeClass("active").css("z-index", -10);
        nextImg.addClass("active").css("z-index", 10);
      }
  
      indicators.css({
        opacity: "1",
        transform: "rotate(0deg)",
      });
  
      let activeIndex = (count - 0) % indicators.length;
      indicators.eq(activeIndex).css({
        opacity: "0.5",
        transform: "rotate(120deg)",
      });
    });
  });