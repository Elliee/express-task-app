const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app')

require('dotenv').config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
    await mongoose.connection.close();
});


describe("GET /api/v1/tasks", () => {
    it("should return all tasks", async () => {
      const res = await request(app).get("/api/v1/tasks");
      expect(res.statusCode).toBe(200);
      expect(res.body.tasks.length >= 1).toBe(true)
    });
  });

  describe("GET /api/v1/tasks/:id", () => {
    it("should return a single tasks", async () => {
      const res = await request(app).get("/api/v1/tasks/64d1bf8749a21ffe021a470c");
      expect(res.statusCode).toBe(200);
      expect(res.body.task.name).toBe('Wash car')
    });
  });

  describe("POST /api/v1/tasks", () => {
    it("should create a new task", async () => {
        const res = await request(app).post("/api/v1/tasks").send({
            name: "Iron clothes",
            completed: false,
          });
        expect(res.statusCode).toBe(200)
        expect(res.body.task.name).toBe('Iron clothes')
    })
  })

  describe("PATCH /api/v1/:id", () => {
    it("should update an existing task", async () => {
        const res = await request(app).patch("/api/v1/tasks/64d2dbd3c8aa2d1e4d4b603e").send({
            name: "Clean car",
            completed: false,
          });
        expect(res.statusCode).toBe(200)
        expect(res.body.task.name).toBe('Clean car')
    })
  })

  describe("DELETE /api/v1/:id", () => {
    it("should update an existing task", async () => {
        const res = await request(app).delete("/api/v1/tasks/64d2eafd29372cd2ed38dadf");
        expect(res.statusCode).toBe(200)
    })
  })




