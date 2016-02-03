
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

	this.xinit = 0;
	this.yinit = 0;
	this.xfinal = 0;
	this.yfinal = 0;
	
	// Developper les 3 fonctions gérant les événements

	this.appui = function(){
		
	}.bind(this);
	
	this.deplacement = function(){
		
	}.bind(this);
	
	this.relache = function(){
		
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



