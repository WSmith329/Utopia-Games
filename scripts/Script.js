// JavaScript source code

// Nav Menu shown when Nav Btn for mobiles is clicked
$(".navbtn").on('click', function () {
  $(".navmenu").slideToggle(500);
});



// SHRINKING HEADER //
$(window).on("scroll touchmove", function () {
  $('.mainHeader').toggleClass('shrunk', $(document).scrollTop() > 0, 500);
  $('.navmenu').toggleClass('shrunk', $(document).scrollTop() > 0, 500);
});



// FONT SIZE
// Increase font by 1 relative unit
function increaseFontSize(){
  document.body.style.fontSize = 'larger';
  localStorage.fontSize = 'larger';
};
document.querySelector('#increase-font').addEventListener('click', increaseFontSize);

// Reset font to original size
function resetFontSize(){
  document.body.style.fontSize = 'initial';
  localStorage.fontSize = 'normal';
};
document.querySelector('#reset-font').addEventListener('click', resetFontSize);

// Decrease font by 1 relative unit
function decreaseFontSize(){
  document.body.style.fontSize = 'smaller';
  localStorage.fontSize = 'smaller';
}
document.querySelector('#decrease-font').addEventListener('click', decreaseFontSize);



// CHANGE BASE COLOURS
let lightBtn = document.querySelector('#light-theme');
let darkBtn = document.querySelector('#dark-theme');

lightBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--primary-color', '#FFFFFF');
  document.documentElement.style.setProperty('--secondary-color', '#262626');
  localStorage.theme = 'light';
});

darkBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--primary-color', '#262626');
  document.documentElement.style.setProperty('--secondary-color', '#FFFFFF');
  localStorage.theme = 'dark';
});



// Load preferences from local storage
window.addEventListener('DOMContentLoaded', () => {
  // Load stored theme
  if (localStorage.theme == 'dark') {
    document.documentElement.style.setProperty('--primary-color', '#262626');
    document.documentElement.style.setProperty('--secondary-color', '#FFFFFF');
  }

  else if (localStorage.theme == 'light') {
    document.documentElement.style.setProperty('--primary-color', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary-color', '#262626');
  }

  // Load stored font size
  if (localStorage.fontSize == 'larger') {
    increaseFontSize();
  }
  else if (localStorage.fontSize == 'smaller') {
    decreaseFontSize();
  }
  else {
    resetFontSize();
  }
});