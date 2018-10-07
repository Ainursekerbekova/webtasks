function f() {
    let namein=document.getElementById("name");
    let name=namein.value;
    let snamein=document.getElementById("surname");
    let sname=snamein.value;
    let facuin=document.getElementById("faculty");
    let facu=facuin.value;
    if (!name){
        namein.classList.add("wrong");
        return false;
    }
    if (!sname){
        snamein.classList.add("wrong");
        return false;
    }
    if (facu=="-1"){
        facuin.classList.add("wrong");
        return false;
    }
    else {
        namein.classList.remove("wrong");
        snamein.classList.remove("wrong");
        facuin.classList.remove("wrong");
        let tbody = document.getElementById("students");
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td3.classList.add("facu");
        td2.appendChild(document.createTextNode(sname));
        td1.appendChild(document.createTextNode(name));
        td3.appendChild(document.createTextNode(facu));
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);
        namein.value="";
        snamein.value="";
        facuin.value=-1;
    }
}
document.getElementById("addStudent").onclick=f;
if (!""){
    console.log("false")
}