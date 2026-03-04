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
