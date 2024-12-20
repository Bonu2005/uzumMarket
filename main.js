let btn_next=document.querySelector(".btn-next")
let btn_prev=document.querySelector(".btn-prev")
let img=document.querySelectorAll(".slider img")
console.log(img);
let i=0
console.log(btn_next);
btn_next.onclick=function(){
    img[i].classList.remove("active");
    i++
    if(i>=img.length){
        i=0
    }
    img[i].classList.add("active")
}
btn_prev.onclick=function(){
    img[i].classList.remove("active");
    i--
    if(i<0){
        i=img.length-1
    }
    img[i].classList.add("active")
}
function slideNext() {
    img[i].classList.remove("active");
    i++;
    if (i >= img.length) {
        i = 0;
    }
    img[i].classList.add("active");
    console.log(i);
}
setInterval(slideNext,3000);
onmouseover;
onmouseout;