# I want to go home

`npm install i-want-to-go-home`

## Usage

```ts
enum TestEnum {
  A,
  B = 1,
  C = 0
}

TestEnum[0] // 'C' (Last key)

getFirstKey(Enum, 0) // 'A' (First key)

console.log(createArrayWithOnlyFirstKey(TestEnum)) // ['A', 'B']
// Equal to:
createArrayWithOnlyFirstKey(TestEnum, getMaxValue(TestEnum) + 1)

// If the maximum value is known, assign the maximum value + 1 to the second argument:
createArrayWithOnlyFirstKey(TestEnum, 2)

enum TestEnum1 {
  A = 1
};

createArrayWithOnlyFirstKey(TestEnum1, 2) // [ '', 'A' ]
createArrayWithOnlyFirstKey(TestEnum1, 1) // [ '' ]
```

The `createArrayWithOnlyFirstKey` function truncates keys other than 0 and natural numbers.
In that case, the `createNumericKeysObjectWithOnlyFirstKey` function can be used:

```ts
enum TestEnum2 {
  D = -1
};

createNumericKeysObjectWithOnlyFirstKey(TestEnum2) // { '-1': 'D' }
```

`findFirstKey` function does not support `NaN`, so the array returned by `createNumericKeysObjectWithOnlyFirstKey` function does not contain `NaN`.
