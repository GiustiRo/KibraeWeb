// CUESTION PARALLAX

$(".main").mousemove(function(event){
    var x = event.pageX;
    var y = event.pageY;
    var w = $(window).width();
    var h = $(window).height();
    
    var lr = x / 50 - ($('.frame-2').width() / 100);
    var ud = y / 50 - ($('.frame-2').height() / 100);

    $('.frame-2').css({
        "transform": "translate("+ lr +"px," + ud +"px)"
    });
    

//console.log(x,y,"---",lr, ud)
});

$(".main").mouseleave(function(){
    $('.frame-2').css({
        "transform": "translate(0px,0px)" 
    });
});

// FIN CUESTION PARALLAX

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("menu-toggle");
    var checkBox2 = document.getElementById("menu-toggle2");
    // Get the output text
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
    $("#menu-toggle2, #trigger2, #burger2").css({
        "z-index": "8"
    });
    $("#menu2").css({
        "z-index": "7"
    });

    } else {
    $("#menu-toggle2, #trigger2, #burger2").css({
        "z-index": "91"
    });
    $("#menu2").css({
        "z-index": "90"
    });

    }
    if (checkBox2.checked == true){
      $("#menu-toggle, #trigger, #burger").css({
          "z-index": "8"
      });
      $("#menu").css({
        "z-index": "7"
    });
  
      } else {
      $("#menu-toggle, #trigger, #burger").css({
          "z-index": "91"
      });
      $("#menu").css({
        "z-index": "90"
    });
  
      }  
  }
// SOCIALES

$(".instagram").hover(function () { $("body").toggleClass("color-instagram") });
$(".col-soundcloud").hover(function () { $("body").toggleClass("color-soundcloud") });
$(".col-youtube").hover(function () { $("body").toggleClass("color-youtube") });
$(".col-spotify").hover(function () { $("body").toggleClass("color-spotify") });



// FIN SOCIALES



// OJO EL GLITCH




$( function() {
    $( ".glitch-img" ).mgGlitch({
      // set 'true' to stop the plugin
              destroy : false, 
      // set 'false' to stop glitching
      glitch: true, 
      // set 'false' to stop scaling
      scale: true, 
      // set 'false' to stop glitch blending
      blend : false, 
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 800, 
      // set max time for glitch 1 elem
      glitch1TimeMax : 1600,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10, 
      // set max time for glitch 2 elem
      glitch2TimeMax : 100, 
    });
    $('.glitch-img').css({
        "opacity": ".2"
    });
});

// FIN GLITCH



var cSoundcloud = document.getElementById("c-soundcloud");
var cYoutube = document.getElementById("c-youtube");
var cSpotify = document.getElementById("c-spotify");

$("#sel-youtube").click(function(){
    $(cSoundcloud).add(cSpotify).css({
        //"display": "none",
        "opacity": "0"
    });
    setTimeout(function() {
        $(cSoundcloud).add(cSpotify).css({
            "display": "none"
        });
    }, 200);
    $(cYoutube).css({
        //"display": "block",
        "opacity": "1"
    });

    setTimeout(function() {
        $(cYoutube).css({
            "display": "block"
        });
    }, 200);
});


$("#sel-soundcloud").click(function(){
    $(cYoutube).add(cSpotify).css({
        //"display": "none",
        "opacity": "0"
    });
    setTimeout(function() {
        $(cYoutube).add(cSpotify).css({
            "display": "none"
        });
    }, 200);

    $(cSoundcloud).css({
        //"display": "block",
        "opacity": "1"
    });
    setTimeout(function() {
        $(cSoundcloud).css({
            "display": "block"
        });
    }, 200);
});


$("#sel-spotify").click(function(){
    $(cYoutube).add(cSoundcloud).css({
        //"display": "none",
        "opacity": "0"
    });
    setTimeout(function() {
        $(cYoutube).add(cSoundcloud).css({
            "display": "none"
        });
    }, 200);

    $(cSpotify).css({
        //"display": "block",
        "opacity": "1"
    });
    setTimeout(function() {
        $(cSpotify).css({
            "display": "block"
        });
    }, 200);
});