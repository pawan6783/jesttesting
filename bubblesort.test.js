const bubblesort = require("./bubblesort.js");

test("sort all natural number", () => {

    const arr = [5, 4, 8, 1, 9];

    expect(bubblesort.bubblesort(arr)).toEqual([1, 4, 5, 8, 9]);
});