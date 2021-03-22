
// Implémenter ici les 4 classes du modèle.
function Drawing(listForm){
    this.listForm = listForm;
}

function Form(color, thickness){
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, length,thickness, color){
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
}

function Line(x,y,z,t,thickness, color){
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
}

// N'oubliez pas l'héritage !

Rectangle.prototype= new Form();
Line.prototype = new Form();
