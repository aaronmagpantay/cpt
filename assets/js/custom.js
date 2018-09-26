// Loader

window.onload = function(){

    $(".se-pre-con").css("display", "none");
};

$("#scrlBtn").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
});

$(document).ready(function(){
 

//load function not working
// $(window).load(function() {
        // // Animate loader off screen
        // $(".se-pre-con").css("visibility", "none");
    // });



window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrlBtn").style.display = "block";
    } else {
        document.getElementById("scrlBtn").style.display = "none";
    }
    //for positioning of navbar fordebugging
     if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        $(".navbar").addClass("bg-nav");
        // $(".navbar").addClass("jello");
        // $(".navbar").removeClass("bg-nav");
    } else {
        $(".navbar").removeClass("bg-nav");
        // $(".navbar").addClass("bg-nav");
    }
}






function toggleLoader(show){
     if(show == true){
        $(".pre-load").show();
        $(".page-content").fadeOut();
     }
     else{
        $(".page-content").show();
        $(".pre-load").fadeOut();

     }
}





//Working Codes

function goBack() {
    window.history.back();
}

function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}
function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}
function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;
    // console.log(windowHeight);
    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');
        $(this).width(windowWidth);
        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
            $(this).width(videoWidth).height(videoHeight);
        }
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
}



    $(window).resize(function () { scaleVideoContainer(); });
    $(window).trigger('resize');



var min_w = 300;
var vid_w_orig;
var vid_h_orig;

$(function() {

    vid_w_orig = parseInt($('video').attr('width'));
    vid_h_orig = parseInt($('video').attr('height'));

    $(window).resize(function () { fitVideo(); });
    $(window).trigger('resize');

});

function fitVideo() {

    $('#video-viewport').width($('.fullsize-video-bg').width());
    $('#video-viewport').height($('.fullsize-video-bg').height());

    var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
    var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    $('video').width(scale * vid_w_orig);
    $('video').height(scale * vid_h_orig);

    $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
    $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);

};




});



//footer social icons animation
// 
  // var waypointSoc = new Waypoint({
    // element: document.getElementById('kproc'),
    // handler: function() {
      // $('#soc-icon1').addClass('jello');
    // },
    // offset: '80%'
  // })
  // var waypointSoc1 = new Waypoint({
    // element: document.getElementById('kproc1'),
    // handler: function() {
      // $('#soc-icon2').addClass('jello');
    // },
    // offset: '80%'
  // })
  // var waypointSoc2 = new Waypoint({
    // element: document.getElementById('kproc2'),
    // handler: function() {
      // $('#soc-icon3').addClass('jello');
    // },
    // offset: '80%'
  // })
