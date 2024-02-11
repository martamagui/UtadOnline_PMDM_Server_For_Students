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
      return res.status(401).json({ message: "You need to add the authorization in the request header." });
    }
    if (auth.toLowerCase().startsWith("bearer")) {
      const token = auth.trim();
      if (auth != null && auth.length > 0) {
        console.log(req.body.token);
      } else {
        return res.status(401).json({ message: "You need to add the authorization in the request header." });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(523).json({ message: "Auth server error." });
  }
  next();
};
