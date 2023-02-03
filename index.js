const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : ["iphone", "android", "xiaomi", "ios", "window", "chrome", "fire"];

window.onload = function () {
  // handleNavigate("home");
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
            <img src="./assets/imgs/4.jpg" alt="" srcset="">
          </div>
          <p class="name">Hi</p>
          <div class="content">
            <p class="price">20 $</p>
            <i class="fa-solid fa-plus add-icon" id=${index} onclick="addProduct('${product}')"></i>
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
        const viewCarts = carts
          .map(
            (product, index) => `
        <div class="item">
          <div class="img">
            <img src="./assets/imgs/4.jpg" alt="" srcset="">
          </div>
          <p class="name"> ${product}</p>
          <div class="price">20</div>
        </div>
        
        `
          )
          .join("");
        lstCarts.innerHTML =
          lstCarts.innerHTML +
          viewCarts +
          `        <div class="total">Tổng: xxx</div>
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

const addProduct = (product) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  if (cart.length) {
    const p = cart.find((p) => p === product);
    console.log(p);
    if (p) {
    } else {
      console.log(cart);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("ban them thanh cong");
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([product]));
    alert("ban them thanh cong");
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
