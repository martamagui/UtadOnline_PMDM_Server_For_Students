import { Request, Response, NextFunction } from "express";
import jwt_decode from "jwt-decode";
import configuration from "../configuration/configuration";

export const userExtractor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.headers.authorization;
    if (auth == null) {
      return res
        .status(401)
        .json({
          message: "You need to add the authorization in the request header.",
        });
    } else {
      const token = auth.trim();
      if (auth != null && auth.length > 0) {
        let time = formatedDate()
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("Nombre: "+auth + ",  Fecha: (" + time+ "),  IP: " + ip);
      } else {
        return res
          .status(401)
          .json({
            message: "You need to add the authorization in the request header.",
          });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(523).json({ message: "Auth server error." });
  }
  next();
};

const formatedDate = ()=>{

const fechaActual: Date = new Date();

const dia: number = fechaActual.getDate();
const mes: number = fechaActual.getMonth() + 1; // ¡Recuerda que los meses van de 0 a 11!
const año: number = fechaActual.getFullYear();
const horas: number = fechaActual.getHours();
const minutos: number = fechaActual.getMinutes();

const diaStr: string = dia < 10 ? '0' + dia : '' + dia;
const mesStr: string = mes < 10 ? '0' + mes : '' + mes;
const horasStr: string = horas < 10 ? '0' + horas : '' + horas;
const minutosStr: string = minutos < 10 ? '0' + minutos : '' + minutos;

// Formatear la fecha como DD/MM/YYYY HH:mm
const fechaFormateada: string = `${diaStr}/${mesStr}/${año} ${horasStr}:${minutosStr}`;

return fechaFormateada;
}