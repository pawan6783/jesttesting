const functions = require("./functions");

test("add 2 + 2 to equal 4 ", () => {
    expect(functions.checkVal(0)).toBeFalsy();
});

test("check user first jest and last test", ()=>{
    expect(functions.user("jest","test")).toEqual({"first" : "jest", "last" : "test"});
});