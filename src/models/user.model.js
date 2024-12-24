import mongoose from "mongoose";

const user = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    enum: ["Oficial", "Manager", "Jugador"],
    required: true,
  },
}, { timestamps: true });

export const UserModel = mongoose.model("Usuario", user);