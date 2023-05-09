const flowers = [
    {
         id : 0,
        title: "Colorful Tulips",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
        price: 350
    },
    {
        id : 1,
        title: "Wild Cactus",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
        price: 159
    },
    {  id : 2,
        title: "Wild Rose",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
        price: 259

    },
    {
        id : 3,
        title: "Summer Savory",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
        price: 259
    },
    {
        id : 4,
        title: "Rock SoapWort",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
        price: 259
    },
    {
        id : 5,
        title: "Scarlet Sage",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
        price: 159
    },
    {
        id : 6,
        title: "Spring SnowFlake",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
        price: 170
    },
    {
        id : 7,
        title: "Schefflera",
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
        price: 259
    }

]


const container = [... new Set(flowers.map((items) => {return items}) )]
let i = 0
 document.querySelector(".flowers-all").innerHTML = container.map((item) =>{
    let{title,img,price} = item
    return  `
    <div class="flowers-garden">
    <img src="${img}" alt="">
    <a href="#">${title}</a>
    <span>$ ${price}.00</span>`+
    "<button onclick='addToCart ("+ (i++) +")' >Add to cart</button>"+
   `
</div>
    
    `
 }).join("")