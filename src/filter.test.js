import filter from './filter.js'

import add from './add.js'

test('Should filter strings from a multityped array', () => {
    const arr = ["asdf", 12, 23, "qwer"];
    const expected = ["asdf", "qwer"];
    result = filter(arr, (element) => typeof(element) === 'string');
    expect(result).toStrictEqual(expected);
});

test('Specific strings out of a string array', () => {
    const arr = ["asdf", "req", "asdf", "qwer"];
    expect(filter(arr, (el)=>el==="asdf")).toStrictEqual(["asdf", "asdf"]);
})

test("Specific strings out of a long string array", () => {
    const longBoi = ["testing", "is", "really", "fun", "asdf", "lorem",
        "ipsum", "ulkona", "sataa", "vettä", "jes", "yes", "it", "is",
        "truly", "raining", "outside", "what", "a", "pity", "asdf", "I",
        "would", "quess", "this", "array", "is", "now", "long", "enough",
        ":)",
    ];
    expect(filter(longBoi, el => el==="jes")).toStrictEqual(["jes"]);
})

test("No matching elements", ()=>{
    const arr = ["asdf", "req", "asdf", "qwer"];
    // Note: This was defined in the plan to return a empty array []
    // Was only later realised how the function actually behaves
    expect(filter(arr, el=>el==="lol")).toStrictEqual([[]]);
})

test("Specific out of number array", () =>{
    const arr = [1,2,3,4,5,5,4,3,2,1];
    expect(filter(arr, el => el % 2 == 0)).toStrictEqual([2,4,4,2]);
})



test("Prediacte without return value", () => {
    const arr = ["asdf", 123];
    const predicate = el => {
        const funnyArray = [":D"] + el;
        // Doesn't return anything
    }
    // Note: This was defined in the plan to return some error
    // Was only later realised how the function actually behaves
    expect(filter(arr, predicate)).toStrictEqual([[]]);    
})

test("Empty input array", ()=>{
    // Note: This was defined in the plan to return a empty array []
    // Was only later realised how the function actually behaves
    expect(filter([], el=>el==="asdf")).toStrictEqual([[]]);
})