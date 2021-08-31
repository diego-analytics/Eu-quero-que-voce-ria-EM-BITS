var slideIndex = 0
showSlides(slideIndex)

function proxverso(n) {
  showSlides(slideIndex += n)
}


function showSlides(n) {
  var i
  var vrs = document.getElementsByClassName("versos")
  if (n > vrs.length) {slideIndex = 0}
    if (n < 1) {slideIndex = vrs.length}
    for (i = 0; i < vrs.length; i++) {
      vrs[i].style.display = "none"
    }

  vrs[slideIndex-1].style.display = "block";
}