// alert("Hello world");

$(document).ready(function() {

  $('.withDropdown').mouseenter(mostraDropdown);
  $('.withDropdown').mouseleave(nascondiDropdown);

});



function mostraDropdown() {
  $(this).children('.dropdown').addClass('displayFlex');
  if ($(this).find('i').hasClass('fa-angle-down')) {
    $('i').removeClass('fa-angle-down');
    $('i').addClass('fa-angle-up');
  }
}

function nascondiDropdown() {
  $(this).children('.dropdown').removeClass('displayFlex');
  if ($(this).find('i').hasClass('fa-angle-up')) {
    $('i').removeClass('fa-angle-up');
    $('i').addClass('fa-angle-down');
  }
}









// console.log();
