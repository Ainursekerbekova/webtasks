let countries = ["Kazakhstan","Russia","England","France"]
let dictCities = {"Kazakhstan":["Astana","Almaty","Karagandy","Shymkent"], "Russia":["Moscow","NewSibir'","Saint-Petersburg","Kazan"], "England":["London","EastBorn","Manchester","Liverpool"], "France":["Paris","Nicca","Lyon","Marseille"]}

let contr = document.querySelector("#countries")
for(i=0;i<countries.length;i++){
    let option_i = document.createElement('option')
    option_i.innerHTML = countries[i]
    contr.appendChild(option_i)
}

contr.onchange = f

function f(){
    let value = String(contr.value)
    document.querySelector("#cities").options.length = 1
    for(i=0;i<dictCities[value].length;i++){
        let city = document.createElement('option')
        city.innerHTML=String(dictCities[value][i])
        cities.appendChild(city)
    }
}