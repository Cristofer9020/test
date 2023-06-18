//this keyword

let user = {
    name: "John",
    age: 32,
    print() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

user.print()