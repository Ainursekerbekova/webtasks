const btn = document.querySelectorAll('button');
btn[0].onclick=load;
document.getElementById("sortByMaker").onclick = function() {
    sCars(sname);
};
document.getElementById("sortByPrice").onclick = function() {
    sCars(sprice);
};


function load() {
    document.getElementById("loading").style.display = "flex";
    btn[0].textContent = "Loading";
    fetch("http://demo4296963.mockable.io/listCars").then(onResponse,error).then(onJsonReady);
}
function error() {
    document.getElementById("loading").style.display = "none";
    btn[0].textContent = "Some Error Occured";
}
function onJsonReady(data) {
    this.carInfo = data;
    this.printCars();
}
function onResponse(response) {
    return response.json();
}


const sprice = function(a, b) {
    return a.price-b.price;
};
const sname=function(a, b) {
    const A=a.maker.toUpperCase();
    const B=b.maker.toUpperCase();
    if (A < B) { return -1; }
    if (A > B) { return 1; }
    return 0;
};
function sCars(sortFunc) {
    this.carInfo.sort(sortFunc);
    this.uploadcars();
}



class Car {
    constructor(carContainer, maker, model, price) {
        const card = document.createElement('div');
        const ma = document.createElement('span');
        const mo = document.createElement('span');
        const pr = document.createElement('span');
        ma.innerHTML = maker;
        mo.innerHTML = model;
        pr.innerHTML = price;
        card.className = "card";
        ma.className = "title";
        mo.className = "title";
        pr.className = "price";
        card.appendChild(ma)
        card.appendChild(mo)
        card.appendChild(pr);
        carContainer.appendChild(card);
    }
}
function uploadcars() {
    const carContainer=document.querySelector('#cards');
    carContainer.innerHTML='';
    const card=document.createElement('div');
    const ma=document.createElement('span');
    const mo=document.createElement('span');
    const pr=document.createElement('span');
    ma.innerHTML="maker";
    mo.innerHTML="model";
    pr.innerHTML="price($)";
    card.className="card";
    ma.className="title";
    mo.className="title";
    pr.className="price";
    card.appendChild(ma);
    card.appendChild(mo);
    card.appendChild(pr);
    card.style.borderBottom="1px solid";
    carContainer.appendChild(card);
    for(const info of this.carInfo) {
        const car=new Car(carContainer, info.maker, info.model, info.price);
    }
    btn[0].textContent="Items are loaded";
}
