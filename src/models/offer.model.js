import mongoose from "mongoose";

const Offer = new mongoose.Schema(
  {
    jugador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jugador",
      required: true,
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    }, // Manager
    monto: { type: Number, required: true },
    mensaje: { type: String },
    estado: {
      type: String,
      enum: ["Pendiente", "Aceptada", "Rechazada"],
      default: "Pendiente",
    },
  },
  { timestamps: true }
);

export const OfferModel = mongoose.model("Oferta", Offer);
