const supertest = require("supertest");
const app = require("../app.js");

const request = supertest(app);

// Ваши тесты здесь
describe("Testing GET & POST", () => {
    it("Response status 200 and string Hello, World!", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    });
    it('POST-запрос к адресу "/users" должен возвращать JSON с данными пользователя и статус 201', async () => {
        const response = await request.post("/users");
        expect(response.status).toBe(201);
        expect(JSON.stringify(response.header)).toContain("application/json");
    });
});
