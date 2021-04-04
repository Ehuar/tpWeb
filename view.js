// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {

    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.rect(this.x, this.y, this.width, this.length);
    console.log(this.x);
    console.log(this.y);
    console.log(this.width);
    console.log(this.length);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {

    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.z, this.t);
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};


Drawing.prototype.paint = function (ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getlistForm().forEach(function (form) {
        form.paint(ctx);
    });
}

Drawing.prototype.updateShapeList = function () {

    let text = "";
    this.getlistForm().forEach(function (form, i) {
        let li = document.createElement("li");
        li.textContent = form;
        console.log(i);
        let button = document.createElement("button");
        button.className = "btn btn-default";
        // button.onlick = this.drawing.removeForm(button);
        // button.setAttribute("onclick", this.drawing.removeForm(form));
        button.addEventListener("click", this.drawing.removeForm(form), false);
        let span = document.createElement("span");
        span.className = "glyphicon glyphicon-remove-sign";
        button.appendChild(span);
        li.appendChild(button);
        document.getElementById("shapeList").appendChild(li);

    });
};

removeForm = function (){

}

