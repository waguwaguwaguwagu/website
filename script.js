let selectedRow = null;

function addStudent(){

let name=document.getElementById("name").value;
let course=document.getElementById("course").value;
let year=document.getElementById("year").value;

if(name==""||course==""||year==""){
alert("Please fill all fields");
return;
}

let table=document.getElementById("studentTable");
let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=course;
row.insertCell(2).innerHTML=year;

row.insertCell(3).innerHTML=
`<button class="edit" onclick="editStudent(this)">Edit</button>
<button class="delete" onclick="deleteStudent(this)">Delete</button>`;

clearForm();
}

function deleteStudent(btn){

if(confirm("Delete this student?")){
let row=btn.parentNode.parentNode;
row.remove();
}

}

function editStudent(btn){

selectedRow=btn.parentNode.parentNode;

document.getElementById("name").value=selectedRow.cells[0].innerHTML;
document.getElementById("course").value=selectedRow.cells[1].innerHTML;
document.getElementById("year").value=selectedRow.cells[2].innerHTML;

document.querySelector(".add").innerText="Update Student";
document.querySelector(".add").setAttribute("onclick","updateStudent()");
}

function updateStudent(){

selectedRow.cells[0].innerHTML=document.getElementById("name").value;
selectedRow.cells[1].innerHTML=document.getElementById("course").value;
selectedRow.cells[2].innerHTML=document.getElementById("year").value;

clearForm();

document.querySelector(".add").innerText="Add Student";
document.querySelector(".add").setAttribute("onclick","addStudent()");
}

function clearForm(){
document.getElementById("name").value="";
document.getElementById("course").value="";
document.getElementById("year").value="";
}
Jaja
