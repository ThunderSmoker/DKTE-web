const cart = document.getElementById('cart');
const cartBox  = document.getElementById('cartBox');

const mainImg =document.getElementById('main-img')
const box0 =document.getElementById('box0')
const box1 =document.getElementById('box1')
const box2 =document.getElementById('box2')
const box3 =document.getElementById('box3')

const box0Div =document.getElementById('box0-div')
const box1Div =document.getElementById('box1-div')
const box2Div =document.getElementById('box2-div')
const box3Div =document.getElementById('box3-div')

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const score = document.getElementById('score')


plus.onclick = () => {
    score.innerHTML++;
}
minus.onclick = () => {
    if(score.innerHTML === '0'){
        alert('No item in the cart to reduce')
        return;
    }
    score.innerHTML--;
}



// box1.style.border = '2px solid black'
box1Div.onclick = () =>{
    mainImg.src = box1.src
}
box0Div.onclick = () =>{
    mainImg.src = box0.src
}
box2Div.onclick = () =>{
    mainImg.src = box2.src
}
box3Div.onclick = () =>{
    mainImg.src = box3.src
}

let flag = true;
cart.onclick = () => {
    if(flag){
        cartBox.style.display = 'flex'
        flag = false;
    }
    else{
        cartBox.style.display = 'none'
        flag = true;
    }
}

const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
let buttonClicked = false;
star1.onclick = () =>{
    buttonClicked = true;
    star1.src = "images/icons8-star-48.png";
}
star1.onmouseover = () =>{
    star1.src = "images/icons8-star-48.png";
}
star2.onmouseover = () =>{
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
}
star3.onmouseover = () =>{
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
}
star4.onmouseover = () =>{
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
    star4.src = "images/icons8-star-48.png";
}
star5.onmouseover = () =>{
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
    star4.src = "images/icons8-star-48.png";
    star5.src = "images/icons8-star-48.png";
}
star1.onmouseleave = () =>{
    if(buttonClicked == false)
        star1.src = "images/icons8-star-50.png";
}
star2.onmouseleave = () =>{
    if(buttonClicked == false){
        star1.src = "images/icons8-star-50.png";
        star2.src = "images/icons8-star-50.png";

    }
}
star3.onmouseleave = () =>{
    if(buttonClicked == false){
        star1.src = "images/icons8-star-50.png";
        star2.src = "images/icons8-star-50.png";
        star3.src = "images/icons8-star-50.png";
    }
}
star4.onmouseleave = () =>{
    if(buttonClicked == false){
        star1.src = "images/icons8-star-50.png";
        star2.src = "images/icons8-star-50.png";
        star3.src = "images/icons8-star-50.png";
        star4.src = "images/icons8-star-50.png";
    }
}
star5.onmouseleave = () =>{
    if(buttonClicked == false){
        star1.src = "images/icons8-star-50.png";
        star2.src = "images/icons8-star-50.png";
        star3.src = "images/icons8-star-50.png";
        star4.src = "images/icons8-star-50.png";
        star5.src = "images/icons8-star-50.png";
    }
}
star2.onclick = () =>{
    buttonClicked = true;
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
}
star3.onclick = () =>{
    buttonClicked = true;
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
}
star4.onclick = () =>{
    buttonClicked = true;
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
    star4.src = "images/icons8-star-48.png";
}
star5.onclick = () =>{
    buttonClicked = true;
    star1.src = "images/icons8-star-48.png";
    star2.src = "images/icons8-star-48.png";
    star3.src = "images/icons8-star-48.png";
    star4.src = "images/icons8-star-48.png";
    star5.src = "images/icons8-star-48.png";
}

const count = document.getElementById('count');
const buy = document.getElementById('buy');
const buy2 = document.getElementById('buy2');
const center = document.getElementById('center');
const img = document.getElementById('img');
const cartContent0 = document.getElementById('cartContent0');
buy.onclick= () => {
    count.innerHTML = score.innerHTML;
    console.log(count.innerHTML);
    count.style.display = 'flex';
    buy2.style.display = 'flex';
    cartContent0.style.display = 'none';
    center.style.display = 'flex';
    // img.src = "images/1.jpg"; 
    center.innerHTML = `  <img src="images/1.jpg" id="img" height="55rem" alt="">Autumn Limited Edition Sneakers <br>
    $125 X ${score.innerHTML} = ${125*score.innerHTML}<img class = "del" id = "del" src="images/icon-delete.svg" alt="">`
}
center.onclick = () => {
    cartContent0.style.display = 'flex';
    center.style.display = 'none';
    buy2.style.display =  'none';
}

del.style.border = '2px solid black'

