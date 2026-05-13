import express, { Request, Response } from "express";
import path from "path";
import {
  getAllPlayers,
  getPlayerById,
  getPlayerRatingById
} from "./services/playerService";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

app.get("/api/v1/players", (_req: Request, res: Response) => {
  const players = getAllPlayers();

  res.status(200).json({
    count: players.length,
    data: players
  });
});

app.get("/api/v1/players/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const player = getPlayerById(id);

  if (!player) {
    return res.status(404).json({
      message: "Player not found"
    });
  }

  return res.status(200).json(player);
});

app.get("/api/v1/players/:id/rating", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const rating = getPlayerRatingById(id);

  if (!rating) {
    return res.status(404).json({
      message: "Player not found"
    });
  }

  return res.status(200).json(rating);
});

export default app;