/*
  The jquery version of window.onload. We use this because of the 
  colorbox jquery plugin.
*/
$(document).ready( function () {
    // Trigger the colorbox jquery plugin.
    $.colorbox({
        open:true, // Open the lightbox immediately.
        href:'https://www.youtube.com/embed/2r5cgrplB9w', // Play this video.
        iframe:true, // Use an iframe.
        innerWidth:640, innerHeight:390 // Set size of iframe.
    });
});
