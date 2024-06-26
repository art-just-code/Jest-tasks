const urlGenerator = require("./urlGenerator.js");
const urlRegEx =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// Ваш код здесь

it("Проверка типа данных - string", () => {
    expect(typeof urlGenerator("")).toBe("string");
});

it("Проверка на соответствие строки регулярному выражению", () => {
    expect(urlGenerator("random text")).toMatch(urlRegEx);
});
