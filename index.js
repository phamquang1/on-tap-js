"use strict";
a = 7;
console.log(a);
var a;

// b = 7;
// console.log(b);
// let b;

// {
//   let c = 5;
//   console.log(c);
// }
// console.log(c);

// {
//   var d = 5;
//   console.log(d);
// }
// console.log(d);

// if (true) {
//   let f = 5;
// }
// console.log(f);

// if (true) {
//   var f = 5;
// }
// console.log(f);
const PRODUCTS = [
  { id: 1, name: "Iphone", img: "4.jpg", price: 10 },
  { id: 2, name: "Aphone", img: "5.jpg", price: 100 },
  { id: 12, name: "SamSung", img: "6.jpg", price: 20 },
  { id: 13, name: "Xiaomi", img: "7.jpg", price: 30 },
  { id: 14, name: "Nokia", img: "8.jpg", price: 40 },
  { id: 15, name: "Windows", img: "4.jpg", price: 60 },
  { id: 16, name: "IOS", img: "6.jpg", price: 80 },
  { id: 17, name: "Android", img: "5.jpg", price: 90 },
  { id: 1333, name: "BOS", img: "8.jpg", price: 1000 },
  { id: 133333, name: "ColorS", img: "7.jpg", price: 220 },
  { id: 1234, name: "Macbook", img: "4.jpg", price: 110 },
  { id: 2342341, name: "IPad", img: "6.jpg", price: 290 },
];
const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : PRODUCTS;

window.onload = function () {
  handleNavigate("home");
};

const handleNavigate = (type) => {
  console.log(type);
  const header = document.getElementById("header");
  const slide = document.getElementById("slide");

  const lstProducts = document.getElementById("products");
  const lstCarts = document.getElementById("carts");

  const home = document.getElementsByClassName("home");
  const cart = document.getElementsByClassName("cart");
  const messenger = document.getElementsByClassName("messenger");
  const user = document.getElementsByClassName("user");

  // reset
  lstProducts.innerHTML = "";
  lstCarts.innerHTML = "";
  slide.innerHTML = "";

  switch (type) {
    case "home": {
      console.dir(lstProducts);
      console.log(lstProducts);
      slide.innerHTML += `
      <div class="slides">
        <div class="slide">
          <img class="item" src="./assets/imgs/1.jpg" alt="" srcset="">
        </div>
        <div class="slide">
          <img class="item" src="./assets/imgs/2.jpg" alt="" srcset="">
        </div>
        <div class="slide">
          <img class="item" src="./assets/imgs/3.jpg" alt="" srcset="">
        </div>
      </div>
      `;
      const viewProducts = products
        .map(
          (product, index) => `
       
       <div class="product">
          <div class="img">
            <img src="./assets/imgs/${product.img}" alt="" srcset="">
          </div>
          <p class="name">${product.name}</p>
          <div class="content">
            <p class="price">${product.price} $</p>
            <i class="fa-solid fa-plus add-icon" id=${product.id} onclick="addProduct(${product.id})"></i>
          </div>
        </div>
       
       `
        )
        .join("");
      lstProducts.innerHTML = lstProducts.innerHTML + viewProducts;
      //
      header.innerText = "Trang chủ";

      //
      home[0].classList.add("active");
      home[1].classList.add("active");

      cart[0].classList.remove("active");
      cart[1].classList.remove("active");

      messenger[0].classList.remove("active");
      messenger[1].classList.remove("active");

      user[0].classList.remove("active");
      user[1].classList.remove("active");

      break;
    }
    case "cart": {
      const carts = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (carts.length) {
        let total = 0;
        const viewCarts = carts
          .map((product, index) => {
            total += product.price;
            return `
              <div class="item">
                <div class="img">
                  <img src="./assets/imgs/${product.img}" alt="" srcset="">
                </div>
                <p class="name"> ${product.name}</p>
                <div class="price">${product.price}</div>
              </div>
              
              `;
          })
          .join("");
        lstCarts.innerHTML =
          lstCarts.innerHTML +
          viewCarts +
          `        <div class="total">Tổng: ${total}</div>
        `;
      }

      //
      header.innerText = "Giỏ hàng";
      //
      cart[0].classList.add("active");
      cart[1].classList.add("active");

      messenger[0].classList.remove("active");
      messenger[1].classList.remove("active");

      user[0].classList.remove("active");
      user[1].classList.remove("active");

      home[0].classList.remove("active");
      home[1].classList.remove("active");
      break;
    }
    case "messenger": {
      //
      header.innerText = "Tin nhắn";
      //
      messenger[0].classList.add("active");
      messenger[1].classList.add("active");

      user[0].classList.remove("active");
      user[1].classList.remove("active");

      home[0].classList.remove("active");
      home[1].classList.remove("active");
      cart[0].classList.remove("active");
      cart[1].classList.remove("active");
      break;
    }
    case "user": {
      //
      header.innerText = "Tài khoản";
      //

      user[0].classList.add("active");
      user[1].classList.add("active");

      home[0].classList.remove("active");
      home[1].classList.remove("active");
      cart[0].classList.remove("active");
      cart[1].classList.remove("active");

      messenger[0].classList.remove("active");
      messenger[1].classList.remove("active");
      break;
    }
    default: {
      throw new Error("Sai rồi má ơi");
    }
  }
};

const addProduct = (id) => {
  console.log(id);
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  if (cart.length) {
    const p = cart.find((p) => p.id === id);
    console.log(p);
    if (p) {
      showModal(p.name, false);
    } else {
      console.log(cart);
      const product = products.find((p) => p.id === id);
      console.log(product);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      showModal(product.name);
    }
  } else {
    const product = products.find((p) => p.id === id);
    localStorage.setItem("cart", JSON.stringify([product]));
    showModal(product.name);
  }
};

const slideHtml = () => {
  return `

  <div class="p-5">
      <div class="slides">
        <div class="slide">
          <img class="item" src="./assets/imgs/1.jpg" alt="" srcset="">
        </div>
        <div class="slide">
          <img class="item" src="./assets/imgs/2.jpg" alt="" srcset="">
        </div>
        <div class="slide">
          <img class="item" src="./assets/imgs/3.jpg" alt="" srcset="">
        </div>
      </div>
    </div>
  `;
};

const showModal = (messager, buy = true) => {
  console.log(messager);
  const modal = document.getElementById("modal");
  modal.classList.remove("hide");
  modal.innerHTML = `
  <div class="modal-overlay">
        <div class="body">
          <div class="title">
          ${
            buy
              ? "Bạn đã mua <span>" + messager + "</span> thành công !"
              : "Bạn đã mua <span>" + messager + "</span> rồi !"
          } 
          </div>
          <button class="btn" onclick="confirm()">
            Xác nhận
          </button>
        </div>
      </div>`;
  modal.classList.add("show");
};
const confirm = () => {
  const modal = document.getElementById("modal");
  modal.innerHTML = "";
  modal.classList.remove("show");
  modal.classList.add("hide");
};
