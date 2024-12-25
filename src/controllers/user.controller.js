import UserService from "../services/user.service.js";

class UserController {
  constructor() {
    this.service = new UserService();
  }

  // Método para registrar un nuevo usuario
  registrarUsuario = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;

      // Validación básica
      if (!username || !email || !password || !role) {
        return res
          .status(400)
          .json({ errorMsg: "Todos los campos son obligatorios." });
      }

      const nuevoUsuario = await this.service.registrarUsuario({
        username,
        email,
        password,
        role,
      });

      res.status(201).json({
        message: "Usuario registrado con éxito.",
        data: nuevoUsuario,
      });
    } catch (error) {
      res.status(500).json({ errorMsg: "Error al registrar el usuario." });
    }
  };
}

export default UserController;
