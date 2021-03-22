
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  console.log(getXInitial());
  //ctx.rect(this.getInitY(), this.getInitY(), this.getFinalX(),   this.getFinalY());
  ctx.rect(100, 100, 400, 50);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  // ctx.moveTo(this.getInitX(), this.getInitY());
  // ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Form.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.thickness;
};


Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

