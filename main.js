$(document).ready(function(){
	// const cellSize = 50;
	// var set = new Set(20,20, "#canvas", cellSize);
	// console.log(set);
	


	// var mario = new Player();
	// mario.move();


	var set = new Set(15,15, '#canvas',50);
	set.draw();

	for (item=0; item<25; item++){
		set.addItem();	
	}

	set.newPlayer();
	set.movePlayer();
	set.createControls();
	

	console.log(set instanceof Set /*Object*/);
})

