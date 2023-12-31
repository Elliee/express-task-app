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
      const res = await request(app).get("/api/v1/tasks/64dc4a7cb56c294a61a5c4b9");
      expect(res.statusCode).toBe(200);
      expect(res.body.task.name).toBe('learn docker')
    });
  });

  describe("POST /api/v1/tasks", () => {
    it("should create a new task", async () => {
        const res = await request(app).post("/api/v1/tasks").send({
            name: "Iron clothes",
            completed: false,
          });
        expect(res.statusCode).toBe(201)
        expect(res.body.task.name).toBe('Iron clothes')
    })
  })

  describe("PATCH /api/v1/tasks/:id", () => {
    it("should update an existing task", async () => {
        const res = await request(app).patch("/api/v1/tasks/64d96d14a8f0cf26ba89f067").send({
            name: "Wash car",
            completed: true,
          });
        expect(res.statusCode).toBe(200)
        expect(res.body.task.completed).toBe(true)
    })
  })

  describe("DELETE /api/v1/tasks/:id", () => {
    it("should delete a single task", async () => {
        const res = await request(app).delete("/api/v1/tasks/64d971b7a8f0cf26ba89f079");
        expect(res.statusCode).toBe(200)
    })
  })




