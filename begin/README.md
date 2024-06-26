===
**toBe** сопоставляет примитивные значения или ссылки на объекты:
// Тесты пройдут
expect('Ожидание').toBe('Ожидание');

const a = {};
const b = a;
expect(a).toBe(b);

// Тесты не пройдут
expect('Ожидание').toBe('Реальность');

const a = {};
const b = {};
expect(a).toBe(b);
===
**toEqual** сопоставляет объекты или массивы.
При сравнении объектов метод проверяет, что в полученном объекте есть те же ключи с теми же значениями, что и в ожидаемом. В проверяемом объекте при этом могут быть и другие свойства — их метод toEqual просто игнорирует.
При сравнении массивов метод проверяет, что в полученном результате все элементы точно совпадают. При этом просто пропущенные элементы и undefined считаются равными:
// Тесты пройдут
expect({ a: undefined, b: 10, c: 'text' }).toEqual({ b: 10, c: 'text' });
expect([1, 2, 3]).toEqual([1, 2, 3]);
expect([[undefined, 1]]).toEqual([[,1]]) // в правом массиве первый элемент пропущен

// Тесты не пройдут
expect({ a: undefined, b: 10, c: 'text' }).toEqual({ a: 12, b: 10, c: 'text' });
expect([1, 2, 3, undefined]).toEqual([1, 2, 3]); // массивы не совпадают по длине, в конце правого отсутствует ","
===
**toStrictEqual** тоже сопоставляет объекты или массивы, но более строго: ожидаемый объект или массив должен полностью соответствовать действительному. То есть обладать теми же свойствами или элементами. Тут undefined и пропущенный элемент не равны:
// Тесты пройдут
expect({ b: 10, c: 'text' }).toStrictEqual({ b: 10, c: 'text' });
expect([3,4,undefined]).toStrictEqual([3,4,undefined]);

// Тесты не пройдут
expect({ a: undefined, b: 10, c: 'text' }).toStrictEqual({ b: 10, c: 'text' });
expect([[undefined, 1]]).toStrictEqual([[,1]])
===
**toBeTruthy** и **toBeFalsy** сравнивают результат с true и false соответственно:
// Тесты пройдут
expect(1).toBeTruthy();
expect(true).toBeTruthy();
expect(undefined).toBeFalsy();
expect(1/'string').toBeFalsy();

// Тесты не пройдут
expect(null).toBeTruthy();
expect(0).toBeTruthy();
expect(true).toBeFalsy();
===
**toBeUndefined** и **toBeDefined** сравнивают результат со значением undefined.
Метод toBeUndefined проходит, если результат не определён, то есть равен undefined.
А метод toBeDefined наоборот — если результат не равен undefined. Этот тест пройдёт даже со значением null — оно считается определённым.
// Тесты пройдут
expect(1).toBeDefined();
expect(null).toBeDefined();
expect('string').toBeDefined();

// Тесты не пройдут
let x;

expect(x).toBeDefined();
expect(undefined).toBeDefined();
===
**toBeNull** сравнивает результат с null:
// Тесты пройдут
const x = null;

expect(null).toBeNull();
expect(x).toBeNull();

// Тесты не пройдут
expect(0).toBeNull();
expect(undefined).toBeNull();
expect('string').toBeNull();
===
**toMatch** проверяет строку на соответствие регулярному выражению:
// Тесты пройдут
expect('1').toMatch(/^\d+$/);
  expect('1337').toMatch(/^\d+$/);
expect('1337').toMatch(/^\d+$/);

// Тесты не пройдут
expect('21as1').toMatch(/^\d+$/);
  expect('string').toMatch(/^\d+$/);
===
**toContain** проверяет, есть ли в полученном массиве нужное нам значение. Со строками тоже работает:
// Тесты пройдут
expect('Oh, hi Mark!').toContain('Mark');
expect(['Маша', 'Ира', 'Стас']).toContain('Стас');

// Тесты не пройдут
expect(['Маша', 'Ира', 'Стас']).toContain('Миша');
expect('Oh, hi Mark!').toContain('Lisa');
===
**toBeGreaterThan**, **toBeGreaterThanOrEqual**, **toBeLessThan** и **toBeLessThanOrEqual** — операторы математического сравнения. Сравнивают результат с переданным числом:
// Тесты пройдут,
// потому что
expect(2).toBeGreaterThan(1); // 2 больше 1
expect(2).toBeLessThan(3); // 2 меньше 3
expect(2).toBeGreaterThanOrEqual(2); // 2 больше или равно 2
expect(2).toBeLessThanOrEqual(2); // 2 меньше или равно 2

// Тесты не пройдут
// потому что:
expect(2).toBeGreaterThan(2); // 2 не больше 2
expect(2).toBeLessThan(2); // 2 не меньше 2
expect(2).toBeLessThanOrEqual(1); // 2 больше и не равно 1
expect(2).toBeGreaterThanOrEqual(3); // 2 меньше и не равно 3

======

Этих методов хватает для большинства задач. Полный список можно посмотреть в документации: https://jestjs.io/docs/en/getting-started.
