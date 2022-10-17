let = +prompt("Įrašykite veiksmą");
let = +prompt("Įrašykite pirmą skaičių");
let = +prompt("Įrašykite anrą skaičių");
let x = "pirmas skaičius";
let y = "antras skaičius";
console.log("veiksmas" + rezultatas);

function veiksmas(x, y) {
    switch (veiksmas) {
        case "sudetis": 
            veiksmas = x + y;    
           break;
        case "atimtis":
            veiksmas = x - y;
        case "daugyba":
            veiksmas = x * y;
        case "dalyba":
            veiksmas = x / y;
        default:
            break;
    }
    return rezultatas;
}