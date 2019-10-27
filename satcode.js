const fs = require("fs");

var linhas = fs.readFileSync('./hole1.cnf').toString();
var x = 0;

var arraes = [];
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

while(x <= arraes.length){
	if(arraes[x] != ("")){
		transpo[z] = arraes[x];
		z++;
	}
	x++;
}

arraes = transpo[0].replace("p", "").replace("cnf", "").replace("  ", "").split(" ");

var avariables = parseInt(arraes[0]);
var aclauses = parseInt(arraes[1]);

var clauses = [];
var variables = [];
x=0;

while(x < avariables){	
  variables[x] = false;	
	x++;
}

x=0;

while(x < transpo.length-2){		
  clauses[x]=transpo[x+1].split(" ");
  x++;
}

x=0;
console.log("{ clauses: [");

while(x < clauses.length){
	console.log(clauses[x]);
	x++;
}

console.log("] " + "\n" + "variables: " + "\n" + variables + "\n" + "}");

c = true;
b = false;
e = true;

console.log(b & c);

x = 0;
n = 3;

var combinacoes = new Array();

while (x < Math.pow(2, n)) {
	z=0;
   
  p = (parseInt(x++, 10).toString(2));

  if(p.length%n != 0){
	  while(p.length%n !=0){
	  	p = "0"+p
	  }
}

while(z < n){
	combinacoes[x-1]= p;
		z++;
	}
}
console.log(combinacoes);
