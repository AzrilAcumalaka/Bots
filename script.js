const term = new Terminal();
const fitAddon = new FitAddon.FitAddon();
term.loadAddon(fitAddon);
term.open(document.getElementById("terminal"));
fitAddon.fit();

const GITHUB_API = "https://api.github.com";
let username = "USERNAME_GITHUB";  // Ganti dengan username GitHub-mu

async function fetchRepos() {
    const response = await fetch(`${GITHUB_API}/users/${username}/repos`);
    const repos = await response.json();
    term.writeln("Repositori GitHub:");
    repos.forEach(repo => term.writeln("- " + repo.name));
}

term.writeln("Selamat datang di GitHub Web Terminal!");
term.writeln("Ketik 'repos' untuk melihat repositori Anda.");
term.writeln("------------------------------------------------");

term.onData(async (data) => {
    if (data.trim() === "repos") {
        await fetchRepos();
    } else {
        term.writeln("Perintah tidak dikenali.");
    }
});