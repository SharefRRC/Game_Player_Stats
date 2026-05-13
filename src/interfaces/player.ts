export interface Player {
  id: number;
  name: string;
  wins: number;
  losses: number;
  totalScore: number;
}

export interface PlayerRating {
  id: number;
  name: string;
  rating: number;
  gamesPlayed: number;
}