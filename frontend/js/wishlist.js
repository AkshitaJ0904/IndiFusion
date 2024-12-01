// Select all "Add to List" buttons and add event listeners
document.querySelectorAll('.but').forEach(button => {
    button.addEventListener('click', function() {
      // Get the product ID (which is the same as the button ID)
      const productId = this.id;
      
      // Get the product details from the page
      const productElement = document.getElementById(`product${productId}`);
      const title = productElement.querySelector(`#item${productId}-title`).textContent;
      const description = productElement.querySelector(`#item${productId}-description`).textContent;
      const imgSrc = productElement.querySelector(`#item${productId}-img`).src;
  
      // Prepare the product data
      const productData = {
        title,
        description,
        imgSrc
      };
  
      // Add the product to the wishlist
      addToWishlist(productData);
    });
  });
  
  // Function to add product to the wishlist panel
  function addToWishlist(productData) {
    // Get the wishlist panel
    const panel = document.getElementById("selectedWishlistPanel");
  
    // Create a new wishlist item
    const newItem = document.createElement("div");
    newItem.className = "wishlist-item";
    newItem.innerHTML = `
      <img src="${productData.imgSrc}" alt="${productData.title}" class="wishlist-item-img">
      <h3>${productData.title}</h3>
      <p>${productData.description}</p>
    `;
  
    // Append the new item to the wishlist panel
    panel.appendChild(newItem);
  
    // Log for debugging
    console.log("Added to wishlist:", productData);
  }
  
  const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    items: [
        {
            name: { type: String, required: true },
            description: { type: String },
            price: { type: Number },
            link: { type: String }, // Optional: Link to the product
            addedAt: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
