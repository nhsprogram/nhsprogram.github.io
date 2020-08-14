$(() => {
  const doc = $(document);
  const navbar = $(".navbar");
  const competitionsOffset = $("#competitions").offset().top;

  // if (doc.scrollTop() >= competitionsOffset - 65) {
  //   navbar.addClass("bg-light navbar-light");
  //   navbar.removeClass("bg-translucent navbar-dark");
  // }

  // doc.on("scroll", () => {
  //   if (doc.scrollTop() >= competitionsOffset - 65) {
  //     navbar.addClass("bg-light navbar-light");
  //     navbar.removeClass("bg-translucent navbar-dark");
  //   } else {
  //     navbar.addClass("bg-translucent navbar-dark");
  //     navbar.removeClass("bg-light navbar-light");
  //   }
  // });
});
