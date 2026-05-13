import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/health", () => {
  it("should return 200 and health data", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("uptime");
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("version");
  });
});

describe("GET /api/v1/players", () => {
  it("should return all players", async () => {
    const response = await request(app).get("/api/v1/players");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("count");
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});