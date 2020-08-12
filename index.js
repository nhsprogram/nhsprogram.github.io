$(() => {
  const doc = $(document);
  const navbar = $(".navbar");
  const competitionsOffset = $("#competitions").offset().top;

  if (doc.scrollTop() >= competitionsOffset - 65) {
  }

  // doc.on("scroll", () => {
  //   if (doc.scrollTop() >= competitionsOffset - 65) {
  //   } else if (doc.scrollTop() < competitionsOffset - 65) {
  //     navbar.addClass("navbar-dark bg-transparent");
  //   }
  // });
});
