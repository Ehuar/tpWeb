
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = document.getElementById("spinnerWidth").value;;
	this.currColour = document.getElementById("colour").value;
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){

		if(document.getElementById("butRect").checked){
			this.currEditingMode = editingMode.rect;
			this.currentShape = new Rectangle(dnd.xInitial,dnd.yInitial,dnd.xFinal,dnd.yFinal,this.currLineWidth,this.currColour);
		}
		else{
			this.currEditingMode = editingMode.line;
			this.currentShape = new Line(dnd.xInitial,dnd.yInitial,dnd.xFinal,dnd.yFinal,this.currLineWidth,this.currColour);
		}
	}.bind(this);
	this.onInteractionUpdate = function(dnd){
		if(this.currentShape !== 0){
			this.currentShape.clear(ctx);
			this.currentShape.xFinal = dnd.xFinal;
			this.currentShape.yFinal = dnd.yFinal;
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
		}

	}.bind(this);
	this.onInteractionEnd = function(dnd){
		if(this.currentShape !== 0){
			this.currentShape.xFinal = dnd.xFinal;
			this.currentShape.yFinal = dnd.yFinal;
			this.currentShape.paint(ctx);
			drawing.addlistForm(this.currentShape);
			drawing.paint(ctx);
		}

	}.bind(this);


};


