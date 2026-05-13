import {
  calculatePlayerRating,
  getPlayerById
} from "../src/services/playerService";
import { Player } from "../src/interfaces/player";

describe("playerService", () => {
  describe("getPlayerById", () => {
    it("should return a player when the id exists", () => {
      const result = getPlayerById(1);

      expect(result).toBeDefined();
      expect(result?.name).toBe("ShadowStrike");
    });

    it("should return undefined when the id does not exist", () => {
      const result = getPlayerById(999);

      expect(result).toBeUndefined();
    });
  });

  describe("calculatePlayerRating", () => {
    it("should calculate rating for a normal player", () => {
      const player: Player = {
        id: 10,
        name: "TestPlayer",
        wins: 8,
        losses: 2,
        totalScore: 1000
      };

      const result = calculatePlayerRating(player);

      expect(result.gamesPlayed).toBe(10);
      expect(result.rating).toBe(180);
    });

    it("should return 0 rating for a player with no games", () => {
      const player: Player = {
        id: 11,
        name: "NewPlayer",
        wins: 0,
        losses: 0,
        totalScore: 0
      };

      const result = calculatePlayerRating(player);

      expect(result.gamesPlayed).toBe(0);
      expect(result.rating).toBe(0);
    });

    it("should handle a player with only wins", () => {
      const player: Player = {
        id: 12,
        name: "Winner",
        wins: 5,
        losses: 0,
        totalScore: 500
      };

      const result = calculatePlayerRating(player);

      expect(result.gamesPlayed).toBe(5);
      expect(result.rating).toBe(200);
    });

    it("should round rating to 2 decimal places", () => {
      const player: Player = {
        id: 13,
        name: "RoundedPlayer",
        wins: 2,
        losses: 1,
        totalScore: 100
      };

      const result = calculatePlayerRating(player);

      expect(result.rating).toBe(100);
      expect(Number.isFinite(result.rating)).toBe(true);
    });
  });
});