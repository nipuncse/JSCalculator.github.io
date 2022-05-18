var num1,num2;

function getInput() {

	const a = parseInt(document.getElementById("num1").value,10);
	const b = parseInt(document.getElementById("num2").value,10);
	return [a,b];
}

function sum(){
	const [a,b] = getInput();
	console.log(a,b);
	let add = a + b;
    document.getElementById("res").innerHTML=add;
}

function difference(){
	const [a,b] = getInput();
	console.log(a,b);
	let dif=a-b;
    document.getElementById("res").innerHTML=dif;
}
function product(){
	const [a,b] = getInput();
	console.log(a,b);
	let pro=a*b;
    document.getElementById("res").innerHTML=pro;
}
function division(){
	const [a,b] = getInput();
	console.log(a,b);
	let div=a/b;
    document.getElementById("res").innerHTML=div;
}

document.getElementById("sum").addEventListener("click",sum);
document.getElementById("difference").addEventListener("click",difference);
document.getElementById("product").addEventListener("click",product);
document.getElementById("div").addEventListener("click",division);



// console.log(num1);
// console.log(num2);

