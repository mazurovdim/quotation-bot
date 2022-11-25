import { quotationsFromFile } from "."

const mass = quotationsFromFile()

test('Проверка чтения из файла', () => {
    expect(mass.length).toBeGreaterThan(100)
})