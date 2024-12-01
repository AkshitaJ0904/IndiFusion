const mongoose = require("mongoose");

// Schema for individual wishlist items
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    link: { type: String, default: "" },
});

// Schema for the wishlist
const wishlistSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        items: { type: [itemSchema], default: [] }, // Default to an empty array
    },
    {
        collection: "wishlists", // Use a more descriptive collection name like 'wishlists'
        timestamps: true,        // Automatically adds 'createdAt' and 'updatedAt' fields
    }
);

// Compile the schema into a model
const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;

