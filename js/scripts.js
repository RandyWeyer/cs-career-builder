
$(document).ready(function() {
  $("#career-builder").submit(function(event) {

        event.preventDefault();

    var frontBackEnd = $('input[name=front-back-end]:checked').val();



  });

  // Popover Bootstrap.js
  $('[data-toggle="popover"]').popover();

  // Functions for append each popup into the info box so students can read what a language is commonly used for.

  function javascriptInfo() {
    $("#javascript-info").append("<a href='#' title='Javascript' data-toggle='popover' data-trigger='focus' data-content='Javascript INFO'>Javascript</a>"
  )};

  function phpInfo() {
    $("#php-info").append("<a href='#' title='PHP' data-toggle='popover' data-trigger='focus' data-content='PHP INFO'>PHP</a>"
  )};

  function rubyInfo() {
    $("#ruby-info").append("<a href='#' title='Ruby' data-toggle='popover' data-trigger='focus' data-content='Ruby INFO'>Ruby</a>"
  )};

  function javascriptInfo() {
    $("#python-info").append("<a href='#' title='Python' data-toggle='popover' data-trigger='focus' data-content='Python INFO'>Python</a>"
  )};


});
