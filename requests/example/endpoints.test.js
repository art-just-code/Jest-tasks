const supertest = require("supertest");
const app = require("./app.js");

const request = supertest(app); //В переменную supertest записана функция, которой нужно передать на вход наше приложение
// мы можем обращаться к методам библиотеки через объект request. Все методы  возвращают промисы, которые нужно обработать асинхронно.

describe("Эндпоинты откликаются на запросы", () => {
    it('Возвращает данные и 200-й ответ по запросу к "/"', () => {
        return request.get("/").then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toBe("Hello World!");
        });
    });
});
