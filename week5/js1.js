function take() {
    let A00=Number(document.getElementById('in1').value);
    let A01=Number(document.getElementById('in2').value);
    let A02=Number(document.getElementById("in3").value);
    let A10=Number(document.getElementById("in4").value);
    let A11=Number(document.getElementById("in5").value);
    let A12=Number(document.getElementById("in6").value);
    let A20=Number(document.getElementById("in7").value);
    let A21=Number(document.getElementById("in8").value);
    let A22=Number(document.getElementById("in9").value);
    let det=A00*A11*A22+A01*A12*A20+A02*A10*A21-(A00*A12*A21+A01*A10*A22+A02*A11*A20);
    alert("The determinant is "+det);
}
let butt= document.querySelector('button');
butt.onclick=take;
