const mongoose = require("mongoose");

const ConnectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected");
    } catch (err) {
        console.log("DB Connection Error:", err.message);
        process.exit(1);
    }
};

module.exports = ConnectToDB;