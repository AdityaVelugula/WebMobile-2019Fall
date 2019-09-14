function upDate(textImage) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image

    document.getElementById('id').src = "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-7.jpg"

    $("#image").innerHTML = textImage.alt;

    document.getElementById("image").style.backgroundImage = "url('"+textImage.src+"')";
*/
    document.getElementById("image").innerHTML = textImage.alt;

    document.getElementById("image").style.backgroundImage = "url('"+textImage.src+"')";

/*    document.getElementById("image").style.backgroundImage = "url('"+textImage.src+"')";  */
}


function unDo(returnId) {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

    background-image: url('');
    <div id="image">
    Hover over an image below to display here.
</div>
*/
    document.getElementById("image") .style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here" ;
}
