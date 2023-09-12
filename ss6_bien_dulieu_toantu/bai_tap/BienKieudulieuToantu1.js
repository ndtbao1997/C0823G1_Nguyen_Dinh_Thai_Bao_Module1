function Avrge() {
    let M = +document.getElementById("maths").value;
    let C = +document.getElementById("chemicals").value;
    let B = +document.getElementById("biology").value;
    let Result;
    Result = "Điểm trung bình là: " + ((M + C + B) / 3) ;
    document.getElementById("result").innerHTML = Result;
}