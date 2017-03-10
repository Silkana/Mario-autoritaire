function Item(options) {

	var options =  options || {};

	this.position = options.position;
	this.img = options.img || "chest.png"; //"treasure.png";//


}

Item.prototype.show = function() {

	emptyCell(this.position);
	displayImgAt(this.position, this.img);
	
};