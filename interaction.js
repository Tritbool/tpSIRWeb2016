
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

	this.xinit = 0;
	this.yinit = 0;
	this.xfinal = 0;
	this.yfinal = 0;
	this.currentMouse;
	// Developper les 3 fonctions gérant les événements

	this.appui = function(evt){
		this.currentMouse = getMousePosition(canvas, evt);
		this.xinit = this.currentMouse.x;
		this.yinit = this.currentMouse.y;
		console.log(this.xinit);
		console.log(this.yinit);
		
	}.bind(this);
	
	this.relache = function(evt){
		this.currentMouse = getMousePosition(canvas, evt);
		this.xfinal = this.currentMouse.x;
		this.yfinal = this.currentMouse.y;
		console.log(this.xfinal);
		console.log(this.yfinal);
	}.bind(this);
	
	this.deplacement = function(evt){
		
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



