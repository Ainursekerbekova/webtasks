buttons=document.querySelectorAll("button")
for (let i=0;i<buttons.length;i++){
    buttons[i].onclick=f
}
function f() {
    event.currentTarget.parentNode.setAttribute('data-status','done')
    console.log("did")
}