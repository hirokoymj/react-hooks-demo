# Immutable Types

- https://learntypescript.dev/10/l1-readonly-modifier
- readonly -> primitive -> readonly
- readonly -> Object and Array -> readonly, readonly
- `Readonly` Utility type

## Understanding the `readonly` modifier

- Ex1

```js
type Person = {
  name: string;
  readonly age: number;
};
const bob: Person = {
  name: "Bob",
  age: 30,
};
bob.age = 31; //?
```

- Answer: The TypeScript compiler will complain because age can’t be changed after it is initially assigned its value.

- Ex2

```js
class Vehicle {
  constructor(public name: string, public readonly topSpeed: number) { }
}
const mini = new Vehicle("Mini", 120);
mini.topSpeed = 125; //?
```

- Answer: The TypeScript compiler will complain because topSpeed can’t be changed after it is initially assigned its value.

### Summary:

The readonly modifier allows immutable primitive properties to be created. However, this is only compile-time immutability and not runtime immutability.

## Creating readonly objects and array properties

- `readonly propertyName: readonly ArrayType;`

```ts
type TypeName = {
  readonly propertyName: {
    readonly subPropertyName: PropertyType;
  };
};
```

- EX1

```js
interface Result {
  name: string;
  readonly scores: number[];
  readonly profile: {
    level: number;
  };
}
let billScores: Result = {
  name: "Bill",
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
};
console.log(billScores);
billScores.scores.push(70); ///Question? -> no Error=mutable

//EX2
interface Result {
  readonly scores: readonly number[];
}
billScores.profile.level = 2; //immutable
```

- Ex3 - Readonly utility type
- `type ReadonlyType = Readonly<ExistingType>`

```ts
interface Result {
  name: string;
  scores: number[];
  profile: {
    level: number;
  };
}
let billScores: Readonly<Result> = {
  name: 'Bill',
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
};

billScores.name = 'Bob';
```

## Summary

```js
interface Result {
  name: string;
  readonly scores: readonly number[];
  readonly profile: {
    readonly level: number;
  };
}
let billScores: Result = {
  name: "Bill",
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
};

billScores.scores.push(70); //ERROR
console.log(billScores);
billScores.profile.level = 2; //ERROR
```

## Creating readonly array parameters

```ts
type PersonScore = {
  name: string;
  score: number;
};
// function doubleScore(person: PersonScore) {
//   person.score = person.score * 2;
//   return person;
// }

function doubleScore(person: Readonly<PersonScore>) {
  return { ...person, score: person.score * 2 };
}

const bill: PersonScore = {
  name: 'Bill',
  score: 90,
};
const doubleBill = doubleScore(bill);
console.log(bill, doubleBill);
```

## Creating deep immutable types - Const

`let variableName = someValue as const;`

```ts
const bill = {
  name: 'Bill',
  profile: {
    level: 1,
  },
  scores: [90, 65, 80],
};
bill.name = 'Bob';
bill.profile.level = 2;
bill.scores.push(100);

//Using const
const bill = {
  name: 'Bill',
  profile: {
    level: 1,
  },
  scores: [90, 65, 80],
} as const; //Immutable
//Yes, bill has an immutable type, so all the assignments raise type errors now.
```
