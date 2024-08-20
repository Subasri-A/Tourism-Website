const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navbar.classList.toggle('open');
};
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    colorButton.style.backgroundColor = randomColor;
});

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.addEventListener("DOMContentLoaded", function () {
    displayGreeting();
});

function displayGreeting() {
    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    const message = `It's ${currentHour} o'clock. ${greeting}`;

    alert(message);
}
function addNumbers() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }


    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
}




