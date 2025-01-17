
import { expect, test } from 'vitest';

import { findMissingDucks } from './main';

// helper function to call in certain tests to save writing out 1-40
function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

// 
test("Finds missing ducks", () => {
    const input = [1, 2, 3, 5, 7, 8, 10, 12, 15, 20, 25, 30, 35];
    const expected = range(1, 40).filter(num => !input.includes(num));
    const result = findMissingDucks(input);
    console.log(result);
    expect(result).toEqual(expected);
});

test("Handles all missing ducks", () => {
    const input = [];
    const expected = range(1, 40);
    const result = findMissingDucks(input);
    expect(result).toEqual(expected);
});

test("Handles all ducks present", () => {
    const input = range(1, 40);
    const expected = [];
    const result = findMissingDucks(input);
    expect(result).toEqual(expected);
})

test("Handles duplicate IDs", () => {
    const input = [1, 1, 2, 3, 4, 6, 8, 8, 15];
    const expected = range(1, 40).filter(num => !input.includes(num));                        // checks each number against the input and filters those that are not 
    const result = findMissingDucks(input);
    expect(result).toEqual(expected);
})

test("Handles single duck in input", () => {
    const input = [20];
    const expected = range(1, 40).filter(num => num !== 20);
    const result = findMissingDucks(input);
    expect(result).toEqual(expected);
});

test("Handles non numeric and negatives", () => {
    const input = [null, undefined, 1, 2, "a", 3, 45, -1, -4, 4];
    const expected = [
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
        35, 36, 37, 38, 39, 40
        ]
    const result = findMissingDucks(input);
    expect(result).toEqual(expected);
    });








