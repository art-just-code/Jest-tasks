const randomizer = require("./randomizer");

// Ваш код здесь
it("Проверка на возврат типа число", () => {
    expect(typeof randomizer()).toBe("number"); // проверка на тип возвращаемых данных
});
it("Проверка на больше/равно 10", () => {
    expect(randomizer()).toBeGreaterThanOrEqual(10);
});
it("Проверка на меньше/равно 80", () => {
    expect(randomizer()).toBeLessThanOrEqual(80);
});
