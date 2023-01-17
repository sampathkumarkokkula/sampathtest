//Refactoring function

        const printName = name => "Hi"+" "+name;
        console.log(printName("Sampath"))

// Rewrite the following code using template literals

        const printBill = (name,bill) => `Hi ${name}, please pay: ${bill}`
        console.log(printBill("Sampath",250))

// Modify the following code such that the object properties are destructured and logged.

const person = {
    fullname: "Noam Chomsky",
    age: 92
}

let { fullname, age } = person
console.log("Name: "+fullname)
console.log("Age "+age)
