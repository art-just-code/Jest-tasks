const { isValidEmail, isValidPassword, validateUserInput } = require("../index.js");

// Для удобства можете использовать эти данные, в качестве тестовых, но можете добавить свои
const dataValid = { email: "bob@yandex.ru", password: "1amAp0k3m0n%" };
const dataInvalidPassword = { email: "bob@yandex.ru", password: "123456" };
const dataInvalidEmail = { email: "bob", password: "1amAp0k3m0n%" };
const dataInvalidCredentials = { email: "bob", password: "12345" };

// Ваши тесты здесь

describe("Тестовый набор", () => {
    it("check isValidEmail by true/false", () => {
        expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
        expect(isValidEmail(dataValid.email)).toBeTruthy();
    });

    it("check isValidPassword by true/false", () => {
        expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();
        expect(isValidPassword(dataValid.password)).toBeTruthy();
    });

    it("check validateUserInput", () => {
        expect(validateUserInput(dataInvalidCredentials)).toStrictEqual({
            isValidated: false,
            message: null,
            error: "Данные не верны",
        });

        expect(validateUserInput(dataInvalidPassword)).toStrictEqual({
            isValidated: false,
            message: null,
            error: "Пароль неправильный",
        });
        expect(validateUserInput(dataInvalidEmail)).toStrictEqual({
            isValidated: false,
            message: null,
            error: "Email неправильный",
        });

        expect(validateUserInput(dataValid)).toStrictEqual({
            isValidated: true,
            message: "Пользователь успешно cоздан!",
            error: null,
        });
    });
});
