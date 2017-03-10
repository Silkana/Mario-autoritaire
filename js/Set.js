
function Set(height, width, attach, cellSize) {
	
	// var that =  this;
	this.height = height;
	this.width = width;
	this.attach = attach;
	this.name = "set";
	this.cellSize = cellSize;
	this.items=[];
}



Set.prototype.draw = function(){
	console.log("drawing set of ", this.height, "x",  this.width, " on ", this.attach);

	// var attach = $(this.attach);

	var table = $("<table>");
	var tr, td, i, j;

	for (var i = 0; i<this.height; i++){
		tr = $('<tr>');
		for(var j = 0; j<this.width; j++){
			td = $("<td class='grass'>")
				.width(this.cellSize + "px")
				.height(this.cellSize + "px");
				
				var id = (i + '_' + j);
				td.attr("id", id);

			tr.append(td);
		}
		table.append(tr);
	}

	$("#canvas").append(table);

	$(document).ready(function(){
		$('button').click(function(){
			$('td').toggleClass("border");

		});
	});
}


Set.prototype.addItem = function(img) {
	
	var i = getRandomInteger(1, this.height);
	var j = getRandomInteger(1, this.width);

	// var chest = new Item({
	// 	position:{i:i, j:j},
	// 	// img
	// });
	// // chest.show();


	var item = new Item({
		position:{i:i, j:j},
		img:'chest.png',
	});

	this.items.push(item);
	item.show();

	console.log(this.items);


};

Set.prototype.isOnItemCell = function(playerPosition) {
		
	for(itemz = 0; itemz < this.items.length; itemz++){
		if(playerPosition.i == this.items[itemz].position.i
			&& playerPosition.j == this.items[itemz].position.j){
			console.log('héhé');
		}
	}
};


	// Item.prototype.Set = function(first_argument) {
	// 	// body...
	// };.
	// 	var chest = new Item({
	// 		position:{i:9, j:10},
	// 		img: "chest.png",
	// 	});

Set.prototype.createControls = function(){

	var that = this;

	$(document).keydown(function(key){

	var i = that.player.position.i;
	var j = that.player.position.j;

		switch(parseInt(key.which, 10)){
			case 37:
				that.movePlayer({i:i, j:--j}); 
			break;

			case 38:
				that.movePlayer({i:--i, j: j});
			break;

			case 39:
				that.movePlayer({i: i, j:++j});
			break;

			case 40:
				that.movePlayer({i: ++i, j:j});
			break;
		}
	})
};

Set.prototype.isAllowed = function(wantedPosition){
	var heigthMax = this.height;
	var widthMax = this.width;
	var result = false;
	

	if(wantedPosition.i >= 0 && wantedPosition.j >= 0 
							&& wantedPosition.i < heigthMax 
							&& wantedPosition.j < widthMax){
		result = true;
	}
	return result;
}



Set.prototype.movePlayer = function(newPosition) {
// 
	if(newPosition){
		if(this.isAllowed(newPosition) == false) return;
	}
	// 
	emptyCell(this.player.position);
// 
	this.player.position = newPosition || this.player.position;
	this.isOnItemCell(this.player.position);
	// 
	emptyCell(this.player.position);
	displayImgAt(this.player.position, this.player.img);
}


Set.prototype.newPlayer = function(options) {
	this.player = new Player(options);
};
