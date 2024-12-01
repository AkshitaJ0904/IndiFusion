const mongoose = require("mongoose"); // Correct spelling
const con_string = "mongodb+srv://dhanushkumar:JcEI%40398@wishlistcluster.o35k7.mongodb.net/loginDB?retryWrites=true&w=majority&appName=wishlistcluster";

// Database connection function
const dbconnect = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(con_string, {
            useNewUrlParser: true, // Recommended for stable connections
            useUnifiedTopology: true, // Ensures better compatibility with modern servers
        });
        console.log("Database is connected successfully");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
};

// Export the connection function
module.exports = dbconnect;
