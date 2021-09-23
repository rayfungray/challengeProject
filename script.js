var whiteBox = document.getElementsByClassName("text-with-box");
var text = document.getElementsByClassName("text");


document.querySelector('.hit-detail').addEventListener('click',function(){
    whiteBox[0].classList.add('active');
    text[0].classList.add('close');
})

document.querySelector('.close-btn').addEventListener('click',function(){
    whiteBox[0].classList.remove('active');
    text[0].classList.remove('close');
})
