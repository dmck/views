//
// SEARCHBOX FUNCTIONS
//
function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    text = document.selection.createRange().text;
  }
  return text;
}

function setSearchBox() {
  var selectedText = getSelectedText();
  // If user isn't in search-box
  if( !($("#mainNav").is(":focus")) ) {
    if (selectedText) {
      // Then if they have selected text:
      $("#search-box").val(selectedText);
      var url = "https://www.google.com/search?num=50&q=\"" + selectedText.replace(/[^a-zA-Z0-9:(),.“”$;-]/g,"+") + "\"";
      $('#statute-search').attr("href", url);
      url = "https://scholar.google.com/scholar?hl=en&q=\"" + selectedText.replace(/[^a-zA-Z0-9:(),.“”$;-]/g,"+") + "\"&as_sdt=4%2C10";
      $('#caselaw-search').attr("href", url);
      openNav();
      if ( $( window ).width() < 544 ) {
        $("#collapsingMainMenu").collapse('show');
      }
    } else {
      // On release, if not focused, then close
      $("#collapsingMainMenu").collapse('hide');
      $("#collapsingYearMenu").collapse('hide');
      if( !($("#search-box").is(":focus")) ) {
        $("#search-box").val("");
        $('#statute-search').attr("href", "");
        $('#caselaw-search').attr("href", "");
      }
    }
  }
}

$('#search-box').on('input', function() {
  var input = $(this).val().replace(/[^a-zA-Z0-9:(),.“”$;-]/g,"+");
  if (input) {
    var url = "https://www.google.com/search?num=50&q=\"" + input + "\"";
    $('#statute-search').attr("href", url);
    url = "https://scholar.google.com/scholar?hl=en&q=\"" + input + "\"&as_sdt=4%2C10";
    $('#caselaw-search').attr("href", url);
  }
});

$( "#search-form" ).submit(function( event ) {
  event.preventDefault();
  $( "#statute-search" )[0].click();
});

document.onmouseup = setSearchBox;
document.onkeyup = setSearchBox;


//
// AUTOHIDE THE NAVBAR
// http://www.jqueryscript.net/demo/Minimal-Auto-hide-Navigation-Bar-with-jQuery/
//
var prevScroll = 0,
    curDir = 'down',
    prevDir = 'up';

function closeNav() {
  curDir = 'down';
  if(curDir != prevDir){
  	$('#mainNav').stop();
    $('#mainNav').animate({ top: '-100px' }, 300);
    prevDir = curDir;
  }
}

function openNav() {
  curDir = 'up';
  if(curDir != prevDir){
  	$('#mainNav').stop();
    $('#mainNav').animate({ top: '0px' }, 300);
    prevDir = curDir;
  }
}

$(window).scroll(function(){
  if($(this).scrollTop() >= prevScroll){
    closeNav();
  } else {
    openNav();
  }
  prevScroll = $(this).scrollTop();
});