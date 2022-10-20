const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect('mongodb://127.0.0.1/testdb', () => {
    console.log("Connected")
},
    e => {
        console.error(e)
    }
);


async function run() {
    // User.findById().save()
    try {
        const user = await User.create({
            name: "Kylie",
            age: 60,
            hobbies: ["Swimming", "Weight Lifting"],
            address: {
                street: "Main Street",
                city: "New York"
            },
            email: "Kyle@gmail.com"
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
    // user.name = "Sally"
    // await user.save()
    // const user = new User({ name: "Kyle", age: 26 })
    // await user.save()
}

async function find() {
    try {
        const user = await User.find({ name: "Kylie" })
        console.log("FOUND USER", user)
    } catch (error) {
        console.log(error.message)
    }
}

async function deleteOne() {
    try {
        const user = await User.deleteOne({ name: "Kylie" })
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

async function findPersonalised() {
    try {
        const user = await User.where("age")
            .gt(10)
            .where("name")
            .equals("Kyle")
            .limit(1)
        user[0].bestFriend = "63511118da9397efcd7100a9"
        await user[0].save()
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

async function introduce() {
    try {
        const user = await User.find().byName("Kylie")
        console.log(user)
        user[0].sayHi()
        console.log(user[0].namedEmail)
    } catch (error) {
        console.log(error.message)
    }
}

const main = async () => {
    await run()
    await find()
    await deleteOne()
    await findPersonalised()
    await introduce()
    console.log("TASK DONE")
}
main()

console.log("Hello")

