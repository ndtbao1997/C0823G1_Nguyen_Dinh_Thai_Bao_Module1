function add() {
    let Number1 = +document.getElementById("Number1").value;
    let Number2 = +document.getElementById("Number2").value;
    let Addition;
    Addition = (Number1 + Number2);
    document.getElementById("ketqua").innerHTML= Addition;
}
function sub() {
    let Number1 = +document.getElementById("Number1").value;
    let Number2 = +document.getElementById("Number2").value;
    let Subtraction;
    Subtraction = (Number1 - Number2);
    document.getElementById("ketqua").innerHTML= Subtraction;
}
function mul() {
    let Number1 = +document.getElementById("Number1").value;
    let Number2 = +document.getElementById("Number2").value;
    let Multiplication;
    Multiplication = (Number1 * Number2);
    document.getElementById("ketqua").innerHTML= Multiplication;
}
function divi() {
    let Number1 = +document.getElementById("Number1").value;
    let Number2 = +document.getElementById("Number2").value;
    let Division;
    Division = (Number1 / Number2);
    document.getElementById("ketqua").innerHTML= Division;
}