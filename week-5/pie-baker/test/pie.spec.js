/**
 * Author: Darwin Pena Cabrera
 * Date: 04/26/2026
 * File Name: pie.spec.js
 * Description: test file
 */

"use strict";

const { bakePie } = require("../src/pie");

// test for process.exit

const exitMock = jest.spyOn(process, "exit").mockImplementation((code) => code);

let log;

beforeEach(() => {
  log = jest.spyOn(console, "warn");
});

afterEach(() => {
  log.mockRestore();
});

afterAll(() => {
  exitMock.mockRestore();
});

describe("bakePie function", () => {

  test("successfully bakes pie when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apple"]);

    expect(result).toBe("Success: apple pie baked successfully with flour, sugar, butter, apple.");
    
    expect(exitMock).not.toHaveBeenCalled();
  });

  test("failure due to missing one or more essential ingredient", () => {
    bakePie("apple", ["flour", "sugar"]);

    expect(exitMock).toHaveBeenCalledWith(1);
    expect(log).toHaveBeenCalled();
  });

  test("Returns correct success message", () => {
    const result = bakePie("cherries", ["flour", "sugar", "butter", "cherries"]);

    expect(result).toBe("Success: cherries pie baked successfully with flour, sugar, butter, cherries.");
  });
});


