let count = 0; 
let colors = ['red', 'yellow', 'green', 'oreng', 'aqua', 'purple', 'pink']
function add() {
    let color = Math.floor(Math.random() * colors.length)
    count++;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.color = colors[color]
}
function sub() {
    let color = Math.floor(Math.random() * colors.length)
    count--;
    document.getElementById("counter").innerText = count;
    document.getElementById("counter").style.color = colors[color]
}