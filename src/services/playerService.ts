import { players } from "../data/players";
import { Player, PlayerRating } from "../interfaces/player";

export const getAllPlayers = (): Player[] => {
  return players;
};

export const getPlayerById = (id: number): Player | undefined => {
  return players.find((player) => player.id === id);
};

export const calculatePlayerRating = (player: Player): PlayerRating => {
  const gamesPlayed = player.wins + player.losses;

  if (gamesPlayed === 0) {
    return {
      id: player.id,
      name: player.name,
      rating: 0,
      gamesPlayed: 0
    };
  }

  const rating =
    (player.wins / gamesPlayed) * 100 + player.totalScore / gamesPlayed;

  return {
    id: player.id,
    name: player.name,
    rating: Number(rating.toFixed(2)),
    gamesPlayed
  };
};

export const getPlayerRatingById = (id: number): PlayerRating | undefined => {
  const player = getPlayerById(id);

  if (!player) {
    return undefined;
  }

  return calculatePlayerRating(player);
};