/*
  The jquery version of window.onload. We use this because of the 
  colorbox jquery plugin.
*/
$(document).ready( function () {
    // Attach colorbox to the anchor <a> in the HTML.
    $("#matt").colorbox({ // Select element with id matt.
        open:true, // Open the lightbox immediately.
        iframe:true, // Use an iframe.
        innerWidth:640, innerHeight:390 // Set size of iframe.
    });
});
