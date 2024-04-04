


class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}



const person1 = new Person("Alice", "Smith", 25, "Female");
console.log(person1.sayFullName()); // Output: Alice Smith

const person2 = new Person();
console.log(person2.sayFullName()); // Output: John Doe
