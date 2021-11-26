function addnewfield() {
let newnode=document.createElement("textarea");
newnode.classList.add("form-control");
newnode.classList.add("weField");
newnode.classList.add("mt-2");
newnode.setAttribute("rows",3);
newnode.setAttribute("placeholder","Add another work experience here...")

let weob=document.getElementById("we");
let weaddbuttonob=document.getElementById('weaddbutton');
weob.insertBefore(newnode,weaddbuttonob);
}

function addnewAQfield() {
let newnode=document.createElement("textarea");
newnode.classList.add("form-control");
newnode.classList.add("aqField");
newnode.classList.add("mt-2");
newnode.setAttribute("rows",3);
newnode.setAttribute("placeholder","Add another academic qualification here...")

let weob=document.getElementById("aq");
let aqaddbuttonob=document.getElementById('aqaddbutton');
weob.insertBefore(newnode,aqaddbuttonob);
}
function generatecv()
{
	var y=document.getElementById("x")
	y.innerHTML="HI";
/*let nameField1=document.getElementById("namefield").value;
name1.innerHTML=nameField1;
name2.innerHTML=nameField1;
let contactField=document.getElementById("contactfield").value;
contact1.innerHTML=contactField;
let addressField=document.getElementById("addressfield").value;
address1.innerHTML=addressField;

let facebook=document.getElementById("fbfield").value;
fb.innerHTML=facebook;
let instagram=document.getElementById("instafield").value;
ins.innerHTML=instagram;
let Linked=document.getElementById("linkedfield").value;
lin.innerHTML=Linked;

let objec=document.getElementById("career").value;
objective1.innerHTML=objec;

let wes=document.getElementsByClassName("weField")
let str=""
for(let e of wes)
{
str+=`<li>${e.value}</li>`;
}
document.getElementById("weT").innerHTML=str;

let acex=document.getElementsByClassName("aqField")
let str1=""
for(let a of acex)
{
str1+=`<li>${a.value}</li>`;
}
document.getElementById("aqT").innerHTML=str1;


document.getElementById("cv-form").style.display="none"
document.getElementById("cv-template").style.display="block"
*/
}