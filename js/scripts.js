
$(document).ready(function() {
  $("#career-builder").submit(function(event) {

        event.preventDefault();

        var computerOS = $('input[name=computer-os]:checked').val();
        var frontBackEnd = $('input[name=front-back-end]:checked').val();
        var webApp = $('input[name=web-app]:checked').val();
        var mobileDesktop = $('input[name=mobile-desktop]:checked').val();
        var preferDatabase = $('input[name=prefer-database]:checked').val();

        var preferJavascript = 0;
        var preferPhp = 0;
        var preferRuby = 0;
        var preferCSharp = 0;
        var preferPython = 0;
        // values are added or subtracted by 0..3 depending on answers

        var unfinishedQuiz = false;


        if (computerOS==apple) {
          preferJavascript+=2;
          preferPhp+=1;
          preferRuby+=2;
          preferPython-=2;
          preferCSharp-=3;
        } else if (computerOS==microsoft) {
          preferJavascript+=3;
          preferPhp-=2;
          preferRuby-=3;
          preferPython-=2;
          preferCSharp+=3;
        } else if (computerOS==linux) {
          preferJavascript+=1;
          preferPhp+=3;
          preferRuby+=3;
          preferPython+=2;
          preferCSharp-=1;
        } else {
          unfinishedQuiz = true;
        }

        if (frontBackEnd==frontend) {
          preferJavascript+=3;
          preferPhp-=3;
          preferRuby-=1;
          preferPython-=1;
          preferCSharp+=1;
        } else if (frontBackEnd==backend) {
          preferJavascript-=3;
          preferPhp+=1;
          preferRuby+=3;
          preferPython+=2;
          preferCSharp-=1;
        } else {
          unfinishedQuiz = true;
        }

        if (webApp==web) {
          preferJavascript+=3;
          preferPhp+=2;
          preferRuby+=3;
          preferPython-=2;
          preferCSharp-=4;
        } else if (webApp==app) {
          preferJavascript-=1;
          preferPhp-=3;
          preferRuby-=3;
          preferPython+=2;
          preferCSharp+=3;
        } else if (webApp==both) {
          preferJavascript+=3;
          preferPhp-=3;
          preferRuby+=3;
          preferPython+=2;
          preferCSharp+=1;
        } else {
          unfinishedQuiz = true;
        }

        if (mobileDesktop==mobile) {
          preferJavascript+=3;
          preferPhp-=3;
          preferRuby-=2;
          preferPython-=1;
          preferCSharp+=1;
        } else if (mobileDesktop==desktop) {
          preferJavascript+=3;
          preferPhp+=1;
          preferRuby+=3;
          preferPython+=2;
          preferCSharp-=1;
        } else {
          unfinishedQuiz = true;
        }

        if (preferDatabase==database) {
          preferJavascript+=1;
          preferPhp+=1;
          preferRuby+=3;
          preferPython-=1;
          preferCSharp+=1;
        } else if (preferDatabase==noDatabase) {
          preferJavascript+=3;
          preferPhp-=3;
          preferRuby-=3;
          preferPython+=2;
          preferCSharp+=1;
        } else {
          unfinishedQuiz = true;
        }

        if (unfinishedQuiz==true) {
          alert("Please finish all fields before submitting.")
        }
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

  function pythonInfo() {
    $("#python-info").append("<a href='#' title='Python' data-toggle='popover' data-trigger='focus' data-content='Python INFO'>Python</a>"
  )};


});
