<script>

var player = 1;

function clickButton(squareNumber){
	if(player === 1){
		document.getElementbyId(squareNumber).value="X";
		document.getElementbyId(squareNumber).disabled="disabled";
	player -= 1;
	playerWins();	
	} else {
		document.getElementbyId(squareNumber).value="O"
		document.getElementbyId(squareNumber).disabled="disabled";
	player += 1;
	playerWins();
	}
}

function playerWins(){
	if(
		document.getElementbyId("square1").value==="X" &&
		document.getElementbyId("square2").value==="X" &&
		document.getElementbyId("square3").value==="X" ||
		document.getElementbyId("square4").value==="X" &&
		document.getElementbyId("square5").value==="X" &&
		document.getElementbyId("square6").value==="X" ||
		document.getElementbyId("square7").value==="X" &&
		document.getElementbyId("square8").value==="X" &&
		document.getElementbyId("square9").value==="X" ||
		document.getElementbyId("square1").value==="X" &&
		document.getElementbyId("square4").value==="X" &&
		document.getElementbyId("square7").value==="X" ||
		document.getElementbyId("square2").value==="X" &&
		document.getElementbyId("square5").value==="X" &&
		document.getElementbyId("square9").value==="X" ||
		document.getElementbyId("square3").value==="X" &&
		document.getElementbyId("square6").value==="X" &&
		document.getElementbyId("square9").value==="X" ||
		document.getElementbyId("square1").value==="X" &&
		document.getElementbyId("square5").value==="X" &&
		document.getElementbyId("square9").value==="X" ||
		document.getElementbyId("square3").value==="X" &&
		document.getElementbyId("square5").value==="X" &&
		document.getElementbyId("square9").value==="X" 
				){
		alert("You are a champion my friend");
		resetGame();

	}else if{
		document.getElementbyId("square1").value==="O" &&
		document.getElementbyId("square2").value==="O" &&
		document.getElementbyId("square3").value==="O" ||
		document.getElementbyId("square4").value==="O" &&
		document.getElementbyId("square5").value==="O" &&
		document.getElementbyId("square6").value==="O" ||
		document.getElementbyId("square7").value==="O" &&
		document.getElementbyId("square8").value==="O" &&
		document.getElementbyId("square9").value==="O" ||
		document.getElementbyId("square1").value==="O" &&
		document.getElementbyId("square4").value==="O" &&
		document.getElementbyId("square7").value==="O" ||
		document.getElementbyId("square2").value==="O" &&
		document.getElementbyId("square5").value==="O" &&
		document.getElementbyId("square9").value==="O" ||
		document.getElementbyId("square3").value==="O" &&
		document.getElementbyId("square6").value==="O" &&
		document.getElementbyId("square9").value==="O" ||
		document.getElementbyId("square1").value==="O" &&
		document.getElementbyId("square5").value==="O" &&
		document.getElementbyId("square9").value==="O" ||
		document.getElementbyId("square3").value==="O" &&
		document.getElementbyId("square5").value==="O" &&
		document.getElementbyId("square9").value==="O" 
				){
		alert("You are a champion my friend");
		resetGame();
	}	
}

function resetGame(){
	document.getElementbyId("square1").value="";
	document.getElementbyId("square2").value="";
	document.getElementbyId("square3").value=""; 
	document.getElementbyId("square4").value="";
	document.getElementbyId("square5").value="";
	document.getElementbyId("square6").value=""; 
	document.getElementbyId("square7").value="";
	document.getElementbyId("square8").value="";
	document.getElementbyId("square9").value=""; 

}


</script>