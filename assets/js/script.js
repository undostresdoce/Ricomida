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

  $(document).ready(function () {
    // Cuando se hace clic en cualquier elemento con la clase .titulo-rojo
    $(".titulo-rojo").on("click", function () {
      // Cambiar el color del texto a rojo
      $(this).css("color", "red");
    });
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
