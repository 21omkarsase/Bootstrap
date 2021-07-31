$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });

  $("#carousel-button").click(function () {
    if ($("#carousel-button").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");
    } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });
  $("#reserve").click(function () {
    $("#reservemodal").modal("show");
  });
  $("#login").click(function () {
    $("#loginModal").modal("show");
  });
  $(".close").click(function () {
    $("#reservemodal").modal("hide");
    $("#loginmodal").modal("hide");
  });
  $("#closelogin").click(function () {
    $("#reservemodal").modal("hide");
  });
});
