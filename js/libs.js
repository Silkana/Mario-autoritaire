
function getRandomInteger(min, max) {
	var rand = 0;

	min = Math.ceil(min);
	max = Math.floor(max);
	rand = Math.floor(Math.random() * (max - min +1)) + min;
	return rand;
}

function getCell(position){
	$cell = $('#'+position.i+'_'+position.j);
	return $cell;
	
}

function emptyCell(position){
	$cell = getCell(position);
	$cell.empty();
}

function displayImgAt(position, img){
	$cell = getCell(position);
	$cell.append('<img src="img/'+img+'"/>');
}

