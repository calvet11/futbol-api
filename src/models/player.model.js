import mongoose from "mongoose";

const Player = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    posicion: { type: String, required: true }, // Ej: "Delantero", "Defensa"
    edad: { type: Number, required: true },
    equipoActual: { type: String, required: true },
    goles: { type: Number, default: 0 },
    asistencias: { type: Number, default: 0 },
    partidosJugados: { type: Number, default: 0 },
    creadoPor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    }, // Oficial
  },
    { timestamps: true }
);

export const PlayerModel = mongoose.model("Jugador", Player);
