var students = [
    {
        Name:"Bamigboye Christiana Temitope",
        Level:300,
        Grade: [54,63],
        Age: 25,
        Gender:"female",
    },
    {
        Name:"Duada Yohanna Awari",
        Level:300,
        Grade: [67,87],
        Age: 23,
        Gender:"male",
       
    },
    {
        Name:"Elizabeth John",
        Level:400,
        Grade: [56,67],
        Age: 27,
        Gender:"female",
        
    },
    
];

var table=document.getElementById("table");
var thead = document.createElement("thead");
var trHead = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th"); 
var th3 = document.createElement("th");
var th4 = document.createElement("th");
var th5 = document.createElement("th");

var Name = document.getElementById("name");
var level = document.getElementById("Level");
var grade = document.getElementById("Grade");
var Age = document.getElementById("Age");
var Gender = document.getElementById("Gender");



function tableHead(){
    th1.innerHTML = "Name";
    th2.innerHTML = "Level";
    th3.innerHTML = "Grade";
    th4.innerHTML = "Age";
    th5.innerHTML = "Gender";
    trHead.append(th1,th2,th3,th4,th5);
    thead.append(trHead);
    table.appendChild(thead);
}

var createTable =()=>{
    tableHead();
    students.forEach((student)=>{

        var tr=document.createElement("tr");
        
        
        var td1 = document.createElement("td");
        td1.style.backgroundColor="#91dcc5";
        td1.style.textAlign="center";
        td1.innerHTML = student.Name;
        var td2 = document.createElement("td");
        td2.style.backgroundColor="#91dcc5";
        td2.style.textAlign="center";
        td2.innerHTML = student.Level;
        var td3 = document.createElement("td");
        td3.style.backgroundColor="#91dcc5";
        td3.style.textAlign="center";
        td3.innerHTML = student.Grade;
        var td4 = document.createElement("td");
        td4.style.backgroundColor="#91dcc5";
        td4.style.textAlign="center";
        td4.innerHTML = student.Age;
        var td5 = document.createElement("td");
        td5.style.backgroundColor="#91dcc5";
        td5.style.textAlign="center";
        td5.innerHTML = student.Gender;
        
        tr.append(td1,td2,td3,td4,td5);
        
        table.appendChild(tr);
        })

}


createTable();





var Name=document.getElementById("name");
var Level=document.getElementById("level");
var Grade=document.getElementById("grade");
var Age=document.getElementById("age");
var Gender=document.getElementById("gender");

document.getElementById("btn").addEventListener("click",()=>{
    //console.log(Name.value, level.value,grade.value,age.value,gender.value);
    table.innerHTML = "";
    var student ={
        Name: Name.value,
        Level:Level.value,
        Grade: Grade.value,
        Age: Age.value,
        Gender: Gender.value
    }
    students.push(student);
    console.log(students);
    createTable();
});




