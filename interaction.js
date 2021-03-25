// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
    this.xInitial = 0;
    this.yInitial = 0;
    this.xFinal = 0;
    this.yFinal = 0;
    this.pression = false;

    // Developper les 3 fonctions gérant les événements
    this.pressured = function (evt) {
        let position;
        if (evt !== undefined) {
            position = getMousePosition(canvas, evt);
            this.xInitial = position.x;
            this.yInitial = position.y;
            this.pression = true;
            interactor.onInteractionStart(this);
            console.log(this.xInitial + ' pressured ');
            console.log(this.yInitial);
        }
    }.bind(this);

    this.moving = function (evt) {
        if (evt !== undefined && this.pression) {
            this.xFinal = getMousePosition(canvas, evt).x;
            this.yFinal = getMousePosition(canvas, evt).y;
            interactor.onInteractionUpdate(this);
            console.log(this.xFinal + ' moving ');
            console.log(this.yFinal);
        }
    }.bind(this);

    this.released = function (evt) {
        if (evt !== undefined && this.pression) {
            this.xFinal = getMousePosition(canvas, evt).x;
            this.yFinal = getMousePosition(canvas, evt).y;
            interactor.onInteractionEnd(this);
            this.pression = false;
            console.log(this.xFinal + ' released ');
            console.log(this.yFinal);
        }
    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener("mousedown", this.pressured, false);
    canvas.addEventListener("mousemove", this.moving, false);
    canvas.addEventListener("mouseup", this.released, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



