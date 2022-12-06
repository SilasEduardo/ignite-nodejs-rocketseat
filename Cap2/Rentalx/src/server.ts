import  express from "express";
import { categoriesRoutes } from "./routes/categoriesRoutes";

const app = express()
app.use(express.json())
app.use("/categories", categoriesRoutes)

app.listen(3000, () => {
    console.log("SERVER ON")
})