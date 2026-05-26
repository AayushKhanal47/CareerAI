require("dotenv").config();

const app = require("./src/app");
const ConnectToDB = require("./src/config/database");

// Connect to DB BEFORE starting server
const startServer = async () => {
    try {
        await ConnectToDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (err) {
        console.log("Server startup error:", err.message);
    }
};

startServer();