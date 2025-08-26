# Mapped

```ts
//=====Using keyof
//=====Creating a mapped type
//=====Using mapped type modifiers
//=====Using typeof to infer a type
```

## Quiz

- https://learntypescript.dev/08/l5-quiz

**Question:1**

- How can we remove the type annotations from the savingAction and savedAction variables but maintain strong typing.

```js
type SavingAction = {
  type: "saving";
  payload: string[];
}
const savingAction: SavingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
type SavedAction = {
  type: "saved";
}
const savedAction: SavedAction = {
  type: "saved"
}
type Actions = SavingAction | SavedAction;
```

A:

```js

const savingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
const savedAction = {
  type: "saved"
}
type Actions = typeof savingAction | typeof savedAction;
```

- Using any means that we would not get any type checking. The correct syntax for extracting the type from an object is typeof objectName.

<hr />

**Question 3**

- Structurally, which type is equivalent to the type below?

```js
type Votes = {
    [K in "apple" | "banana" | "strawberry"]: number
}
```

- A3:

```js
{
  apple: number;
  banana: number;
  strawberry: number;
}
```

<hr />

**Question 4:**

- What would be a generic mapped type that removes all the readonly modifiers from an object type like above?

```js
type Person = {
	readonly name: string;
	readonly age: number;
}

//A:
type Writable<T> = {
    -readonly [P in keyof T]: T[P];
}
```
