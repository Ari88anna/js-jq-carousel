// Slider. Al click sulla sulle frecce rendiamo visibile l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).
// Lo slider non deve mai rompersi, ma se l'immagine visibile è l'ultima e clicco sulla freccia a destra lo slider mostra la prima.
// Se l'immagine visibile è la prima e clicco sulla freccia a sinistra, lo slider mostra l'ultima.

var rightArrow = $('.arrow.right');
console.log(rightArrow);

// al click sulle frecce rendiamo visibile l'immagine successiva 
rightArrow.click(function () {    

    var imgActive = $('.active');

    var nextImg = imgActive.next();

    rightClick(imgActive, nextImg);   

});

var leftArrow = $('.arrow.left');

leftArrow.click(function () {  

    var imgActive = $('.active');

    var previousImg = imgActive.prev();
    
    leftClick(imgActive, previousImg); 
});





// FUNZIONI
//
//
function rightClick(img, nextone) {
    console.log(img);

    img.removeClass('active');     
    
    if ( img.hasClass('last')) {

        $('.first').addClass('active')
    }else {
        nextone.addClass('active')
    }

}

function leftClick(img, previous) {
    console.log(img);

    img.removeClass('active');     
    
    if ( img.hasClass('first')) {

        $('.last').addClass('active')
    }else {
        previous.addClass('active')
    }

}