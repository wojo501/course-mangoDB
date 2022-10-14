const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect('mongodb://localhost/testdb', () => {
    console.log("Connected")
},
    e => {
        console.error(e)
    }
);

run()
async function run() {
    const user = new User({ name: "Kyle", age: 26 })
    await user.save()
    console.log(user)
}

console.log("Hello")