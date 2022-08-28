// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// login form section
let loginForm = document.querySelector(".header .login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// cart section
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", initUI);
} else {
  initUI();
}

function initUI() {
  // add to cart
  var addToCartButtons = document.querySelectorAll(".shop-item-button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", handleAddToCart);
  });
}

function handleAddToCart(event) {
  const shopItem = event.target.closest(".shop-item");
  const title = shopItem.querySelector(".shop-item-title").textContent;
  const price = shopItem.querySelector(".shop-item-price").textContent;
  const img = shopItem.querySelector(".shop-item-image").src;
  addItemToCartUI(title, price, img);
  updateCartTotal();
}

function addItemToCartUI(title, price, img) {
  const cartItems = document.querySelector(".cart-items");
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  const cartItemNames = document.querySelectorAll(".cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].textContent == title) {
      console.log("same");
      alert("Item already added");
      return;
    }
  }
  // add more or lower product amount section
  const cartRowContent = `<div class='cart-item row justify-content-between align-items-center border py-3 px-1 fs-6'>
                            <div class='col-2'>
                                <img class='cart-img img-fluid' src=${img} alt='' />
                            </div>
                            <div class='col-6'>
                                <p class='cart-item-title pb-0'>${title}</p>
                                <p class='cart-price text-secondary pb-0'>${price}</p>
                            </div>
                            <div class='col-2'>
                                <input class='cart-quantity-input' type='number' min='1' value='1' />
                            </div>
                            <div class="col-1 text-center">
                                <button class="cart-remove btn btn-danger btn-sm text-center rounded-full">
                                  <i class="fa-solid fa-trash fa-sm"></i>
                                </button>
                            </div>
                        </div>`;

  cartRow.innerHTML = cartRowContent;
  cartItems.appendChild(cartRow);
  alert("Item added to the cart!");

  // show cart
  const bsOffcanvas = new bootstrap.Offcanvas("#cart-sidebar");
  bsOffcanvas.show();

  cartRow.querySelector(".cart-remove").addEventListener("click", removeItem);
  cartRow
    .querySelector(".cart-quantity-input")
    .addEventListener("change", handleQuantityChange);
}

function handleQuantityChange(event) {
  const input = event.target;
  if (input.value < 1) {
    input.value = 1;
  }
  updateCartTotal();
}

function removeItem(event) {
  const removeConfirm = confirm("Are you sure to remove?");
  if (removeConfirm) {
    const btnClicked = event.target;

    btnClicked.closest(".cart-row").remove();
  }
  updateCartTotal();
}

function updateCartTotal() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartRows = cartItemsContainer.querySelectorAll(".cart-row");
  let total = 0;
  cartRows.forEach((row) => {
    const priceEl = row.querySelector(".cart-price");
    const quantityInput = row.querySelector(".cart-quantity-input");
    const price = parseFloat(priceEl.textContent);
    const quantity = quantityInput.value;

    total = total + price * quantity;
  });
  document.querySelector(".cart-total-price").textContent = total.toFixed(2);
}
//product swiper

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// search bar section
// const searchInput = document.querySelector("#search-input");
// const allTeamName = document.querySelectorAll(".product-card");

// searchInput.addEventListener("keyup", (event) => {
//   const searchQuery = event.target.value.toLowerCase();
//   for (let i = 0; i < allTeamName.length; i++) {
//     const currentTeam = allTeamName[i].textContent.toLowerCase();
//     if (currentTeam.includes(searchQuery)) {
//       allTeamName[i].style.display = "block";
//     } else {
//       allTeamName[i].style.display = "none";
//     }
//   }
// });
