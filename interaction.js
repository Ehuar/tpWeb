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
        let position;
        if (evt !== undefined) {
            position = getMousePosition(canvas, evt);
            this.xInitial = position.x;
            this.yInitial = position.y;
        }
    }
    this.moving = function (evt) {
        if (evt !== undefined) {
            console.log(getMousePosition(canvas, evt));
        }
    }
    this.released = function (evt) {
        let position;
        if (evt !== undefined) {
            position = getMousePosition(canvas, evt);
            this.xFinal = position.x;
            this.yFinal = position.y;
        }
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



