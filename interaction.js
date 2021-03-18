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
        console.log(getMousePosition(canvas, evt));
        console.log(getMousePosition(canvas, evt));
    }
    this.moving = function (evt) {
        console.log(getMousePosition(canvas, evt));
    }
    this.released = function (evt) {
        console.log(evt);
        console.log(getMousePosition(canvas, evt));
    }

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener("mousedown",this.pressured(interactor), false);
    canvas.addEventListener("mousemove",this.moving(interactor), false);
    canvas.addEventListener("mouseup",this.released(interactor), false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



