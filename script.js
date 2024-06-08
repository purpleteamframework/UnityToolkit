document.addEventListener('DOMContentLoaded', function () {
    const commands = [
        { type: 'detection', os: 'windows', command: 'Get-WinEvent -LogName Security', description: 'Retrieve security logs on Windows.' },
        { type: 'detection', os: 'linux', command: 'tail -f /var/log/auth.log', description: 'Monitor authentication logs on Linux.' },
        { type: 'response', os: 'windows', command: 'Stop-Process -Name notepad', description: 'Stop a process by name on Windows.' },
        { type: 'response', os: 'linux', command: 'pkill -f httpd', description: 'Kill a process by name on Linux.' },
        { type: 'mitigation', os: 'windows', command: 'New-NetFirewallRule -DisplayName "Block HTTP" -Direction Outbound -Action Block -Protocol TCP -LocalPort 80', description: 'Block outbound HTTP traffic on Windows.' },
        { type: 'mitigation', os: 'linux', command: 'iptables -A OUTPUT -p tcp --dport 80 -j DROP', description: 'Block outbound HTTP traffic on Linux.' },
        { type: 'recovery', os: 'windows', command: 'wbadmin start recovery -version:03/26/2024-06:00 -itemType:File -items:C:\\Users\\admin\\Documents\\report.doc', description: 'Recover a specific file on Windows.' },
        { type: 'recovery', os: 'linux', command: 'rsync -av /backup/report.doc /home/user/Documents/', description: 'Recover a specific file on Linux.' }
    ];

    const filterType = document.getElementById('filter-type');
    const filterOs = document.getElementById('filter-os');
    const commandsList = document.querySelector('.commands-list');

    function renderCommands() {
        const type = filterType.value;
        const os = filterOs.value;
        commandsList.innerHTML = '';

        const filteredCommands = commands.filter(command => {
            return (type === 'all' || command.type === type) && (os === 'all' || command.os === os);
        });

        filteredCommands.forEach(command => {
            const commandDiv = document.createElement('div');
            commandDiv.className = 'command';
            commandDiv.innerHTML = `
                <h3>${command.command}</h3>
                <p>${command.description}</p>
                <p><strong>OS:</strong> ${command.os}</p>
                <p><strong>Type:</strong> ${command.type}</p>
            `;
            commandsList.appendChild(commandDiv);
        });
    }

    filterType.addEventListener('change', renderCommands);
    filterOs.addEventListener('change', renderCommands);

    renderCommands();
});
