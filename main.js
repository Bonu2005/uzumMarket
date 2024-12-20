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

// ***************************************************

let products = document.querySelector(".products")
let product = document.querySelector(".product")

async function asd() {
    let malumot = await axios.get("https://6763a75017ec5852cae97e83.mockapi.io/test/aaaaaaa")
    malumot.data.forEach((e) => {
        products.insertAdjacentHTML("beforeend", `
            <div class="product">
                <p style="display:none;" class="product-id">${e.id}</p>
                <img src="https://images.uzum.uz/crha8lpbjcvd8a76bsqg/original.jpg" alt="">
                <div class = "yozuv">
                <b><p class = "title">${e.title}</p></b>
                <p class = "sharh">(${e.sharh * 15} sharhlar)</p>
                <p class = "rasrochka">${Math.floor(e.price / 12 * 1000)} so'm/oyiga</p>
                <del><p class = "narxemas">${e.price * 1000 + e.price * 200} so'm</p></del>
                <b><p class = "narx">${e.price * 1000} so'm</p></b>
                </div>
            </div>`)
    });
}

asd()
