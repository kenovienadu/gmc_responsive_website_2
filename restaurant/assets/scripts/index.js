const items = [
  {
    "name": "Classic Cheeseburger",
    "price": "$20.00",
    "description": "Juicy beef patty topped with cheddar cheese, lettuce, tomato, and our special sauce.",
    "image": "assets/img/product-images/burger-1.webp"
  },
  {
    "name": "BBQ Bacon Burger",
    "price": "$22.00",
    "description": "Grilled beef patty with crispy bacon, smoky BBQ sauce, cheddar cheese, and onions.",
    "image": "assets/img/product-images/burger-2.webp"
  },
  {
    "name": "Spicy Jalapeño Burger",
    "price": "$21.00",
    "description": "Spicy burger with jalapeños, pepper jack cheese, lettuce, and a zesty sauce.",
    "image": "assets/img/product-images/burger-3.jpg"
  },
  {
    "name": "Pepperoni Pizza",
    "price": "$20.00",
    "description": "Loaded with pepperoni, mozzarella cheese, and a rich tomato sauce.",
    "image": "assets/img/product-images/pizza-3.webp"
  },
  {
    "name": "Hawaiian Pizza",
    "price": "$21.00",
    "description": "A tropical twist with ham, pineapple, mozzarella, and tomato sauce.",
    "image": "assets/img/product-images/pizza-3.webp"
  },
  {
    "name": "Meat Lover's Pizza",
    "price": "$25.00",
    "description": "Topped with pepperoni, sausage, ham, and bacon over a cheesy base.",
    "image": "assets/img/product-images/pizza-4.webp"
  },
  {
    "name": "Apple Pie",
    "price": "$15.00",
    "description": "Classic apple pie with cinnamon-spiced apples and a flaky crust.",
    "image": "assets/img/product-images/pie-1.jpg"
  },
  {
    "name": "Pecan Pie",
    "price": "$18.00",
    "description": "Rich, sweet pecan filling in a buttery crust, perfect for dessert lovers.",
    "image": "assets/img/product-images/pie-2.jpeg"
  }
]


const loadProducts = () => {
  const productsSectionsWrapper = document.querySelector('.menu-grid');

  if (!productsSectionsWrapper) {
    console.error('products section invalid');
    return;
  }

  const productCards = items.map(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="col-md-3" >
        <div class="menu-item">
          <div>
            <img src="${product.image}" alt="">
          </div>
          <div class="content p-3" >
            <h4>${product.name}</h4>
            <p class="description">${product.description}</p>
            <div class="price">${product.price}</div>
          </div>
        </div>
      </div>
    `;

    return card;
  });

  productsSectionsWrapper.append(...productCards)
}

loadProducts();