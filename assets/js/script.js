$(document).ready(function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  $(".titulo-rojo").on("dblclick", function () {
    $(this).css("color", "red");
  });

  $("#titulo-1").click(function () {
    $("#img-1").toggle();
  });

  $("#titulo-2").click(function () {
    $("#img-2").toggle();
  });

  $("#titulo-3").click(function () {
    $("#img-3").toggle();
  });
});
