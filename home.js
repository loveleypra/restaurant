
  const btncart = document.querySelector('#btn1');
  const cart1 = document.querySelector('.cartmv');
  const btncls = document.querySelector('.cancel');

  btncart.addEventListener('click',()=>{
    cart1.classList.add('cartmv-active');
  })
  btncls.addEventListener('click',()=>{
    cart1.classList.remove('cartmv-active');
  })
  
  var cart = [];
var total = 0;

// Add to Cart button click event
$(".add-to-cart").click(function() {
  var name = $(this).data("name");
  var price = Number($(this).data("price"));
  var item = {
    name: name,
    price: price
  };
  cart.push(item);
  total += price;
  updateCart();
});

// Update the cart
function updateCart() {
  $(".cart").empty();
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var html = '<li class="list-group-item d-flex justify-content-between align-items-center">' +
               item.name +
               '<span class="badge badge-primary badge-pill">$' + item.price.toFixed(2) + '</span>' +
               '<button class="btn btn-danger btn-sm remove-from-cart" data-index="' + i + '">Remove</button>' +
               '</li>';
    $(".cart").append(html);
  }
  $(".total").text("₹" + total.toFixed(2));
  updateCartCount(); // Update the cart count
}

// Update the cart count
function updateCartCount() {
  var cartCount = cart.length;
  $(".cart-count").text(cartCount);
}

// Remove from Cart button click event
$(document).on("click", ".remove-from-cart", function() {
  var index = $(this).data("index");
  var item = cart[index];
  total -= item.price;
  cart.splice(index, 1);
  updateCart();
});

$(".checkout-btn").click(function() {
  checkout();
});

function checkout() {
  if (isLoggedIn == false) {
    alert("Please log in to proceed with checkout.");
    return;
  }
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  cart = [];
  total = 0;
  updateCart();
}