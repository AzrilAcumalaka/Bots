document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("command-input");
    const outputDiv = document.getElementById("output");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = inputField.value.trim();
            inputField.value = "";

            if (command) {
                printOutput(`> ${command}`);
                executeCommand(command);
            }
        }
    });

    function printOutput(text) {
        const newLine = document.createElement("div");
        newLine.textContent = text;
        outputDiv.appendChild(newLine);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    function executeCommand(command) {
        switch (command.toLowerCase()) {
            case "help":
                printOutput("Perintah yang tersedia: help, about, clear");
                break;
            case "about":
                printOutput("Ini adalah website console sederhana.");
                break;
            case "clear":
                outputDiv.innerHTML = "";
                break;
            default:
                printOutput("Perintah tidak dikenali. Ketik 'help' untuk daftar perintah.");
                break;
        }
    }
});