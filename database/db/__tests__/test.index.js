const mongoose = require("mongoose");
const User = require("../models/user");
const fixtures = require("../fixtures");

const MONGO_URL = "mongodb://localhost:27017/yandex-db-test"; //mestodb-14

// my code

beforeAll(() => {
    // connect to db
    return mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
});

afterAll(() => {
    // disconnect from db
    return mongoose.disconnect();
});

describe("Database test was started", () => {
    /* здесь тоже можно использовать beforeAll, afterAll, если нам нужно перед всеми тестами что-то добавить или убрать из баз данных */

    beforeEach(() => {
        // Перед каждым тестом добавляем нужные данные в БД
        const { name, about, password, email, avatar } = fixtures.user;
        return User.create({ name, about, password, email, avatar });
    });

    afterEach(() => {
        // После каждого теста убираем данные из БД
        return User.deleteOne({ email: fixtures.user.email });
    });

    /* afterEach(() => User.deleteOne({ email: fixtures.user.email })); */

    it("Пользователь должен быть", () => {
        return User.findOne({ email: fixtures.user.email }).then((user) => {
            expect(user).toBeDefined();
            expect(user.email).toBe(fixtures.user.email);
            expect(user.name).toBe(fixtures.user.name);
        });
    });
});
