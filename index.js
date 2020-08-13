$(() => {
  const doc = $(document);
  const navbar = $(".navbar");
  const competitionsOffset = $("#competitions").offset().top;

  if (doc.scrollTop() >= competitionsOffset) {
    navbar.addClass("bg-dark shadow");
    navbar.removeClass("bg-translucent");
  }

  doc.on("scroll", () => {
    if (doc.scrollTop() >= competitionsOffset) {
      navbar.addClass("bg-dark");
      navbar.removeClass("bg-translucent");
    } else {
      navbar.addClass("bg-translucent");
      navbar.removeClass("bg-dark");
    }
  });
});
