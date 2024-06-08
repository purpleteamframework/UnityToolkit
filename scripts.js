/* scripts.js */
const tools = [
    { name: "Tool1", os: "windows", type: "enumeration" },
    { name: "Tool2", os: "linux", type: "exploitation" },
    // Add more tools as needed
];

const commands = [
    { command: "command1", os: "windows", type: "enumeration" },
    { command: "command2", os: "linux", type: "exploitation" },
    // Add more commands as needed
];

function filterTools() {
    const os = document.getElementById("os").value;
    const type = document.getElementById("attackType").value;

    const filteredTools = tools.filter(tool => 
        (os === "all" || tool.os === os) &&
        (type === "all" || tool.type === type)
    );

    const toolsList = document.getElementById("toolsList");
    toolsList.innerHTML = "";
    filteredTools.forEach(tool => {
        const toolItem = document.createElement("div");
        toolItem.textContent = `${tool.name} (${tool.os}, ${tool.type})`;
        toolsList.appendChild(toolItem);
    });

    const filteredCommands = commands.filter(command => 
        (os === "all" || command.os === os) &&
        (type === "all" || command.type === type)
    );

    const commandsList = document.getElementById("commandsList");
    commandsList.innerHTML = "";
    filteredCommands.forEach(command => {
        const commandItem = document.createElement("div");
        commandItem.textContent = `${command.command} (${command.os}, ${command.type})`;
        commandsList.appendChild(commandItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    filterTools();
});
