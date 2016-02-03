
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

	this.xinit = 0;
	this.yinit = 0;
	this.xfinal = 0;
	this.yfinal = 0;
	this.currentMouse;
	this.mouseClicked = false;
	// Developper les 3 fonctions gérant les événements

	this.appui = function(evt){
		mouseClicked = true;
		currentMouse = getMousePosition(canvas, evt);
		xinit = currentMouse.x;
		yinit = currentMouse.y;
		console.log(xinit);
		console.log(yinit);
	}.bind(this);
	
	this.deplacement = function(evt){
		if(mouseClicked){
			currentMouse = getMousePosition(canvas, evt);
			console.log(currentMouse.x);
			console.log(currentMouse.y);
		}
		else{
			console.log("mouse unclicked");
		}
	}.bind(this);	
	
	this.relache = function(evt){
		mouseClicked=false;
		currentMouse = getMousePosition(canvas, evt);
		xfinal = currentMouse.x;
		yfinal = currentMouse.y;
		console.log(xfinal);
		console.log(yfinal);
	}.bind(this);
	

	

	
	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener('mousedown', this.appui, false);
	canvas.addEventListener('mousemove', this.deplacement, false);
	canvas.addEventListener('mouseup', this.relache, false);
	
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



