//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//2. add an overlay 
var $overlay = $('<div id="overlay"></div>');
    //2.1 image
var $image = $('<img>');
$overlay.append($image);
    //2.2 caption
var $caption = $('<p></p>');
$overlay.append($caption);
$("body").append($overlay);
 //1.Capture the click event on link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var attr = $(this).attr("href");
    //1.1 show the overlay
    $overlay.show();
    //1.2 update the overlay with the image in the link
    $image.attr("src",attr);
    //1.3 get child alt attribute and set caption
    var alt = $(this).children("img").attr("alt");
    $caption.text(alt);

});
  

//3. when overlay is clicked hide it
$overlay.click(function(){
   $(this).hide(); 
});