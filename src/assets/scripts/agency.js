const items = [
  {
    "title": "Santorini",
    "description": "A stunning island in Greece known for its white-washed buildings with blue domes, crystal-clear waters, and breathtaking sunsets. It's famous for the caldera view and picturesque villages like Oia and Fira.",
    "price": "$1500",
    "image": "https://images.unsplash.com/photo-1696519669687-44a05404eadf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Barcelona",
    "description": "A vibrant city in Spain known for its unique architecture by Antoni Gaudí, including La Sagrada Familia and Park Güell. Barcelona also offers lively markets, beaches, and cultural attractions.",
    "price": "$1200",
    "image": "https://images.unsplash.com/photo-1464730282481-19bd52679224?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Alhambra, Granada",
    "description": "A magnificent palace and fortress complex in southern Spain. Alhambra is renowned for its stunning Moorish architecture, lush gardens, and views of the Sierra Nevada mountains.",
    "price": "$300",
    "image": "https://images.unsplash.com/photo-1564740603199-5f56138c6679?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Ibiza",
    "description": "An island in Spain’s Balearic Islands, famous for its world-class nightlife, stunning beaches, and crystal-clear waters. Ibiza is a top destination for partygoers and nature lovers alike.",
    "price": "$1800",
    "image": "https://plus.unsplash.com/premium_photo-1697730002753-6772fea94e55?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]


const loadProducts = () => {
  const productsSectionsWrapper = document.querySelector('.destinations-grid');

  if (!productsSectionsWrapper) {
    console.error('products section invalid');
    return;
  }

  const productCards = items.map(product => {
    const card = document.createElement('div');

    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">
            ${product.title}
          </h5>
          <p class="card-text">
            ${product.description}
          </p>
          <button class="primary-button">
            Learn More
          </button>
        </div>
      </div>
    `

    return card;
  });

  productsSectionsWrapper.append(...productCards)
}

loadProducts();