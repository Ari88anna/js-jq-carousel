// Slider. Al click sulla sulle frecce rendiamo visibile l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).
// Lo slider non deve mai rompersi, ma se l'immagine visibile è l'ultima e clicco sulla freccia a destra lo slider mostra la prima.
// Se l'immagine visibile è la prima e clicco sulla freccia a sinistra, lo slider mostra l'ultima.

var rightArrow = $('.arrow.right');
console.log(rightArrow);

rightArrow.click(function () {    

    var imgActive = $('.active');
    console.log(imgActive);

    imgActive.removeClass('active');
    

});