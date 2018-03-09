{function drawpentagon(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
    this.moveTo(x1,y1);
    this.lineTo(x2,y2);
    this.lineTo(x2,y3);
    this.lineTo(x4,y3);
    this.lineTo(x4,y2);
    this.closePath();
    this.stroke();
}};