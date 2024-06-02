//var toonuud = [5,38,5,29,3];
//var test=["text",7,true,false,null,43.5];
//console.log(toonuud);
//console.log(toonuud[0])
//console.log("length:"+toonuud.length);
//console.log(toonuud[toonuud.length-1])
//console.log("length:"+test.length)
//console.log(test[test.length-1])
//.log("length:"+test.length)
//.log(test[0])
//for(i=0;i<=toonuud.length-1;i++){
	//console.log(toonuud[i]);
//}
var numbers = [3,6,34,8,2];
console.log(numbers[0]*numbers[numbers.length-1]);
for(i=0;i<=numbers.length-1;i++){
	if(numbers[i]%2==0){
		console.log("tegsh:"+numbers[i])
	}else{
		console.log("sondgoi:"+numbers[i])
	}
}
var urjver=1;
var num2 = [2,5,42,7,78,4,8,5,7,6]
for(i=0;i<=num2.length-1;i++){
	urjver = urjver * num2[i];
}
console.log(nemeh);
var nemeh=1
for(i=0;i<=num2.length-1;i++){
	nemeh = nemeh  + num2[i];
}
console.log(nemeh);
var ungu = ["Green","Red","Yellow","Blue","Pink"];
var body = document.getElementsByTagName('body')[0];
var i=-1;
function color(){
	i++;
	if(i>ungu.length-1){
        i = 0
    }
	body.style.backgroundColor=ungu[i];
}
function butsah(){
    i--;
	if(i<0){
		i= ungu.length-1;
	}
    body.style.backgroundColor=ungu[i]
}
var up;
function auto(){
	i++;
	if(i>ungu.length-1){
        i = 0
    }
	body.style.backgroundColor=ungu[i];
	up = setTimeout(auto,1000)
}	
function stop(){
	clearTimeout(up);
}