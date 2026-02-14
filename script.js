const projectData = [
    { name: "PYTHON", code: "print('Hello World: AI Logic Active')" },
    { name: "JAVA", code: "System.out.println('Backend Operational');" },
    { name: "C++", code: "std::cout << 'Hardware Interface Ready';" },
    { name: "C#", code: "Console.WriteLine('.NET Core Systems');" },
    { name: "JAVASCRIPT", code: "console.log('UI/UX Rendered Successfully');" },
    { name: "HTML", code: "<h1>System Structure: 100%</h1>" },
    { name: "CSS", code: ".body { theme: 'Neon-Earthy-Brown'; }" }
];

let index = 0;
const codeElem = document.getElementById('code-display');
const langElem = document.getElementById('lang-name');

function updateTerminal() {
    const current = projectData[index];
    langElem.innerText = current.name;
    codeElem.innerText = current.code;
    
    index = (index + 1) % projectData.length;
}

// Update every 3 seconds
setInterval(updateTerminal, 3000);
updateTerminal();
