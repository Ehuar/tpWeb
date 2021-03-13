// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
    this.xInitial = 0;
    this.yInitial = 0;
    this.xFinal = 0;
    this.yFinal = 0;

    // Developper les 3 fonctions gérant les événements
    this.pressured = function (evt) {

    }
    this.moving = function (evt) {

    }
    this.released = function (evt) {

    }

    // Associer les fonctions précédentes aux évènements du canvas.
   /* canvas.addEventListener("mousedown",this.pressure());
    canvas.addEventListener("mousemove",this.move());
    canvas.addEventListener("mouseup",this.release());*/
    canvas.pressured(interactor);
    canvas.moving(interactor);
    canvas.released(interactor);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



