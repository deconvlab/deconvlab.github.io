function toggle_block(id) {
  var x = document.getElementById(id);
  if (x.style.display && x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}