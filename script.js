// ===== COPY FUNCTION CHUNG =====
function copyText(text, successMessage) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showStatus(successMessage))
            .catch(() => fallbackCopy(text, successMessage));
    } else {
        fallbackCopy(text, successMessage);
    }
}

// ===== FALLBACK nếu clipboard lỗi =====
function fallbackCopy(text, successMessage) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showStatus(successMessage);
}

// ===== COPY JAVA =====
function copyJavaIP() {
    const ip = "gsvr3.play4fun.vn";
    copyText(ip, "✅ Đã copy IP Java:");
}

// ===== COPY BEDROCK =====
function copyBedrockIP() {
    const text = "gsvr3.play4fun.vn | Port: 25732";
    copyText(text, "✅ Đã copy IP Bedrock");
}

// ===== HIỂN THỊ STATUS =====
function showStatus(message) {
    const status = document.getElementById("status");
    status.innerText = message;

    setTimeout(() => {
        status.innerText = "";
    }, 3000);
}
// ===== LOAD BUG TỪ GOOGLE SHEETS =====

async function loadBugs(){

const url = "https://docs.google.com/spreadsheets/d/14lWrKRb88aBJ_GB5j5O-1fLUE7fVCPQv-HOulLU1U4s/pub?output=csv";

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

html += `<p>📅 ${time} - ${status} : ${bug}</p>`;

}

});

if(html === ""){
html = "<h3>Chưa có bug nào cần fix</h3>";
}

const bugList = document.getElementById("bug-list");

if(bugList){
bugList.innerHTML = html;
}

}catch(err){

console.error("Không tải được bug list", err);

}

}

// chạy khi trang load
document.addEventListener("DOMContentLoaded", loadBugs);
