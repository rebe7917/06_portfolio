// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");
// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");
  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");
  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    console.log("luk");
    btn.textContent = "X";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "☰";
    console.log("menu");
  }
}
/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
