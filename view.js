// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    console.log("re");
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.rect(this.xInitial, this.yInitial, this.xFinal, this.yFinal);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.xInitial, this.yInitial);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};

Form.prototype.clear = function (ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

    document.getElementById("shapeList").innerHTML = "";
    this.getlistForm().forEach(function (form) {
        let li = document.createElement("li");
        li.textContent = form;

        let button = document.createElement("button");
        button.className = "btn btn-default";
        button.addEventListener("click", function () {
            drawing.removeForm(form);
        });
        let span = document.createElement("span");
        span.className = "glyphicon glyphicon-remove-sign";
        button.appendChild(span);
        li.appendChild(button);
        document.getElementById("shapeList").appendChild(li);

    });
};

