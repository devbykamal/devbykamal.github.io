window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

document
  .getElementById("mobileNavOpener")
  .addEventListener("click", function () {
    document.getElementById("mobileNav").style.right = 0;
  });

document
  .getElementById("mobileNavCloser")
  .addEventListener("click", function () {
    document.getElementById("mobileNav").style.right = "-400px";
  });
