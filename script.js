// =============================
// COPY FUNCTION CHUNG
// =============================
function copyText(text, message) {

if(navigator.clipboard){

navigator.clipboard.writeText(text)
.then(() => showStatus(message))
.catch(() => fallbackCopy(text, message));

}else{

fallbackCopy(text, message);

}

}

// =============================
// FALLBACK COPY
// =============================
function fallbackCopy(text, message){

const textarea = document.createElement("textarea");

textarea.value = text;
document.body.appendChild(textarea);

textarea.select();
document.execCommand("copy");

document.body.removeChild(textarea);

showStatus(message);

}

// =============================
// COPY JAVA IP
// =============================
function copyJavaIP(){

const ip = "gsvr3.play4fun.vn";

copyText(ip, "✅ Đã copy IP Java");

}

// =============================
// COPY BEDROCK IP
// =============================
function copyBedrockIP(){

const text = "gsvr3.play4fun.vn | Port: 25732";

copyText(text, "✅ Đã copy IP Bedrock");

}

// =============================
// HIỂN THỊ STATUS
// =============================
function showStatus(message){

const status = document.getElementById("status");

if(!status) return;

status.innerText = message;

setTimeout(() => {
status.innerText = "";
},3000);

}

// =============================
// LOAD BUG LIST
// =============================
async function loadBugs(){

const url = "https://docs.google.com/spreadsheets/d/1Fj00zntXVpCJndINUND5DIaJdyRThwl-S58Csb9tkIU/export?format=csv&gid=461089492";

try{

const response = await fetch(url);
const text = await response.text();

const rows = text.split("\n").slice(1);

let html = "";

rows.forEach(row => {

const cols = row.split(",");

if(cols.length >= 3){

const time = cols[0];
const bug = cols[1];
const status = cols[2];

html += `
<div class="bug-box">

<div class="bug-time">📅 ${time}</div>

<div class="bug-info">
<span class="bug-status">${status}</span>
<span class="bug-text">${bug}</span>
</div>

</div>
`;

}

});

if(html === ""){
html = "<h3>Chưa có bug nào</h3>";
}

const bugList = document.getElementById("bug-list");

if(bugList){
bugList.innerHTML = html;
}

}catch(err){

console.error("Không tải được bug list", err);

}

}

// =============================
// LOAD COMMAND LIST
// =============================
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

const commandList = document.getElementById("command-list");

if(commandList){
commandList.innerHTML = html;
}

}catch(err){

console.error("Không tải được command list", err);

}

}

// =============================
// LOAD PAGE
// =============================
document.addEventListener("DOMContentLoaded", () => {

loadBugs();
loadCommands();

});
