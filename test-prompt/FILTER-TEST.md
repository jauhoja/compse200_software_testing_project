Based on following test cases create tests for src/filter.js. Name the generated test file as filter.ai.test.js.

| **Id** | **Purpose**                         | **Parameters**                                                 | **Expeted** **results/behavior** |
| :----- | :---------------------------------- | :------------------------------------------------------------- | :------------------------------- |
| 8      | Strings out of multityped array     | [”asdf", 12, 23, “qwer”], string predicate                     | [“asdf”, “qwer”]                 |
| 9      | Specific out of string array        | [“asdf”, “req”, “asdf”, “qwer], predicate matching “asdf”      | [“asdf”, “asdf”]                 |
| 10     | Specific out of a long string array | [“asdf”, “qwer”, “rewq”,  ... 100 items ... “fdsa”], predicate |                                  |
| 11     | No matching strings                 | [“asdf”, “req”, “asdf”, “qwer”], predicate matching “lol”      | []                               |
| 12     | Specific out of number array        | [1,2,3,4,5,5,4,3,2,1], predicate matching every even number    | [2,4,4,2]                        |
| 13     | Predicate without return value      | [“asdf”, 123], predicate without return                        | Some error or erroreus result    |
| 14     | Empty input array                   | [], valid predicate                                            | []                               |
