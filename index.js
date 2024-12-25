import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import UserRouter from "./src/routes/user.route.js"; 

dotenv.config();
connectDB(); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const userRouter = new UserRouter();
app.use("/api/users", userRouter.start());


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
