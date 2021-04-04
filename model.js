// Implémenter ici les 4 classes du modèle.
function Drawing() {
    this.form = null;
    this.listForm = [];
    this.getlistForm = function () {
        return this.listForm;
    }.bind(this);

    this.addlistForm = function (listForm) {
        this.listForm.push(listForm)
    }.bind(this);

    this.removeForm = function (form) {
        console.log(form);
        //this.listForm.splice(form, 1);
    }.bind(this);
}


function Form(color, thickness) {
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, length, thickness, color) {
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
}

function Line(x, y, z, t, thickness, color) {
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
}

//héritage !

Rectangle.prototype = new Form();
Line.prototype = new Form();
