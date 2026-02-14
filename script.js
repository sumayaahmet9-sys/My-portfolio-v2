const codes = [
    "print('Hello from Python AI')",         // Python
    "System.out.println('Java Backend')",    // Java
    "std::cout << 'C++ Systems Access';",    // C++
    "Console.WriteLine('C# .NET Active');",  // C#
    "console.log('JS Interface Ready');",    // JS
    "<h1>HTML5 Structure OK</h1>",           // HTML
    "body { color: Neon-Brown; }"            // CSS
];

let i = 0;
const terminal = document.getElementById('terminal');

setInterval(() => {
    terminal.innerText = codes[i];
    i = (i + 1) % codes.length;
}, 2000);

