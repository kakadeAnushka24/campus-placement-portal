const defaultApps=[
{id:1,title:'Software Engineer',co:'Google',icon:'🔍',status:'Interview',ctc:'₹28 LPA'},
{id:2,title:'Frontend Developer',co:'Flipkart',icon:'🛒',status:'Applied',ctc:'₹18 LPA'},
{id:3,title:'Data Analyst',co:'Deloitte',icon:'📊',status:'Offered',ctc:'₹12 LPA'}
];

let statusTab="all";

function getApps(){
return JSON.parse(localStorage.getItem("apps")||"[]").length?
JSON.parse(localStorage.getItem("apps")):
defaultApps;
}

function saveApps(apps){
localStorage.setItem("apps",JSON.stringify(apps));
}

function renderStatusApps(){

const apps=getApps();
const list=document.getElementById("statusAppsList");

list.innerHTML=apps.map(a=>`

<div class="app-row">

<div>
<b>${a.icon} ${a.title}</b>
<br>
${a.co} • ${a.ctc}
<br>
Status: ${a.status}
</div>

<div>
<button onclick="removeApp(${a.id})">Remove</button>
</div>

</div>

`).join("");

}

function removeApp(id){

let apps=getApps();
apps=apps.filter(a=>a.id!==id);
saveApps(apps);
renderStatusApps();

}

function openAddModal(){
document.getElementById("modalOverlay").classList.remove("hidden");
}

function closeAddModal(){
document.getElementById("modalOverlay").classList.add("hidden");
}

function addApplication(){

const title=document.getElementById("addTitle").value;
const co=document.getElementById("addCo").value;
const ctc=document.getElementById("addCtc").value;
const status=document.getElementById("addStatus").value;
const icon=document.getElementById("addIcon").value||"💼";

let apps=getApps();

apps.push({
id:Date.now(),
title,
co,
ctc,
status,
icon
});

saveApps(apps);

closeAddModal();

renderStatusApps();

}

document.addEventListener("DOMContentLoaded",renderStatusApps);