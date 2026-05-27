require("dotenv").config()

const app = require("./src/app")
const ConnectToDB = require("./src/config/database")

    const startServer = async () => {
     await ConnectToDB();
    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    })
}

startServer()