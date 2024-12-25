import express from "express";
import UserController from "../controllers/user.controller.js";

class UserRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
  }

  start() {
    // Ruta para registrar un nuevo usuario
    this.router.post("/register", this.controller.registrarUsuario);

    return this.router;
  }
}

export default UserRouter;
