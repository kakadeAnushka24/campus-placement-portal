
function applyJob(company){

alert("Application sent to " + company);

}



function filterJobs(type){

let jobs=document.querySelectorAll(".job-card");

jobs.forEach(function(job){

if(type==="all"){
job.style.display="block";
}

else if(job.classList.contains(type)){
job.style.display="block";
}

else{
job.style.display="none";
}

});

}



let search=document.getElementById("searchInput");

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

let jobs=document.querySelectorAll(".job-card");

jobs.forEach(function(job){

let text=job.innerText.toLowerCase();

if(text.includes(value)){
job.style.display="block";
}

else{
job.style.display="none";
}

});

});