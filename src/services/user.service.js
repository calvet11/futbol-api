import { UserModel } from "../models/user.model.js";

class UserService {

    async registrarUsuario(datos) {

        try {
            const newUser = new UserModel(datos)
            await newUser.save()
            return newUser
        } catch (e) {
            throw new Error("Error al registrar el usuario.")
        }

    }

}

export default UserService