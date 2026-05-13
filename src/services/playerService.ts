import { players } from "../data/players";
import { Player, PlayerRating } from "../interfaces/player";


export function getAllPlayers(): Player[] {
  return players;
}


export function getPlayerById(id: number): Player | undefined {
  return players.find(function (player: Player) {
    return player.id === id;
  });
}


export function calculatePlayerRating(player: Player): PlayerRating {
  const gamesPlayed = player.wins + player.losses;

  // Handle edge case: no games played
  if (gamesPlayed === 0) {
    return {
      id: player.id,
      name: player.name,
      rating: 0,
      gamesPlayed: 0
    };
  }

  // Calculate rating
  const rating =
    (player.wins / gamesPlayed) * 100 + player.totalScore / gamesPlayed;

  return {
    id: player.id,
    name: player.name,
    rating: Number(rating.toFixed(2)),
    gamesPlayed: gamesPlayed
  };
}



export function getPlayerRatingById(id: number): PlayerRating | undefined {
  const player = getPlayerById(id);

  if (!player) {
    return undefined;
  }

  return calculatePlayerRating(player);
}
