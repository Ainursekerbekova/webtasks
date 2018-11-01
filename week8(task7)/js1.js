var sport=document.querySelector("#sport");
var polit=document.querySelector("#politics");
var busi=document.querySelector("#bussiness");
sport.onclick=loads;
polit.onclick=loadp;
busi.onclick=loadb;

news=document.querySelector("#news");

function loadb(){
    fetch("http://demo4296963.mockable.io/news-bussiness").then(onSuccess,onError).then(onStreamProcessed);
}
function loads(){
    fetch("http://demo4296963.mockable.io/news-sport").then(onSuccess,onError).then(onStreamProcessed);
}
function loadp(){
    fetch("http://demo4296963.mockable.io/news-politics").then(onSuccess,onError).then(onStreamProcessed);
}
function onSuccess(response){
    console.log("sucses");
    return response.text();
}
function onError(error){
    console.log("error")
}
function onStreamProcessed(data){
    console.log(data);
    const datas = data.split('\n');
    document.getElementById("news").innerHTML=datas[0]+datas[1];
}