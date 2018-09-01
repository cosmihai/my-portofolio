class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  greet() {
    console.log(`hi, I'm ${this.name} and my favorite color is ${this.color}`)
  }
}

module.exports = Person;