// Expected Output
// Hello Surya
// Goodbye John
// Hello Wick
// Goodbye James



var ar=["Surya","John","Wick","James"];
for (var i=0 ; i < ar.length; i++){
	var firstletter = ar[i].charAt(0).toLowerCase();
	if (firstletter == 'j') {
		console.log("Goodbye "+ar[i]);
	}
	else {
		console.log("Hello "+ar[i]);
	}	
}
