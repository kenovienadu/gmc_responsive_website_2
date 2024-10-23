const items = [
  {
    "sectionName": "Menu",
    "products": [
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
  }
]


const loadProducts = () => {
  const productsSectionsWrapper = document.getElementById('products');

  if (!productsSectionsWrapper) {
    console.error('products section invalid');
    return;
  }

  items.forEach(item => {
    // create product section
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'mx-8 md:mx-[100px] pt-10 md:pt-[100px]';

    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'bg-orange-500 text-gray-100 text-center py-3 mb-3';
    sectionTitle.textContent = item.sectionName;

    const productsWrapper = document.createElement('div');
    productsWrapper.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5';

    const productCards = item.products.map(product => {
      const productCard = document.createElement('div');
      productCard.innerHTML = `
        <div class="border product-card rounded-md overflow-hidden">
          <div class="image-wrapper">
            <img src="${product.image}" class="w-full h-[340px] lg:h-[250px] object-cover" alt="">
          </div>

          <div class="p-8 bg-dark text-gray-100 h-[250px]">
            <h3 class="text-xl capitalize font-medium">${product.name}</h3>
            <div class="font-light">${product.price}</div>

            <p class="text-xs mt-3 mb-5">
              ${product.description}
            </p>

            <button class="bg-red-600 text-white hover:bg-gray-800 p-2 px-3 uppercase font-medium text-sm">
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      `;

      return productCard;
    });

    productsWrapper.append(...productCards);
    sectionWrapper.append(sectionTitle, productsWrapper);
    productsSectionsWrapper.append(sectionWrapper);
  })
}

// loadProducts();