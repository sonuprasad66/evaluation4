// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myform)
var dataarr= JSON.parse(localStorage.getItem("schedule")) || [];

function myform(){
event.preventDefault();

var obj = {
    matchnum: document.querySelector("#matchNum").value,
    teama: document.querySelector("#teamA").value,
    teamb: document.querySelector("#teamB").value,
    date: document.querySelector("#date").value,
    venue: document.querySelector("#venue").value,
    
}
dataarr.push(obj)
console.log(dataarr)

localStorage.setItem("schedule", JSON.stringify(dataarr))
window.location.href="matches.html"
}
