// Class code examples

// This is a funciton that will be attached to the GLOBAL object
// therefore the "this" keyword will point to the global object
function sayHelloFloating(){
    console.log("this object of a floating function", this)
    console.log("this.firstName", this.firstName)
}

sayHelloFloating()


const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello(){
        console.log(this.firstName)
    }
}

// This fucniton is attached to a "person1" object
// and therefore the "this" keyword will refer to the person1
person1.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){
        console.log(`Buen día, soy ${this.firstName}. I am ${this.age} years old`)
    }
}

person2.sayHello()

const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}

console.log("abstractPerson", abstractPerson.tellAge())

console.log(abstractPerson.tellAge.bind(person1)())


// Example 2

        // Global context: window
        console.log('GLOBAL context:', this)


        // Function context: window
        function whatsMyContext() {
            console.log('FUNCTION context:', this)
        }
        whatsMyContext()


        const person = {
            name: 'Marco',
            weight: 80,
            walk1() {
                this.weight -= .1                               // Method context: self object
                console.log('ANow I weight ', this.weight)
            },
            walk2() {
                setInterval(function () {
                    this.weight -= .1                           // OPS! function context is window
                    console.log('Now I weight ', this.weight)
                }, 1000)
            },
            walk3() {                                           // FORBIDDEN. 
                const popino = this
                setInterval(function () {
                    popino.weight -= .1
                    console.log('Now I weight ', popino.weight)
                }, 1000)
            },
            walk4() {
                setInterval(function () {                       // YAY! .bind() declares an specific context in a function
                    this.weight -= .1
                    console.log('Now I weight ', this.weight)
                }.bind(this), 1000)
            },
            walk5() {
                setInterval(() => {                             // YAY! Arrow functions are not seen by this
                    this.weight -= .1
                    console.log('Now I weight ', this.weight)
                }, 1000)
            },
        }

        person.walk1()
        person.walk2()
        person.walk3()
        person.walk4()
        person.walk5()