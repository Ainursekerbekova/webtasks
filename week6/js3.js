let cars = [{"price":20000,"image_url":"car1.jpeg"},{"price":25000,"image_url":"car2.jpg"},{"price":15000,"image_url":"car3.jpg"},{"price":30000,"image_url":"car4.jpg"}]
let basket="basket.png"
let dollar="dollar.png"

for (i = 0; i < cars.length; i++) {
    let image = document.createElement('img')
    image.src = cars[i]["image_url"]
    style = image.style
    style.width = "300px"
    style.height = "200px"
    style.margin = "5px"
    image.setAttribute("data-credits",String(cars[i]["price"]))
    document.querySelector('#card'+(i+1)).appendChild(image)
}
for(i=0;i<cars.length;i++){
    let image=document.createElement('img')
    image.src=basket
    style = image.style
    style.width = "50px"
    style.height = "30px"
    style.margin = "5px"
    document.querySelector('#basket'+(i+1)).appendChild(image)
}



let imaged1=document.querySelector('#basket1')
let image1=imaged1.querySelector('img')
image1.onclick=f1

let imaged2=document.querySelector('#basket2')
let image2=imaged2.querySelector('img')
image2.onclick=f2

let imaged3=document.querySelector('#basket3')
let image3=imaged3.querySelector('img')
image3.onclick=f3

let imaged4=document.querySelector('#basket4')
let image4=imaged4.querySelector('img')
image4.onclick=f4





function f1() {
    switch(image1.src.substring(image1.src.lastIndexOf('/')+1,image1.src.length)){
        case basket:
            image1.src=dollar
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[0]["price"]
            break
        case dollar:
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[0]["price"]
            image1.src=basket
            break
    }
}
function f2() {
    switch(image2.src.substring(image2.src.lastIndexOf('/')+1,image2.src.length)){
        case basket:
            image2.src=dollar
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[1]["price"]
            break
        case dollar:
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[1]["price"]
            image2.src=basket
            break
    }
}
function f3() {
    switch(image3.src.substring(image3.src.lastIndexOf('/')+1,image3.src.length)){
        case basket:
            image3.src=dollar
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[2]["price"]
            break
        case dollar:
            image3.src=basket
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[2]["price"]
            break
    }
}
function f4() {
    switch(image4.src.substring(image4.src.lastIndexOf('/')+1,image4.src.length)){
        case basket:
            image4.src=dollar
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[3]["price"]
            break
        case dollar:
            image4.src=basket
            document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1
            document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[3]["price"]
            break
    }
}