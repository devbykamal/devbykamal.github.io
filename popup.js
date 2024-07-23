const POPUP = {
  open: function (htmlText) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupContent").innerHTML = htmlText;
  },
  close: function () {
    document.getElementById("popup").style.display = "none";
  },
};

document.getElementById("popupCloser").addEventListener("click", function () {
  POPUP.close();
});
