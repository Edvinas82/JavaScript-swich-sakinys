let x = +prompt ("Įveskite skaičių");
let pavadinimas = menesioPavadinimas (x);
console.log("menesio pavadinimas yra" + pavadinimas);

function gazintiMensioPavadinima(menesioSkaicius) {
    let menesioPavadinimas;
    switch (menesioSkaicius) {
        case 1:
            menesioPavadinimas = "sausis";
            break;
        case 2:
            menesioPavadinimas = "vasaris";
            break;
        case 3:
            menesioPavadinimas = "kovas";
            break;
        case 4:
            menesioPavadinimas = "balandis";
            break;
        case 5:
            menesioPavadinimas = "geguze";
            break;
        case 6:
            menesioPavadinimas = "birzelis";
            break;
        case 7:
            menesioPavadinimas = "liepa";
            break;
        case 8:
            menesioPavadinimas = "rugpjutis";
            break;
        case 9:
            menesioPavadinimas = "rugsejis";
            break;
        case 10:
            menesioPavadinimas = "spalis";
            break;
        case 11:
            menesioPavadinimas = "lapkritis";
            break;
        case 12:
            menesioPavadinimas = "gruodis";
            break;
        default:
            menesioPavadinimas = "netinkamas menesio pavadinimas"
            break;
    }
    return pavadinimas
}