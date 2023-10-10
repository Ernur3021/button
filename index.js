// let count = 0; 
// let colors = ['red', 'yellow', 'green', 'oreng', 'aqua', 'purple', 'pink']
// function add() {
//     let color = Math.floor(Math.random() * colors.length)
//     count++;
//     document.getElementById("counter").innerHTML = count;
//     document.getElementById("counter").style.color = colors[color]
// }
// function sub() {
//     let color = Math.floor(Math.random() * colors.length)
//     count--;
//     document.getElementById("counter").innerText = count;
//     document.getElementById("counter").style.color = colors[color]
// }


// for(let i = 0; i <= 3; i++){
//     for(let y = i; y >= 0; y--) {
//         console.log(i+y);
//     }
// }


let id = 0;

function adItem() {
    id++
    const list = document.getElementById("list")
    document.getElementsByClassName("list")

    const div = document.createElement("h3");
    div.setAttribute("id", id);
    div.setAttribute("class", "big-text")

    let className = Math.floor(Math.random() * classes.length)
    div.

    div.innerText = `This is item ${id}`

    list.appendChild(div);
}
function subItem(){
    document.getElementById(id--).remove()
}
let count = 0;
let colors = ["black", "yellw", "green", "orange", "aqua", "purple", "pink"]