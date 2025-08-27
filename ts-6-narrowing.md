# Narrowing

- The non-null assertion operator: `!`
- typeof -> typeof item === "string"
- Class -> instanceof -> contact instanceof Person
- Object -> in
- A user-defined type guard -> contact is Person

```ts
//=====Using type assertions
//EX1
const button = document.querySelector('.go'); //Element | null
if (button) {
  button.disabled = true; //Error
}
//EX2
const button: HTMLButtonElement | null = document.querySelector('.go');
if (button) {
  button.disabled = true;
}
//EX3
const button = <HTMLButtonElement>document.querySelector('.go');
const button = document.querySelector('.go') as HTMLButtonElement;

//=====Using the non-null assertion operator
function duplicate(text: string | null) {
  if (text === null || text === undefined) {
    text = '';
  }
  return text.concat(text); //Error strict mode with strictNullChecks
}
return text!.concat(text!);

//=====Using a typeof type guard
function double(item: string | number) {
  if (typeof item === 'string') {
    return item.concat(item);
  } else {
    return item + item;
  }
}
//=====Using an instanceof type guard

//=====Using an in type guard
propertyName in objectVariable;
function sayHello(contact: Contact) {
  if ('firstName' in contact) {
    console.log('Hello ' + contact.firstName);
  }
}
//=====Using a user-defined type guard with a type predicate
paramName is NarrowTypeName
function isPerson(contact: Contact): contact is Person {
  return (contact as Person).firstName !== undefined;
}
function sayHello(contact: Contact) {
  if (isPerson(contact)) {
    console.log("Hello " + contact.firstName);
  }
}
🤔
function isOrganisation(contact: Contact): contact is Organisation {
  return (contact as Organisation).name !== undefined;
}

//=====Using a user-defined type guard with an assertion signature
//=====Understanding the discriminated union pattern
```

## Quiz

- https://learntypescript.dev/07/l9-quiz

**Question 2**

- What is the type of level in the console.log statement below:

```js
type Level = "low" | "medium" | "high";
function logLevel(level: Level) {
  if (level === "high") {
    console.warn(level);
  }
}
```

- A: The type is narrowed to 'high'.

<hr />

**Question 4**

- What type guards can we use to check animal is of type Dog?

```js

class Dog {
  woff() {
    console.log("woff")
  }
}
class Cat {
  meow() {
    console.log("meow")
  }
}
function speak(animal: Dog | Cat) {
  if (/* TODO: check if type is Dog */) {
    animal.woff();
  } else {
    animal.meow();
  }
}
```

**Answer:**

- animal instanceof Dog
- 'woff' in animal
- The instanceof type guard is a good choice because the code is checking a class instance. The in type guard also works in this case because the woff member can distinguish between the Dog and Cat types.

# TS Playground Quiz

```ts
//Question 1:
const button = document.querySelector('.go'); //Element | null
if (button) {
  button.disabled = true; //Error

//Answer
const button = document.querySelector('.go') as HTMLButtonElement;
if (button) {
  button.disabled = true; //Error
}
//=============================================
//Question 2:
function duplicate(text: string | null) {
  if (text === null || text === undefined) {
    text = '';
  }
  return text.concat(text); //Error strict mode with strictNullChecks
}
//Answer
return text!.concat(text!);
//=============================================
//Question 3:
//function double() with type guard
console.log(double("a")); //aa
console.log(double(1)); //2

//Answer
function double(item: string | number) {
  if (typeof item === 'string') {
    return item.concat(item);
  } else {
    return item + item;
  }
}
//=============================================
//Question 4:
class Contact {
  constructor(public emailAddress: string) {}
}
class Person extends Contact {
  constructor(
    public firstName: string,
    public surname: string,
    emailAddress: string
  ) {
    super(emailAddress);
  }
}
class Organisation extends Contact {
  constructor(public name: string, emailAddress: string) {
    super(emailAddress);
  }
}

function sayHello(contact: Contact) {
	if(contact instanceof Person){
		return `Hello ${contact.firstName}`
	}else if (contact instanceof Organization){
		return `Hello ${contact.name}`
	}
  // TODO - Output Hello {firstName} if a person
  // TODO - Output Hello {name} if an organisation
}

const bob = new Person("Bob", "Young", "bob.young@somewhere.com");
const redBricks = new Organisation(
  "Red Bricks",
  "info.redbricks@somewhere.com"
);

sayHello(bob);
sayHello(redBricks);

//Answer - instanceof
function sayHello(contact: Contact) {
  if (contact instanceof Person) {
    console.log('Hello ' + contact.firstName);
  }
  if (contact instanceof Organisation) {
    console.log('Hello ' + contact.name);
  }
}
//Answer 2 - IN
function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  // TODO - Output Hello {name} if an organisation
	if("firstName" in contact){
		console.log(`Hello ${contact.firstName}`)
	}
  if ("name" in contact){
		console.log(`Hello ${contact.name}`)
	}
}
//=============================================
//Question 5:

function isPerson(contact: Contact) {}
function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
	if(isPerson(contact)){
		console.log(`Hello ${contact.firstName}`)
	}
}
//Answer
function isPerson(contact: Contact): contact is Person {
  return (contact as Person).firstName !== undefined;
}

//=============================================
//Question 6:
//=============================================
//Question 7:
//=============================================
```
