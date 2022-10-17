let simtabalesSistemosBalas = +prompt("Įveskite skaičių");
let x = simtabalesSistemosBalas;
console.log("raidinesSistemosBalas" + x);



function grazintiRaidinesSisemosBala(simtabalesSistemosBalas) {
    let raidinesSistemosBalas;
    switch (x) {
        case simtabalesSistemosBalas >= 90%
            raidinesSistemosBalas = "Grade A"; 
            break;
        case simtabalesSistemosBalas >= 80%
            raidinesSistemosBalas = "Grade B";
            break;
        case simtabalesSistemosBalas >= 70%
            raidinesSistemosBalas = "Grade C";
            break;
        case simtabalesSistemosBalas >= 60%
            raidinesSistemosBalas = "Grade D";
            break;
        case simtabalesSistemosBalas >= 40%
            raidinesSistemosBalas = "Grade E";
            break;
        case simtabalesSistemosBalas < 40%
            raidinesSistemosBalas = "Grade F";
        default:
            break;
    }
    return raidinesSistemosBalas;
}