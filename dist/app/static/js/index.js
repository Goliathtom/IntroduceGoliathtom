function pageResize(){var e=$(window).height()/2-$("#main-content").height()/2,o=$(window).width()/2-$("#main-content").width()/2;$("#main-content").css({top:e,left:o}),setTimeout(pageResize,0)}$(document).ready(function(){pageResize(),$(window).scroll(function(){var e=$(window).scrollTop();e>0?$("#head_container >nav").css("background-color","#000"):$("#head_container >nav").css("background-color","transparent")}),$('[data-toggle="tooltip"]').tooltip({delay:{show:300,hide:100},viewport:{selector:"body",padding:20}})}),$(window).on("resize",pageResize);