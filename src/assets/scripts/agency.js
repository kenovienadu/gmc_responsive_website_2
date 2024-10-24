const items = [
  {
    "title": "Santorini",
    "description": "A stunning island in Greece known for its white-washed buildings with blue domes, crystal-clear waters, and breathtaking sunsets. It's famous for the caldera view and picturesque villages like Oia and Fira.",
    "price": "$1500",
    "image": "https://placehold.co/600x400?font=roboto&text=Santorini"
  },
  {
    "title": "Barcelona",
    "description": "A vibrant city in Spain known for its unique architecture by Antoni Gaudí, including La Sagrada Familia and Park Güell. Barcelona also offers lively markets, beaches, and cultural attractions.",
    "price": "$1200",
    "image": "https://placehold.co/600x400?font=roboto&text=Barcelona"
  },
  {
    "title": "Alhambra, Granada",
    "description": "A magnificent palace and fortress complex in southern Spain. Alhambra is renowned for its stunning Moorish architecture, lush gardens, and views of the Sierra Nevada mountains.",
    "price": "$300",
    "image": "https://placehold.co/600x400?font=roboto&text=Granada"
  },
  {
    "title": "Ibiza",
    "description": "An island in Spain’s Balearic Islands, famous for its world-class nightlife, stunning beaches, and crystal-clear waters. Ibiza is a top destination for partygoers and nature lovers alike.",
    "price": "$1800",
    "image": "https://placehold.co/600x400?font=roboto&text=Ibiza"
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
            See More
          </button>
        </div>
      </div>
    `

    return card;
  });

  productsSectionsWrapper.append(...productCards)
}

loadProducts();