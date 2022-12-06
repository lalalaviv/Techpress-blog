const { User } = require('../models');

const userData = [
    {
        username: "johnnyboy",
        twitter: "johnnyboy",
        github: "johnnyboy",
        email: "johnny@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "frankr",
        twitter: "frankr",
        github: "frankr",
        email: "frank@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "linas",
        twitter: "linas",
        github: "linas",
        email: "lina@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "morisk",
        twitter: "morisk",
        github: "morisk",
        email: "morisk@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "viv",
        twitter: "viv",
        github: "viv",
        email: "viv@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "alicew",
        twitter: "alicew",
        github: "alicew",
        email: "alice@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;