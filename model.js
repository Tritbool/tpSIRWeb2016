// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

"use strict";

class Shape{
	constructor(line_width, color) {
    this.line_width = line_width;
	this.color = color;
  }
}

class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

class Rectangle extends Shape{
	
	constructor(x, y, height, length, line_width, color) {
		super(line_width,color);
		this.point = new Point(x,y);
		this.height = height;
		this.length = length;
  }
	
}

class Line extends Shape{
	constructor(x1, y1, x2, y2, line_width, color) {
		super(line_width,color);
		this.point1 = new Point(x1,y1);
		this.point2 = new Point(x2,y2);
	}
}

class Drawing{
	constructor() {
		this.shapes = new Array();
  }	
}