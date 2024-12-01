// /backend/controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');

// Add item to wishlist
exports.addItem = async (req, res) => {
    try {
        const { productId, productName, quantity, price, userId } = req.body;
        const newItem = new Wishlist({ productId, productName, quantity, price, userId });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Failed to add item", error });
    }
};

// Get all items in wishlist
exports.getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.find();
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch wishlist", error });
    }
};

// Remove item from wishlist
exports.removeItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        await Wishlist.findByIdAndDelete(itemId);
        res.status(200).json({ message: "Item removed from wishlist" });
    } catch (error) {
        res.status(500).json({ message: "Failed to remove item", error });
    }
};
