const btn = document.querySelector('button');
btn.onclick=load;

function load() {
    document.querySelector("#loading").style.display="flex";
    btn.textContent="Loading";
    fetch("http://demo4296963.mockable.io/listCars").then(onResponse,error).then(onJsonReady);
}
function error() {
    document.getElementById("loading").style.display = "none";
    btn.textContent = "Some Error Occured";
    document.querySelector('#cards').textContent="";
}
function onResponse(response) {
    return response.json();
}
function onJsonReady(data) {
    this.carInfo = data;
    this.uploadcars();
}

function uploadcars() {
    const carContainer = document.querySelector('#cards');
    carContainer.innerHTML = '';
    const card = document.createElement('div');
    const ma = document.createElement('span');
    const mo = document.createElement('span');
    const pr = document.createElement('span');
    ma.innerHTML = "maker";
    mo.innerHTML = "model";
    pr.innerHTML = "price($)";
    card.className = "card";
    ma.className = "title";
    ma.style.width="90px";
    ma.style.marginLeft="10px";
    mo.className = "title";
    pr.className = "price";
    card.appendChild(ma);
    card.appendChild(mo);
    card.appendChild(pr);
    card.style.borderBottom="1px solid";
    carContainer.appendChild(card);
    for (const info of this.carInfo) {
        const car = new Car(carContainer, info.maker, info.model, info.price);
    }
    btn.textContent = "Items are loaded";
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
        ma.style.width="90px";
        ma.style.marginLeft="10px";
        mo.className = "title";
        pr.className = "price";
        card.appendChild(ma);
        card.appendChild(mo);
        card.appendChild(pr);
        carContainer.appendChild(card);
    }
}