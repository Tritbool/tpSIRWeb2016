
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

	this.xinit = 0;
	this.yinit = 0;
	this.xfinal = 0;
	this.yfinal = 0;
	
	// Developper les 3 fonctions gérant les événements

	this.mousedown = function(){
		
	}.bind(this);
	
	this.mousemove = function(){
		
	}.bind(this);
	
	this.mouseup = function(){
		
	}.bind(this);
	
	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
	canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
	canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
	
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



