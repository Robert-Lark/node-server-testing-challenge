const supertest = require("supertest");
const server = require("../server.js");
const db = require("../data/config");

afterAll(async () => {
	await db.destroy();
});

test("GET /", async () => {
	const res = await supertest(server).get("/");
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe("application/json");
	expect(res.body.message).toBe("we did it!");
});

// test("POST /", async () => {
// 	const res = await supertest(server).post("/").send({ username: "tommy" });
// 	expect(res.statusCode).toBe(201);
// 	expect(res.type).toBe("application/json");
// 	expect(res.body.username).toBe("tommy");
// 	expect(res.body.id).toBeDefined();
// });

test("DELETE /users/:id", async () => {
	const res = await supertest(server).delete("users/4");
	expect(res.statusCode).toBe(204);
	// expect(res.type).toBe("application/json");
	// expect(res.body.message).toBe("The user has been deleted");
});

test("a placeholder test", () => {
	expect(2 + 2).toBe(4);
});
