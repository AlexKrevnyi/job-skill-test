
//Carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

//Accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', e => {
    accordion.classList.toggle('active');
  })
});

//Tabs

function openTab(evt, mountain) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(mountain).style.display = "flex";
    evt.currentTarget.className += " active";
}

//Default Opened First Tab
document.getElementById("defaultOpen").click();

//Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
     if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

