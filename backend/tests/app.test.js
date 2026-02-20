const request = require("supertest");
const app = require("../app");
const fs = require("fs");

const filePath = "tasks.json";

beforeEach(() => {
  fs.writeFileSync(filePath, JSON.stringify([]));
});

describe("Task API Integration Test", () => {

  test("GET /tasks should return empty array", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("POST /tasks should add task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test Task" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Test Task");
  });

});