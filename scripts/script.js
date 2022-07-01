/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function dropdownn() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn, .flag-eng, .arrow')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
// Добавления класса .active через jquery.
$(document).ready(function() {
  $('.dropbtn').click(function(event) {
      $('.arrow').toggleClass('active');
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
