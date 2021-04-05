// Implémenter ici les 4 classes du modèle.
function Drawing() {
    this.listForm = [];
    this.getlistForm = function () {
        return this.listForm;
    }.bind(this);

    this.addlistForm = function (listForm) {
        this.listForm.push(listForm)
    }.bind(this);

    this.removeForm = function (form) {
        this.listForm.splice(this.listForm.indexOf(form), 1);
        console.log(this.listForm);
        this.updateShapeList();
        this.paint(ctx);
    }.bind(this);
}


function Form(color, thickness) {
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(xInitial, yInitial, xFinal, yFinal, thickness, color) {
    Form.call(this, color, thickness);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
}

function Line(xInitial, yInitial, xFinal, yFinal, thickness, color) {
    Form.call(this, color, thickness);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
}

//héritage !

Rectangle.prototype = new Form();
Line.prototype = new Form();
