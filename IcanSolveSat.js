const fs = require("fs")

var linhas = fs.readFileSync('/Users/lucas/eclipse-workspace/castor/hole5.txt')
		.toString()
var x = 0;

var arraes = []
arraes = linhas.split("\n");
while (x < arraes.length) {

	if (arraes[x].charAt(0) == 'c') {

		arraes[x] = "";

		x++;
	} else {
		x++;
	}

}

x = 0;
var z = 0;
transpo = [];
while (x <= arraes.length) {

	if (arraes[x] != ("")) {
		transpo[z] = arraes[x];
		z++;
	}

	x++;

}

arraes = transpo[0].replace("p", "").replace("cnf", "").replace("  ", "")
		.split(" ");

var avariables = parseInt(arraes[0]);

var aclauses = parseInt(arraes[1]);

var clauses = [];
var variables = [];
x = 0;

while (x < avariables) {

	variables[x] = false;

	x++;
}

x = 0;




while (x < transpo.length - 2) {

	clauses[x] = transpo[x + 1].split(" ");
	x++;
}

clausespop = clauses.slice();

x = 0;
console.log("{ clauses: [");

while (x < clausespop.length) {

	clausespop[x].pop();

	x++;
}

x = 0;

while (x < clausespop.length) {

	console.log(clausespop[x])

	x++;
}

console.log("] ")
console.log("variables: ") + console.log(variables)
console.log("}")

x = 0;
n = avariables;
var combinacoes = new Array();

y = 0;
z = 0;
function nextcombination() {
p = (parseInt(y, 10).toString(2));
	
	if (p.length % n != 0) {

		while (p.length % n != 0) {
			p = "0" + p
		}
		
	}
	z = 0;
	var combinationsbolean = new Array();
	while (z < avariables) {
		if (p.charAt(z) == 0) {
			booleanvalor = false
		} else {
			booleanvalor = true
		}
		combinationsbolean[z] = booleanvalor
		z++;
	}
	y++
	if(y==Math.pow(2, n)){y=0}
	
	return combinationsbolean;

}
clausecont=0
x=0
while (x < clauses.length) {

	clauses[x].push(0);

	x++;
}




var x=0
var bugvar=0
var k=0
booleanresult=false

resultclause= new Array()

var satisfabilitycont=0;
while(k<Math.pow(2, n)){
	
	if(satisfabilitycont!=0){
	
		break;
		}
	
	combinations=nextcombination()
	booleanresult=false
	

while(bugvar<clauses.length){
	booleanresult=false
x=0

	while(clauses[bugvar][x]!=0){
		
		
	var trader;
	var facilitador=clauses[bugvar][x]
	trader=combinations[(Math.abs(facilitador)-1)]


	if(clauses[bugvar][x]<0){
		
		trader=!trader
		

	}
	

	booleanresult=booleanresult||trader
	
	
	x++
	}
	
resultclause[bugvar]=booleanresult

bugvar++;	
	
}
//AQUIIII
	var lasttest=0;
	var lasttestboo=true
	while(lasttest<aclauses){
		lasttestboo= lasttestboo && resultclause[lasttest]
		lasttest++
	}

if(lasttestboo==true){console.log("\n")
	console.log("Satisfable for respectively:")
	console.log(combinations)
	satisfabilitycont++;
	}
	

bugvar=0
resultclause.length=0
k++
}
if(satisfabilitycont==0){
console.log("Unsatisfable")
}
