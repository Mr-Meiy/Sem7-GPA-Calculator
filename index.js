var c1=3,c2=3,c3=2,c4=2,c5=2,c6=3,c7=3,c8=3,c9=2;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10;
var creditSum,gradeSum,gpaResult;

function calculateGPA() {
	var a1= document.getElementById("g1");
	g1=a1.options[a1.selectedIndex].value;
	var a2= document.getElementById("g2");
	g2=a2.options[a2.selectedIndex].value;
	var a3= document.getElementById("g3");
	g3=a3.options[a3.selectedIndex].value;
	var a4= document.getElementById("g4");
	g4=a4.options[a4.selectedIndex].value;
	var a5= document.getElementById("g5");
	g5=a5.options[a5.selectedIndex].value;
	var a6= document.getElementById("g6");
	g6=a6.options[a6.selectedIndex].value;
	var a7= document.getElementById("g7");
	g7=a7.options[a7.selectedIndex].value;
	var a8= document.getElementById("g8");
	g8=a8.options[a8.selectedIndex].value;
	var a9= document.getElementById("g9");
	g9=a9.options[a9.selectedIndex].value;

	if(g1==-1 || g2==-1 || g3==-1 || g4==-1 || g5==-1 || g6==-1 || g7==-1 || g8==-1 || g9==-1) {
		alert("Please fill all the details")
	}
	else {
		creditSum=c1+c2+c3+c4+c5+c6+c7+c8+c9;
		gradeSum=(c1*g1)+(c2*g2)+(c3*g3)+(c4*g4)+(c5*g5)+(c6*g6)+(c7*g7)+(c8*g8)+(c9*g9);
		gpaResult=gradeSum/creditSum;

		//alert(gpaResult.toFixed(2))
		document.getElementById("result1").innerText=gpaResult.toFixed(2);
		var res=document.getElementById("result2")
		res.classList.add("alert")
		res.classList.add("alert-success")
		document.getElementById("result2").innerText="Congratulations!! Your GPA is "+gpaResult.toFixed(2);
	}
}