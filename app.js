var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]


var totalPaidOut = 0;
var percent = 0;
var coveredAmount = 0;
var paidOutMesg = '';

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// General: Numbers should be rounded to the nearest whole number! --> use Math.round();


// 1 You will be provided an array of 5 items, where you will use the constructor function to create 5 more,
// 2 combining to the two to have one array of 10 items.
// These statements create new Claim objects, and add them to the aray list.
var claim6 = new Claim("Brian Regan", "Specialist", 780);
initialList[5] = claim6;

var claim7 = new Claim("Louis CK", "Primary Care", 250);
initialList[6] = claim7;

var claim8 = new Claim("Tig Notaro", "Specialist", 2000);
initialList[7] = claim8;

var claim9 = new Claim("Maria Bamford", "Emergency", 1050);
initialList[8] = claim9;

var claim10 = new Claim("Mike Birbiglia", "Optical", 750);
initialList[9] = claim10;


// 3 function to determine percent covered
// one will determine what percentage (per rules below) will be covered
// Optical - covers 0%
//
// Specialist - covers 10%
//
// Emergency - covers 100%
//
// Primary Care - covers 50%

// switch statement assigns percentCovered based on the visitType
function percentCovered(claim) {
		switch(initialList[i].visitType) {
			case "Specialist":
				percent = 10;
				break;
			case "Emergency":
				percent = 100;
				break;
			case "Primary Care":
				percent = 50;
				break;
				//the default case covers all Optical visits as well as any other uncovered visits
			default:
				percent = 0;
		}
		// alternate method of assigning percentCovered in case the Switch statement has issues
		// if(initialList[i].visitType === "Specialist") {
		// 	percent = 10;
		// } else if(initialList[i].visitType === "Primary Care") {
		// 	percent = 50;
		// } else if(initialList[i].visitType === "Emergency") {
		// 	percent = 100;
		// } else {
		// 	percent = 0;
		// }
}

// 4 function to determine amount covered
// another will determine what that amount will be (per the visitCost value). Within your cost determining method,
// console out a message in the format ('Paid out $______ for _______') where the second statement is the patient name.

// this function determines the percent paid and rounds it to the nearest whole dollar
// variables are assigned to be used in the Jquery object, which would not accept coveredAmount
// and initialList[i].patientName for some reason
// then, it console logs the amount paid to each customer, and using a JQuery object and the .after
// method, sends that same message to the DOM via the <p> element in the object
function determineCoveredAmount(claim) {
	coveredAmount = Math.round(initialList[i].visitCost * (percent/100));
	var name = initialList[i].patientName;
	var covered = coveredAmount;
	paidOutMesg = 'Paid out $' + covered + ' for ' + name;
	console.log(paidOutMesg);
		$(function() {
			paidOutMesg = $("<p>Paid out $" + covered + "  for " + name + "</p>");
			$('h1').after(paidOutMesg);
		});
}

// 6 One for loop to rule them all
//    After that is complete, console out the entire amount paid out. [Put this after the for loop.]

// Iterates through the array of obects, calls the functions on each person, keeps track of the totalPaidOut
for (var i = 0; i < initialList.length; i++) {
	percentCovered(initialList[i]);
	determineCoveredAmount(initialList[i]);
	totalPaidOut += coveredAmount;
}

// logs the total amount paid to all persons
console.log(totalPaidOut);
