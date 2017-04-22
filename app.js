var StudentName = document.getElementById("StudentName");
StudentName.innerHTML = prompt("Enter your student Name");


var FatherName = document.getElementById("FatherName");
FatherName.innerHTML = prompt("Enter your Father Name");


var RollNo = document.getElementById("RollNo");
RollNo.innerHTML = prompt("Enter your Roll No ");



varAge = document.getElementById("Age");
Age.innerHTML = prompt("Enter your Age");



var Institute = document.getElementById("Institute");
Institute.innerHTML = prompt("Enter your Institute");



var subject1 = document.getElementById("subject1");
var sub1 = prompt("Enter your MArks Subject 1");
subject1.innerHTML = sub1;

var subject2 = document.getElementById("subject2");
var sub2 = prompt("Enter your MArks Subject 2");
subject2.innerHTML = sub2;

var subject3 = document.getElementById("subject3");
var sub3 = prompt("Enter your Marks Subject 3");
subject3.innerHTML = sub3

var subject4 = document.getElementById("subject4");
var sub4 = prompt("Enter your Marks Subject 4");
subject4.innerHTML = sub4;

var subject5 = document.getElementById("subject5");
var sub5 = prompt("Enter your Marks Subject 5");
subject5.innerHTML = sub5;





var persubject1 = document.getElementById("persubject1");
var su1 = parseInt(sub1);
var total = 500;
var tobt = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5);
var per1 = (tobt / total) * 100;
var pr = document.getElementById("per1");
pr.innerHTML = 'Percentage :' + per1;


var to = document.getElementById("total");
to.innerHTML = total;

var ob = document.getElementById("ob");
ob.innerHTML = tobt


var grasubject1 = document.getElementById("grasubject1");
var grade;
subject1 = grade;
if (per1 > 80) {
    grasubject1.innerHTML = "Grade : A+";
} else if (per1 > 70 && per1 < 80) {
    grasubject1.innerHTML = "Grade :A";
} else if (per1 > 60 && per1 < 70) {
    grasubject1.innerHTML = "Grade :B";
} else if (per1 > 50 && per1 < 60) {
    grasubject1.innerHTML = "Grade :C";
} else if (per1 > 40 && per1 < 50) {
    grasubject1.innerHTML = "Grade :D";
} else {

    grasubject1.innerHTML = "Grade :Failed";
}