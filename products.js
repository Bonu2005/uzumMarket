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
