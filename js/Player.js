function Player(options) {

	var options =  options || {};

	this.name = options.name || "Mario";
	this.position = options.position || {i:0, j:0};
	this.img = options.img || "mario.png";

	this.height = options.height;
	this.width = options.width;
}