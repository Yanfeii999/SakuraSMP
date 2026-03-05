// ===== LOAD COMMANDS =====

async function loadCommands(){

const url = "https://docs.google.com/spreadsheets/d/1z1fEjK4tOXG47Jpi3YYg4UXIxLKNcqB5ULUd3K1UfOI/export?format=csv";

try{

const response = await fetch(url);
const text = await response.text();

const rows = text.split("\n").slice(1);

let html = "";

rows.forEach(row => {

const cols = row.split(",");

if(cols.length >= 2){

const command = cols[0];
const description = cols[1];

html += `
<div class="cmd-box">
<div class="cmd-name">/${command}</div>
<div class="cmd-desc">${description}</div>
</div>
`;

}

});

if(html === ""){
html = "<h3>Chưa có lệnh nào</h3>";
}

const list = document.getElementById("command-list");

if(list){
list.innerHTML = html;
}

}catch(err){
console.error("Không tải được danh sách lệnh", err);
}

}

document.addEventListener("DOMContentLoaded", loadCommands);
document.addEventListener("DOMContentLoaded", loadBugs);
