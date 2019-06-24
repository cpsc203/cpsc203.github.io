function myFunction(element) {
  var x = document.getElementById(element);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
